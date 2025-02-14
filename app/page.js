import React from 'react';
import { Heart } from 'lucide-react';

const ValentinePage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-4 space-y-8">
      {/* Main message with floating hearts animation */}
      <div className="relative text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-600 mb-4 animate-bounce">
          I Love You!!
        </h1>
        <div className="absolute -top-8 -left-8">
          <Heart className="text-purple-400 w-8 h-8 animate-pulse" />
        </div>
        <div className="absolute -top-4 -right-8">
          <Heart className="text-purple-500 w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 gap-4 max-w-xl">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img 
            src="/351CE08D-E8AA-4784-95AE-43095E4B7F2E.JPG" 
            alt="Romantic moment 1" 
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img 
            src="/IMG_0495.jpg" 
            alt="Romantic moment 2" 
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img 
            src="/IMG_0538.jpg" 
            alt="Romantic moment 3" 
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img 
            src="/IMG_7278.jpg" 
            alt="Romantic moment 4" 
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Footer message */}
      <p className="text-xl text-purple-700 mt-8 text-center max-w-md">
        You're my forever velentine!! ❤️
      </p>
    </div>
  );
};

export default ValentinePage;