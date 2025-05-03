export function Filters() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-4">
      <span className="font-medium text-sm sm:text-base">Filter by:</span>
      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        <select className="px-3 sm:px-4 py-2 border rounded-lg bg-white text-sm min-w-[120px] sm:min-w-0">
          <option>Date posted</option>
        </select>
        <select className="px-3 sm:px-4 py-2 border rounded-lg bg-white text-sm min-w-[120px] sm:min-w-0">
          <option>Salary</option>
        </select>
        <select className="px-3 sm:px-4 py-2 border rounded-lg bg-white text-sm min-w-[120px] sm:min-w-0">
          <option>Job type</option>
        </select>
        <select className="px-3 sm:px-4 py-2 border rounded-lg bg-white text-sm min-w-[120px] sm:min-w-0">
          <option>Experience level</option>
        </select>
        <select className="px-3 sm:px-4 py-2 border rounded-lg bg-white text-sm min-w-[120px] sm:min-w-0">
          <option>On-site / Remote</option>
        </select>
      </div>
    </div>
  );
} 