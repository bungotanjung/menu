import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, ArrowLeft } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuDetailProps {
  item: MenuItem | null;
  onClose: () => void;
  lowPerformanceMode?: boolean;
}

const formatRupiah = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

// Depth Transition Configuration
// Simulates a layer popping up from the center with slight spring
const modalTransition = {
    type: "spring",
    damping: 30,
    stiffness: 300,
    mass: 0.8
};

const MenuDetail: React.FC<MenuDetailProps> = ({ item, onClose, lowPerformanceMode = false }) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    return () => {
        document.body.style.overflow = '';
    };
  }, []);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center isolate pointer-events-none">
      
      {/* Dark Backdrop - Fades in */}
      <motion.div
        className="absolute inset-0 bg-stone-900/30 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{ backdropFilter: 'blur(6px)' }}
      />

      {/* Main Modal Card - Scales up from center (Depth effect) */}
      <motion.div
        className="relative w-full h-[95vh] sm:h-auto sm:max-h-[85vh] sm:max-w-xl bg-white shadow-2xl overflow-hidden flex flex-col z-50 pointer-events-auto
                   rounded-t-[2.5rem] sm:rounded-[2.5rem] sm:m-4"
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 40 }}
        transition={modalTransition}
      >
        {/* Floating Close Button */}
        <button
            onClick={onClose}
            className="absolute top-5 left-5 z-40 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md border border-white/20 shadow-lg active:scale-95 transition-transform"
        >
            <ArrowLeft size={24} strokeWidth={2.5} />
        </button>

        {/* Image Header */}
        <div className="relative w-full h-[45vh] sm:h-[400px] shrink-0 bg-stone-200 overflow-hidden">
            <motion.img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                onLoad={() => setImageStatus('loaded')}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="flex-grow flex flex-col px-6 pt-6 pb-12 sm:px-8 sm:pb-14 overflow-y-auto bg-white relative -mt-12 rounded-t-[2.5rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            
            {/* Drag Handle */}
            <div className="w-14 h-1.5 bg-stone-200/80 rounded-full mx-auto mb-8 shrink-0" />

            {/* Header Section */}
            <div className="flex flex-col gap-5 mb-8">
                {/* Badges */}
                <div className="flex gap-2 flex-wrap">
                    {item.isBestSeller && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-lg tracking-wide border border-yellow-100/50">
                        <Star size={12} fill="currentColor" strokeWidth={3} /> BEST SELLER
                    </span>
                    )}
                    {item.isSpicy && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-lg tracking-wide border border-red-100/50">
                        <Flame size={12} fill="currentColor" strokeWidth={3} /> PEDAS
                    </span>
                    )}
                </div>

                <div className="flex justify-between items-start gap-6">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight font-sans flex-1">
                        {item.name}
                    </h2>

                    {/* Price */}
                    <div className="text-xl font-bold text-primary-600 bg-primary-50 px-5 py-3 rounded-2xl whitespace-nowrap shadow-sm border border-primary-100/50">
                        {formatRupiah(item.price)}
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="space-y-8 mb-10">
                <p className="text-gray-600 text-[17px] leading-8 font-normal tracking-wide">
                    {item.description}
                </p>

                {/* Additional Tags */}
                {item.tags && (
                    <div className="flex flex-wrap gap-2.5">
                        {item.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-stone-50 text-stone-500 rounded-xl text-xs font-semibold border border-stone-100">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Action Footer */}
            <div className="mt-auto pt-4">
                <div className="w-full bg-stone-50 border border-stone-100 rounded-[1.5rem] p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                     <a 
                        href="https://wa.me/qr/CGV5HUTFHF66E1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-200 active:scale-95 transition-all flex items-center justify-between group"
                    >
                        <div className="flex flex-col items-start">
                             <span className="text-lg leading-none mb-1">Pesan Sekarang</span>
                             <span className="text-xs font-normal text-white/60">via WhatsApp</span>
                        </div>
                        
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <ArrowLeft className="rotate-180" size={20} />
                        </div>
                     </a>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuDetail;