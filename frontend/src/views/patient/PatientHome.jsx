import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Conversation from './components/Conversation';
import Exercises from './components/Exercises';
import VoiceAI from './components/VoiceAI';
import Typewriter from 'typewriter-effect';

const PatientHome = () => {
  const [convo, setConvo] = useState({
    user: null,
    gpt: "Let's talk!",
  });

  const updateUserMessage = useCallback((newMessage) => {
    setConvo((prevConvo) => ({ ...prevConvo, user: newMessage }));
  }, []);

  const updateGptResponse = useCallback((newResponse) => {
    setConvo((prevConvo) => ({ ...prevConvo, gpt: newResponse }));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow p-12 overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/2 flex flex-col justify-between h-full">
            <header>
              <h1 className="text-4xl font-medium">Welcome Back</h1>
              <div className="text-3xl">John</div>
            </header>
            {/* <Conversation messages={messages} /> */}
            <div className="flex flex-col gap-4">
              <p className="text-base">{convo.user}</p>
              <p className='text-xl font-medium'>{convo.gpt}</p>
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
          <div className="w-1/2">
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
  );
};

export default PatientHome;
