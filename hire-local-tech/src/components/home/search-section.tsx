import { Button } from "@/components/ui/button";

export function SearchSection() {
  return (
  <div className="flex flex-col gap-4 p-2 border rounded-lg bg-white sm:flex-row sm:items-center sm:justify-between">
    {/* Left side: Selected categories */}
    <div className="flex-1">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="px-3 py-[6px] rounded-full bg-[#E1F7E9] text-sm leading-tight">Sales</span>
        <span className="px-3 py-[6px] rounded-full bg-[#FFE5F7] text-sm leading-tight">Marketing</span>
        <button className="px-3 py-[6px] text-gray-500 text-sm leading-tight">+ Add more categories</button>
      </div>
    </div>

    {/* Right side: Remote + Search button */}
    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
      <span className="px-3 py-[6px] rounded-full border text-sm leading-tight text-center">Remote</span>
      <Button className="bg-black text-white rounded-full w-full sm:w-auto">
        Search
      </Button>
    </div>
  </div>
  );
} 