import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="w-full aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] bg-white overflow-hidden shadow-sm border border-stone-100 relative">
      <div className="absolute inset-0 shimmer-bg" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-white/50 backdrop-blur-md rounded-[1.5rem] p-4 h-32 flex flex-col justify-end space-y-3">
             <div className="h-6 bg-white/60 rounded-full w-3/4"></div>
             <div className="h-4 bg-white/60 rounded-full w-full"></div>
             <div className="h-4 bg-white/60 rounded-full w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;