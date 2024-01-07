import Navbar from "./components/Navbar";
import RecordButton from "./components/RecordButton";
// import Ai3D from './components/Ai3D';
import Conversation from './components/Conversation';
import Exercises from './components/Exercises';
import "./styles.css";
import { useState, useEffect, useCallback } from 'react';
import VoiceAI from './components/VoiceAI';
import axios from 'axios';
import Skeleton from './components/Skeleton';

const PatientHome = () => {
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
        setConvo((prevConvo) => ({ ...prevConvo, gpt: response.data.reply }));
      } catch (error) {
        console.error('Error fetching conversation start:', error);
      }
    };
    startConversation();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
<<<<<<< HEAD
      <main className="flex-grow p-12 overflow-hidden">
=======
      <main className="flex-grow pl-6 overflow-hidden">
>>>>>>> main
        <div className="flex h-full">
          <div className="w-2/3 flex flex-col justify-between h-full left-column">
            <header>
              <h1 className="text-4xl font-medium">Welcome Back</h1>
              <div className="text-3xl">John</div>
            </header>
            {/* <Conversation messages={messages} /> */}
            <div className="flex flex-col gap-4">
              <p className="text-base">{convo.user}</p>
              <p className="text-xl font-medium transition-opacity">
                {convo.gpt !== null
                  ? convo.gpt
                  : <Skeleton />}
              </p>
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
          <div className="w-px mt-40 mb-40 bg-gray-200"></div>
          <div className="w-1/3 right-column">
            <Exercises />
          </div>
        </div>
      </main>
      <div className="relative">
<<<<<<< HEAD
        <VoiceAI
          updateUserMessage={updateUserMessage}
          updateGptResponse={updateGptResponse}
        />
=======
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          {/* <Ai3D /> */}
        </div>
>>>>>>> main
      </div>
      {/* TODO: finish button that calls conversation/end */}
    </div>
  );
};

export default PatientHome;
