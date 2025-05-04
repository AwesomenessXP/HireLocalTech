import { Button } from "@/components/ui/button";
import { CategoryButton } from "@/components/ui/category-button";

export function SearchSection() {
  return (
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
  );
} 