import React from 'react';
import { Heart, Users, Brain, Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
          Welcome to Can सेवा
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted companion in cancer care and prevention. We're here to support, guide, and empower you through every step of your journey.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Heart className="h-12 w-12 text-pink-500" />,
            title: "Comprehensive Care",
            description: "Access to top cancer treatment facilities and healthcare professionals across India"
          },
          {
            icon: <Users className="h-12 w-12 text-blue-500" />,
            title: "Community Support",
            description: "Connect with others, share experiences, and find emotional support"
          },
          {
            icon: <Brain className="h-12 w-12 text-purple-500" />,
            title: "Expert Guidance",
            description: "Get reliable information about cancer prevention, treatment, and recovery"
          },
          {
            icon: <Sparkles className="h-12 w-12 text-yellow-500" />,
            title: "AI Assistant",
            description: "24/7 support through our intelligent chatbot for immediate assistance"
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-purple-100 rounded-xl p-8 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Why Choose Can सेवा?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">For Patients</h3>
              <ul className="text-left space-y-2">
                <li>✓ Access to top healthcare facilities</li>
                <li>✓ Financial support through crowdfunding</li>
                <li>✓ 24/7 AI-powered assistance</li>
                <li>✓ Community support network</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">For Prevention</h3>
              <ul className="text-left space-y-2">
                <li>✓ Early detection guidelines</li>
                <li>✓ Lifestyle recommendations</li>
                <li>✓ Regular health check-up reminders</li>
                <li>✓ Expert health tips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <img
          src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=1200"
          alt="Medical professionals caring for patients"
          className="rounded-xl shadow-2xl mx-auto mb-8"
        />
        <p className="text-2xl text-purple-900 font-light italic">
          "Together, we can make the journey easier and the future brighter."
        </p>
      </section>
    </div>
  );
};

export default HomePage;