import Image from "next/image";

import CreatorBg from "@/assets/images/CTABg.png";

const CreatorCTA = () => {
  return (
    <section className="relative min-h-[460px] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={CreatorBg}
          alt=""
      width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover"
        />
      </div>

{/* Content */}
<div className="relative z-10 mt-8 mx-auto flex min-h-[275px] w-full max-w-[1200px] items-center justify-center px-5 py-12">
  <div className="w-full max-w-[1000px] text-center">
    <h2 className="text-[25px] font-semibold leading-[1.2] text-white md:text-[32px] lg:text-[42px]">
      Unlock Your Potential as a
      <br />
      Creator with ByteSpace
    </h2>

    <p className="mx-auto mt-12 max-w-[950px] text-[10px] font-light leading-[1.7] text-white/90 md:text-[12px] lg:text-[16px]">
      Experience the collaboration of numerous creators and an expanding
      selection of courses. Register now and become a part of a
      community comprising over 10,000 local and international
      entrepreneurs. Utilize our Course Editor, and showcase your
      expertise by publishing your finest course on the ByteSpace Course
      Library.
    </p>

    <button
      type="button"
      className="mt-6 rounded-full bg-[#D5FF00] px-6 py-3 text-[14px] font-normal text-[#111111] transition-transform duration-200 hover:scale-105"
    >
      Join as Creator
    </button>
  </div>
</div>
    </section>
  );
};

export default CreatorCTA;