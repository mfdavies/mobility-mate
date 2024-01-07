import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import VoiceAI from './components/VoiceAI';
import axios from 'axios';
import Skeleton from './components/Skeleton';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PatientHome = () => {
  const navigate = useNavigate();
  const [convo, setConvo] = useState({
    user: null,
    gpt: null,
  });

  const updateUserMessage = useCallback((newMessage) => {
    setConvo((prevConvo) => ({ ...prevConvo, user: newMessage }));
  }, []);

  const updateGptResponse = useCallback((newResponse) => {
    setConvo((prevConvo) => ({ ...prevConvo, gpt: newResponse }));
  }, []);

  useEffect(() => {
    const startConversation = async () => {
      const queryParams = new URLSearchParams({
        patient: 'demo',
        practitioner: 'demo',
      });
      try {
        const response = await axios.get(
          `http://localhost:8080/conversation/start?${queryParams.toString()}`
        );
        setConvo((prevConvo) => {
          if (prevConvo.gpt === null) {
            return { ...prevConvo, gpt: response.data.reply };
          }
          return prevConvo;
        });
      } catch (error) {
        console.error('Error fetching conversation start:', error);
      }
    };
    startConversation();
  }, []);

  const handleEndSession = async () => {
    try {
      await axios.post('http://localhost:8080/conversation/end', {}, {
        // TODO: what are thooooose
        params: new URLSearchParams({
          patient: 'demo',
          practitioner: 'demo',
        }) 
      });
      navigate('/')
    } catch (error) {
      console.error('Error ending conversation:', error);
    }
  };

  return (
    <div className="outer-frame text-dark-teal  ">
      <div className="inner-frame flex flex-col h-full p-6">
        {/* <Navbar /> */}
        <main className="flex-grow p-6 overflow-hidden">
          <div className="flex h-full gap-12">
            <div className="w-2/3 flex flex-col justify-between h-full left-column">
              <header className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-medium">Welcome Back</h1>
                  <div className="text-3xl">John</div>
                </div>
                <button
                  onClick={handleEndSession}
                  className='flex items-center gap-2 btn btn-active btn-glass'>
                  Done for the day?
                  <LogOut size={18} />
                </button>
              </header>
              {/* <Conversation messages={messages} /> */}
              <div className="flex flex-col gap-4 w-3/4">
                <p className="text-base">{convo.user}</p>
                <div className="text-xl font-medium">
                  {convo.gpt !== null ? convo.gpt : <Skeleton />}
                </div>
              </div>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="You can type here..."
                  className="input input-bordered w-full max-w-xs mr-2"
                />
                <button className="btn btn-neutral">Prompt</button>
              </form>
            </div>
            <div className="w-1/3 right-column border-l-[1px]">
              <Exercises />
            </div>
          </div>
        </main>
        <div className="relative">
          <VoiceAI
            updateUserMessage={updateUserMessage}
            updateGptResponse={updateGptResponse}
          />
        </div>
        {/* TODO: finish button that calls conversation/end */}
      </div>
    </div>
  );
};

export default PatientHome;
