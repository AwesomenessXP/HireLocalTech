// app/context/CategoryContext.tsx

'use client';

import { createContext, useContext, useState } from 'react';

export interface Category {
  name: string;
  selected: boolean;
  color: string;
}

interface CategoryContextValue {
  categories: Category[];
  toggleCategory: (name: string) => void;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const CategoryContext = createContext<CategoryContextValue | undefined>(undefined);

const initialCategories: Category[] = [
  { name: "Software", selected: true, color: "#E1F7E9" },
  { name: "IT Support", selected: true, color: "#FFE5F7" },
  { name: "Sysadmin", selected: true, color: "#FFD580" },
  { name: "Data Analytics", selected: false, color: "#FAFFA5" },
  { name: "CRM", selected: false, color: "#E5F3FF" },
  { name: "Cybersecurity", selected: false, color: "#F0E5FF" },
];

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const toggleCategory = (name: string) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === name ? { ...cat, selected: !cat.selected } : cat
      )
    );
  };

  return (
    <CategoryContext.Provider value={{ categories, toggleCategory, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoryContext);
  if (!context) throw new Error('useCategories must be used within a CategoryProvider');
  return context;
}