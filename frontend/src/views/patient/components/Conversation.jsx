import { useEffect, useRef } from 'react';

const Conversation = ({ messages }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    // endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-64 overflow-y-auto pr-32">
      {messages.map((message, index) => (
        <div key={index} className={`h-32 flex items-center justify-center ${message.sender === 'patient' ? 'text-sm text-gray-700' : 'text-sm font-medium text-gray-900'}`}>
          <p className="-center text-lg">{message.text}</p>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default Conversation;
