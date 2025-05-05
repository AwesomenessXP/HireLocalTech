
'use client'

import { Button } from "@/components/ui/button";
import { CategoryButton } from "@/components/ui/category-button";
import { useState } from "react";

export function SearchCategoryArea() {

  const [categories, setCategories] = useState([
    { name: "Software", selected: true, color: "#E1F7E9" },
    { name: "IT Support", selected: true, color: "#FFE5F7" },
    { name: "Sysadmin", selected: true, color: "#FFD580" },
    { name: "Data Analytics", selected: false, color: "#FAFFA5" },
    { name: "CRM", selected: false, color: "#E5F3FF" },
    { name: "Cybersecurity", selected: false, color: "#F0E5FF" },
  ]);

  const toggleCategory = (name: string) => {
    setCategories(prev => {
        return prev.map(cat =>
          cat.name === name ? { ...cat, selected: !cat.selected } : cat
        )
      }
    );
  };

  return (
      <div className="mt-6 md:absolute md:top-[250px] left-1/2 md:transform md:-translate-x-1/2 w-full">
        {/** search section **/}
        <div className="flex flex-col gap-y-3 md:gap-y-4 max-w-4xl mx-auto px-4">
          <div className="flex flex-col gap-4 p-4 border rounded-lg bg-white">

            {/* Top Row: Search input + Search button */}
            <div className="flex flex-col sm:flex-row gap-2 w-full items-center">
              <input
                type="text"
                placeholder="Search job titles..."
                className="flex-1 w-full px-3 py-2 border rounded-lg text-sm bg-gray-50"
              />

              <Button className="bg-black text-white rounded-full w-full sm:w-auto">
                Search
              </Button>
            </div>

            {/* Selected Categories (below input + button) */}
            <div className="flex flex-wrap gap-2 items-center">
              {categories.filter(label => label.selected === true).map((label) => (
                <CategoryButton 
                  key={label.name}
                  text={label.name}
                  color={label.color}
                  added={label.selected}
                  onToggle={toggleCategory}
                />
              ))}
            </div>

          </div>

        {/** category suggestions **/}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
          <span className="text-gray-500 whitespace-nowrap">Add more categories</span>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.filter(label => label.selected === false).map((label) => (
                <CategoryButton 
                  key={label.name}
                  text={label.name}
                  color={label.color}
                  added={label.selected}
                  onToggle={toggleCategory}
                />
              ))}
          </div>
        </div>

      </div>
    </div>
  );
} 