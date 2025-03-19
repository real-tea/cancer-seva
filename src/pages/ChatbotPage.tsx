import { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I am CanSeva GPT. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    // Simulate bot response (in a real implementation, this would call an AI service)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I understand your concern. While I can provide general information and guidance, please remember that I'm an AI assistant and not a substitute for professional medical advice. I recommend consulting with a healthcare professional for accurate diagnosis and treatment."
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">CanSeva GPT</h1>
        <p className="text-xl text-gray-600">
          Your AI companion for cancer-related questions and guidance
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-[500px] overflow-y-auto p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-4 ${
                  message.type === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.type === 'bot' && (
                  <div className="flex items-center mb-2">
                    <Bot className="h-5 w-5 mr-2" />
                    <span className="font-semibold">CanSeva GPT</span>
                  </div>
                )}
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message here..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              onClick={handleSend}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition flex items-center"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Note: This is an AI assistant. For medical emergencies, please contact emergency services or visit the nearest hospital.
          </p>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">How Can I Help?</h3>
          <ul className="space-y-2">
            <li>• Answer questions about cancer types and symptoms</li>
            <li>• Provide information about treatment options</li>
            <li>• Guide you through our platform's resources</li>
            <li>• Share prevention tips and best practices</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Important Notice</h3>
          <p className="text-gray-600">
            While I can provide general information and guidance, I am not a substitute for professional medical advice. Always consult with qualified healthcare professionals for diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;