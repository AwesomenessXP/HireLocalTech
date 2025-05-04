import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-auto sm:h-[360px] w-full overflow-hidden px-3 sm:px-0">
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto h-full sm:h-[300px] relative">
        {/* On mobile: center text; on larger: standard layout */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-6 text-center sm:text-left">
          {/* Text */}
          <div className="z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] drop-shadow leading-tight">
              The tech job board<br />for the Central Valley.
            </h1>
            <p className="mt-2 text-gray-700 sm:text-lg md:text-xl text-sm font-medium">
              (Land a tech job... without moving to the Bay)
            </p>
          </div>

          {/* Image — hidden on small screens */}
          <div className="hidden sm:block flex-shrink-0 z-0">
            <Image
              src="/city_transparent.png"
              alt="Central Valley skyline"
              width={2000}
              height={2000}
              priority
              className="sm:absolute sm:bottom-0 sm:right-0 sm:h-[250px] md:h-[330px] w-auto object-contain z-0 filter opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 