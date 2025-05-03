import { Button } from "@/components/ui/button";

export function JobCard() {
  return (
    <div className="border rounded-lg p-6 mt-4">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[#E1F7E9] rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L15.8033 15.8033M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Sales representative</h2>
            <p className="text-gray-600">Science Inc.</p>
          </div>
        </div>
        <Button variant="link" className="text-blue-600 hover:text-blue-800">
          Apply <span className="ml-1">→</span>
        </Button>
      </div>
      <p className="mt-4 text-gray-700">
        Full-time hours with amazing overtime opportunities! Working in supportive environment with great opportunities to grow.
      </p>
      <div className="flex gap-2 mt-4">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Full-time</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Hybrid</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Senior</span>
      </div>
    </div>
  );
} 