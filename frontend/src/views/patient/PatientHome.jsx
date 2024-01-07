import Navbar from "./components/Navbar";
import RecordButton from "./components/RecordButton";
import Ai3D from './components/Ai3D';
import Conversation from './components/Conversation';
import Exercises from './components/Exercises';

const PatientHome = () => {
  const messages = [
    {
      sender: 'patient',
      text: 'Hi there, and I was hoping to try something new today. Can you guide me through a specific exercise from the set you provided?',
    },
    {
      sender: 'ai',
      text: "Of course! I'm glad to hear you've been keeping up with your exercises. Which one were you thinking of trying, or do you have a specific area you'd like to focus on today?",
    },
    {
      sender: 'patient',
      text: 'Hi there, and I was hoping to try something new today. Can you guide me through a specific exercise from the set you provided?',
    },
    {
      sender: 'ai',
      text: "Of course! I'm glad to hear you've been keeping up with your exercises. Which one were you thinking of trying, or do you have a specific area you'd like to focus on today?",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow p-6 overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/2 flex flex-col justify-between h-full">
            <header>
              <h1 className="text-4xl font-medium">Welcome Back</h1>
              <div className="text-3xl">John</div>
            </header>
            <Conversation messages={messages} />
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
      <RecordButton />
      <div className="relative">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Ai3D />
        </div>
      </div>
    </div>
  );
};

export default PatientHome;
