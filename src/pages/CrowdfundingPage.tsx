import React, { useEffect, useState } from 'react';
import { IndianRupee, Users, Target, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  current_amount: number;
  upi_id: string;
  end_date: string;
  created_at: string;
}

const CrowdfundingPage = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCampaigns(data || []);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">Help Save Lives</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your contribution can make a significant difference in someone's fight against cancer.
          Support these campaigns and help families in need.
        </p>
      </section>

      {loading ? (
        <div className="text-center py-8">Loading campaigns...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>
                
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-purple-900 mb-2">Support via UPI:</p>
                  <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-200">
                    <span className="text-gray-700">{campaign.upi_id}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(campaign.upi_id)}
                      className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                    >
                      Copy UPI ID
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min((campaign.current_amount / campaign.goal) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Raised: ₹{campaign.current_amount.toLocaleString()}</span>
                    <span className="text-gray-600">Goal: ₹{campaign.goal.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Ends on: {new Date(campaign.end_date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <section className="bg-purple-50 rounded-xl p-8 mt-12">
        <h2 className="text-2xl font-bold text-purple-900 mb-6">Start a Fundraiser</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600">
              Need financial support for cancer treatment? Start your own fundraiser and reach out to
              thousands of donors willing to help.
            </p>
            <Link 
              to="/add-campaign" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Create Campaign
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Why Choose Our Platform?</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                0% platform fee
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                24/7 expert support
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                Quick fund withdrawal
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 mr-2">✓</span>
                Social media promotion
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrowdfundingPage;