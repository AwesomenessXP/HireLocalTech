import { Button } from "@/components/ui/button";
import { CategoryButton } from "@/components/ui/category-button";

export function SearchCategoryArea() {
  return (
      <div className="mt-6 md:absolute md:top-[250px] left-1/2 md:transform md:-translate-x-1/2 w-full">
        <div className="flex flex-col gap-y-3 md:gap-y-4 max-w-4xl mx-auto px-4">
          {/** search section **/}
          <div className="flex flex-col gap-4 p-2 border rounded-lg bg-white sm:flex-row sm:items-center sm:justify-between">
        {/* Left side: Selected categories */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 items-center">
              <CategoryButton text="Software" color="#E1F7E9" />
              <CategoryButton text="IT Support" color="#FFE5F7" />
              <button className="px-3 py-[6px] text-gray-500 text-sm leading-tight">+ Add more categories</button>
            </div>
          </div>

          {/* Middle + Right: Search input and Button */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:flex-1 sm:items-center">
            <input
              type="text"
              placeholder="Search job titles..."
              className="flex-1 min-w-[150px] px-3 py-2 border rounded-lg text-sm bg-gray-50"
            />
            <Button className="bg-black text-white rounded-full w-full sm:w-auto">
              Search
            </Button>
          </div>
        </div>

        {/** category suggestions **/}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
          <span className="text-gray-500 whitespace-nowrap">Add more categories</span>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            <CategoryButton text="Data Analytics" color="#FAFFA5" />
            <CategoryButton text="CRM" color="#E5F3FF" />
            <CategoryButton text="Cybersecurity" color="#F0E5FF" />
          </div>
        </div>

      </div>
    </div>
  );
} 