export function CategorySuggestions() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
      <span className="text-gray-500 whitespace-nowrap">Add more categories</span>
      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        <span className="px-3 py-[6px] rounded-full bg-[#FAFFA5] text-sm whitespace-nowrap">Data Analytics</span>
        <span className="px-3 py-[6px] rounded-full bg-[#E5F3FF] text-sm whitespace-nowrap">CRM</span>
        <span className="px-3 py-[6px] rounded-full bg-[#F0E5FF] text-sm whitespace-nowrap">Cybersecurity</span>
      </div>
    </div>
  );
} 