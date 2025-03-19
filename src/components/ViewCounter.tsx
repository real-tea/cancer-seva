import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const ViewCounter = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const currentViews = parseInt(localStorage.getItem('pageViews') || '0', 10);
    const newViews = currentViews + 1;
    localStorage.setItem('pageViews', newViews.toString());
    setViews(newViews);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 z-40">
      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
      <span className="text-sm sm:text-base font-semibold text-purple-900">{views.toLocaleString()} views</span>
    </div>
  );
};

export default ViewCounter;