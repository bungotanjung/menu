import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';
import { Flame, Star, ImageOff, Plus } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
  lowPerformanceMode?: boolean;
}

const formatRupiah = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

const MenuCard: React.FC<MenuCardProps> = React.memo(({ item, onClick, lowPerformanceMode = false }) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <motion.div
      onClick={() => onClick(item)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={lowPerformanceMode ? {} : { scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer shadow-glass hover:shadow-glow bg-white z-0"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-stone-200 overflow-hidden">
        {imageStatus === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
            <ImageOff size={24} className="opacity-40 mb-1" />
          </div>
        )}

        <img
          src={item.imageUrl}
          alt={item.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            imageStatus === 'loaded' ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
          }`}
          onLoad={() => setImageStatus('loaded')}
          onError={() => setImageStatus('error')}
          loading="lazy"
        />
        
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
      </div>

      {/* Floating Price Tag (Top Right) */}
      <div className="absolute top-4 right-4 z-20">
        <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center gap-1">
             <span className="text-xs font-bold text-gray-900">
                {formatRupiah(item.price)}
            </span>
        </div>
      </div>

      {/* Badges (Top Left) */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {item.isBestSeller && (
            <div 
                className="w-8 h-8 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center shadow-lg"
            >
                <Star size={14} fill="currentColor" />
            </div>
          )}
          {item.isSpicy && (
             <div 
                className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg"
             >
                <Flame size={14} fill="currentColor" />
             </div>
          )}
      </div>

      {/* Glass Content Area (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] p-4 shadow-lg text-white">
            <h3 className="text-lg font-bold leading-tight mb-1 drop-shadow-md line-clamp-2">
                {item.name}
            </h3>
            <p className="text-xs text-white/80 line-clamp-2 font-light leading-relaxed mb-3">
                {item.description}
            </p>
            
            <div className="flex items-center justify-between">
                <div className="flex gap-1">
                    {item.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/10 backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-primary-600 flex items-center justify-center transform transition-transform group-hover:rotate-90">
                    <Plus size={16} strokeWidth={3} />
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
});

export default MenuCard;