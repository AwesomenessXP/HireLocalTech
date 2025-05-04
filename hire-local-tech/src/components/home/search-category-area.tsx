import { SearchSection } from "./search-section";
import { CategorySuggestions } from "./category-suggestions";

export function SearchCategoryArea() {
  return (
    <div className="mt-6 md:absolute md:top-[250px] left-1/2 md:transform md:-translate-x-1/2 w-full">
      <div className="flex flex-col gap-y-3 md:gap-y-4 max-w-4xl mx-auto px-4">
        <SearchSection />
        <CategorySuggestions />
      </div>
    </div>
  );
} 