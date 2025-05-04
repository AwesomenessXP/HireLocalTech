import { CategoryButton } from "@/components/ui/category-button";

export function CategorySuggestions() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
      <span className="text-gray-500 whitespace-nowrap">Add more categories</span>
      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        <CategoryButton text="Data Analytics" color="#FAFFA5" />
        <CategoryButton text="CRM" color="#E5F3FF" />
        <CategoryButton text="Cybersecurity" color="#F0E5FF" />
      </div>
    </div>
  );
} 