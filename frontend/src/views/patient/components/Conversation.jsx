import { useEffect, useRef } from 'react';
import Skeleton from './Skeleton';

const Conversation = ({convo, isRecording }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [convo]);

  return (
    <div className="gap-2 flex flex-col max-h-screen overflow-y-scroll scroll-smooth">
      {convo.map((message, index) => (
        <div
          key={index}
          className={`text-lg border-[1px] p-2 rounded-box text-dark-teal ${
            message.type === 'gpt' ? 'font-medium' : 'font-light'
          }`}
        >
          {message.text}
        </div>
      ))}
      {!isRecording &&
        (convo.length === 0 || convo[convo.length - 1].type === 'user') && (
          <div className="border-[1px] px-2 py-4 rounded-box">
            <Skeleton />
          </div>
        )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Conversation;
