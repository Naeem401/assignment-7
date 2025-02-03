import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isBot: false }]);
      setNewMessage('');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isChatOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          {/* Chat Header */}
          <div className="bg-[#F26922] p-4 rounded-t-lg">
            <h3 className="font-bold text-[18px] text-white">SChat with Cypher</h3>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-[#F26922] text-white rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        
      >
        {isChatOpen ? (
         <div className="bg-white rounded-full p-5 shadow-lg text-[52px]">
         <AiOutlineClose className="h-6 w-6 text-black" />
       </div>
        ) : (
            <span className='text-[52px] text-white bg-[#F26922] px-5 rounded-full'>
            C
         </span>
        )}
      </button>
    </div>
  );
};

export default ChatButton;
