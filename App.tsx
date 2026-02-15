import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { UtensilsCrossed, Search, Phone, ShoppingBag, Sparkles } from 'lucide-react';
import { APP_NAME, APP_SUBTITLE, MENU_ITEMS, WA_CONTACT_1, WA_CONTACT_NAME_1, WA_CONTACT_2, WA_CONTACT_NAME_2 } from './constants';
import { Category, MenuItem } from './types';
import MenuCard from './components/MenuCard';
import MenuDetail from './components/MenuDetail';
import CategoryFilter from './components/CategoryFilter';
import SkeletonCard from './components/SkeletonCard';

// Simple heuristic for low performance devices
const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') return false;
  // @ts-ignore
  if (navigator.deviceMemory && navigator.deviceMemory < 4) return true;
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) return true;
  return false;
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLowPerf, setIsLowPerf] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize app state
  useEffect(() => {
    setIsLowPerf(isLowEndDevice());
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const categories = Object.values(Category);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Animation variants for the main background content
  // Creates the "Recede" depth effect
  const mainContentVariants = {
    active: { 
        scale: 1, 
        filter: "blur(0px) brightness(1)", 
        borderRadius: "0px",
        y: 0 
    },
    inactive: { 
        scale: 0.94, 
        filter: "blur(4px) brightness(0.8)", 
        borderRadius: "24px",
        y: 10 // Slight push down for weight
    }
  };

  return (
    <div className="min-h-screen font-sans bg-stone-100 overflow-hidden relative">
      
      {/* Main Content Wrapper - Animates depth when modal opens */}
      <motion.div
        variants={mainContentVariants}
        animate={selectedItem ? "inactive" : "active"}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="min-h-screen pb-12 flex flex-col origin-top bg-[#f3f4f6] shadow-2xl"
      >
        {/* Floating Header */}
        <header className={`sticky top-4 z-40 px-4 transition-all duration-300 ${scrolled ? 'pt-0' : 'pt-2'}`}>
            <div className={`max-w-5xl mx-auto rounded-3xl transition-all duration-300 border border-white/40 shadow-glass ${
                scrolled ? 'bg-white/80 backdrop-blur-xl py-2' : 'bg-white/50 backdrop-blur-lg py-4'
            }`}>
                <div className="px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-2xl flex items-center justify-center text-white shadow-glow rotate-3 transform">
                            <UtensilsCrossed size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-extrabold leading-none tracking-tight text-gray-900">{APP_NAME}</h1>
                            <p className="text-xs text-primary-600 font-bold tracking-wide mt-0.5">{APP_SUBTITLE}</p>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                        className="w-10 h-10 rounded-full bg-white/60 hover:bg-white text-gray-700 flex items-center justify-center backdrop-blur-sm transition-all shadow-sm hover:shadow-md"
                    >
                        <Search size={20} />
                    </button>
                </div>

                {/* Search Bar - Expandable */}
                <AnimatePresence>
                {isSearchVisible && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-4"
                    >
                        <div className="py-3">
                            <input 
                            type="text"
                            placeholder="Cari menu favorit..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/70 backdrop-blur-md rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all border border-white/50 shadow-inner"
                            autoFocus
                            />
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>

                {/* Filter Chips */}
                <CategoryFilter 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    onSelect={setSelectedCategory} 
                />
            </div>
        </header>

        {/* Main Grid */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 flex-grow w-full z-10">
            
            {/* Header Title for Section */}
            <div className="mb-6 flex items-center gap-2 px-2">
                <Sparkles size={18} className="text-primary-500 animate-pulse" />
                <h2 className="text-xl font-bold text-gray-800">
                    {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : selectedCategory === 'All' ? 'Menu Pilihan' : selectedCategory}
                </h2>
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                        key={`skeleton-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <SkeletonCard />
                    </motion.div>
                    ))}
                </div>
            ) : filteredItems.length > 0 ? (
                <div className="space-y-12">
                    {categories.map((category) => {
                        const categoryItems = filteredItems.filter(item => item.category === category);
                        if (categoryItems.length === 0) return null;

                        return (
                            <div key={category} className="space-y-5">
                                {/* Only show header in 'All' mode */}
                                {selectedCategory === 'All' && (
                                    <div className="flex items-center gap-4 px-1">
                                        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                                            {category}
                                        </h3>
                                        <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-grow rounded-full"></div>
                                    </div>
                                )}
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {categoryItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ 
                                                type: "spring", 
                                                stiffness: 200, 
                                                damping: 20, 
                                                delay: isLowPerf ? 0 : index * 0.05 
                                            }}
                                        >
                                            <MenuCard 
                                                item={item} 
                                                onClick={setSelectedItem} 
                                                lowPerformanceMode={isLowPerf}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-20 text-center text-gray-500"
                >
                <div className="mb-4 mx-auto w-20 h-20 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-glass">
                    <Search size={32} className="opacity-50" />
                </div>
                <p className="text-lg font-medium">Menu tidak ditemukan</p>
                <p className="text-sm opacity-60">Coba kata kunci lain</p>
                </motion.div>
            )}
        </main>

        {/* Footer Info */}
        <footer className="max-w-2xl mx-auto px-4 py-8 mt-12 w-full text-center relative z-10">
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-glass mb-8">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                        <Phone size={18} />
                    </div>
                    Pesan Sekarang
                </h3>
                <div className="flex flex-col gap-3">
                    <a href={`https://wa.me/${WA_CONTACT_1.replace('+', '')}`} className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
                        <span className="font-medium text-gray-700">{WA_CONTACT_NAME_1}</span>
                        <span className="font-mono text-primary-600 font-bold group-hover:scale-105 transition-transform">{WA_CONTACT_1}</span>
                    </a>
                    <a href={`https://wa.me/${WA_CONTACT_2.replace('+', '')}`} className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
                        <span className="font-medium text-gray-700">{WA_CONTACT_NAME_2}</span>
                        <span className="font-mono text-primary-600 font-bold group-hover:scale-105 transition-transform">{WA_CONTACT_2}</span>
                    </a>
                </div>
            </div>

            <div className="text-xs text-gray-500 space-y-3 font-medium">
                <div className="flex justify-center gap-4 mb-4 opacity-70">
                    <span>QRIS</span>
                    <span>•</span>
                    <span>Transfer Bank</span>
                    <span>•</span>
                    <span>Tunai</span>
                </div>
                <p className="flex items-center justify-center gap-1">
                    <ShoppingBag size={12} />
                    Tersedia di GoFood & GrabFood
                </p>
                <p className="opacity-60">© {new Date().getFullYear()} {APP_NAME}. Authentic Padang Cuisine.</p>
            </div>
        </footer>
      </motion.div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <MenuDetail 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
            lowPerformanceMode={isLowPerf}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;