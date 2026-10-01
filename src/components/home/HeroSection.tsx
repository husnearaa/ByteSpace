import Image from "next/image";

import HeroBg from "@/assets/images/HeroImg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={HeroBg}
          alt="ByteSpace hero background"
          fill
          priority
          className="h-full w-full object-cover"
        />
      </div>

      {/* Background Image - Tablet/Desktop */}
      <div className="hidden md:block">
        <Image
          src={HeroBg}
          alt="ByteSpace hero background"
          width={1200}
          height={600}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      {/* Hero Content - Top Center */}
      <div className="absolute inset-0 flex items-start justify-center">
        <div className="w-full max-w-3xl px-6 text-center pt-24">
          <h1 className="text-balance text-lg font-bold leading-tight text-white md:text-4xl lg:text-6xl">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-xs text-white/90 md:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Form */}
          <form
            role="search"
            action="/search"
            className="mx-auto mt-10 flex w-full max-w-xl flex-col items-center gap-3 md:flex-row"
          >
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>

            <div className="relative w-full flex-1">
              {/* Search Icon */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>

              <input
                id="course-search"
                name="q"
                type="search"
                placeholder="Course, topic, creator"
                className="h-12 w-full rounded-full bg-white pl-12 pr-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#D4F83C]"
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-full bg-[#D4F83C] px-8 text-sm font-semibold text-[#0A1F8F] transition-colors hover:bg-[#C2E82A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;