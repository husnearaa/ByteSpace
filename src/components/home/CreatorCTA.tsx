import Image from "next/image";

import CreatorBg from "@/assets/images/CTABg.png";

const CreatorCTA = () => {
  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={CreatorBg}
          alt=""
          fill
          priority
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[275px] w-full max-w-[1200px] items-center justify-center px-5 py-12">
        <div className="w-full max-w-[720px] text-center">
          <h2 className="text-[25px] font-bold leading-[1.2] text-white sm:text-[30px] md:text-[32px]">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[10px] font-normal leading-[1.7] text-white/90 sm:text-[11px] md:text-[12px]">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a
            community comprising over 10,000 local and international
            entrepreneurs. Utilize our Course Editor, and showcase your
            expertise by publishing your finest course on the ByteSpace Course
            Library.
          </p>

          <button
            type="button"
            className="mt-6 rounded-full bg-[#D5FF00] px-6 py-2 text-[11px] font-medium text-[#111111] transition-transform duration-200 hover:scale-105"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorCTA;