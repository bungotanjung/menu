import React from 'react';
import { Category } from '../types';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = React.memo(({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 px-2">
      <div className="flex gap-3 px-2 min-w-max">
        <FilterPill 
            label="Semua" 
            isActive={selectedCategory === 'All'} 
            onClick={() => onSelect('All')} 
        />
        {categories.map((category) => (
          <FilterPill
            key={category}
            label={category}
            isActive={selectedCategory === category}
            onClick={() => onSelect(category)}
          />
        ))}
      </div>
    </div>
  );
});

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterPill: React.FC<FilterPillProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
            isActive 
            ? 'text-white shadow-glow' 
            : 'bg-white/60 text-gray-600 border-white/40 hover:bg-white/80'
        }`}
    >
        {isActive && (
            <motion.div 
                layoutId="activePill"
                className="absolute inset-0 bg-primary-600 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        )}
        <span className="relative z-10">{label}</span>
    </button>
)

export default CategoryFilter;