import Image from "next/image";

import BackgroundImage from "@/assets/images/sectionBg.png";
import FirstImage from "@/assets/images/avatar/first.png";
import SecondImage from "@/assets/images/avatar/last.png";

const ProfessionalGrowth = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={BackgroundImage}
          alt=""
          fill
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        {/* ================= FIRST CONTENT ================= */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
          {/* First Text */}
          <div className="w-full max-w-[430px] lg:w-1/2">
            <h2 className="max-w-[360px] text-[28px] font-bold leading-[1.15] text-[#202020] md:text-[32px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-5 max-w-[390px] text-[12px] leading-[1.7] text-[#777777] md:text-[13px]">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            {/* Statistics */}
            <div className="mt-6 flex items-center gap-8">
              <div>
                <h3 className="text-[18px] font-semibold text-[#0047FF]">
                  12K
                </h3>
                <p className="text-[9px] text-[#777777]">Students</p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#0047FF]">
                  70+
                </h3>
                <p className="text-[9px] text-[#777777]">Courses</p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#0047FF]">
                  16
                </h3>
                <p className="text-[9px] text-[#777777]">Creators</p>
              </div>
            </div>
          </div>

          {/* First Image */}
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
            <Image
              src={FirstImage}
              alt="Professional learning"
              width={520}
              height={420}
              priority
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </div>

        {/* ================= SECOND CONTENT ================= */}
        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-10 lg:mt-4 lg:flex-row lg:gap-16">
          {/* Second Image */}
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
            <Image
              src={SecondImage}
              alt="Course management"
              width={520}
              height={420}
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>

          {/* Second Text */}
          <div className="w-full max-w-[430px] lg:w-1/2">
            <h2 className="max-w-[360px] text-[28px] font-bold leading-[1.15] text-[#202020] md:text-[32px]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="mt-5 max-w-[390px] text-[12px] leading-[1.7] text-[#777777] md:text-[13px]">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Features */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0047FF] text-[9px] text-white">
                  ✓
                </span>
                <span className="text-[11px] text-[#333333]">
                  Share Your Expertise
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0047FF] text-[9px] text-white">
                  ✓
                </span>
                <span className="text-[11px] text-[#333333]">
                  Monetize Your Passion
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0047FF] text-[9px] text-white">
                  ✓
                </span>
                <span className="text-[11px] text-[#333333]">
                  Flexibility and Autonomy
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0047FF] text-[9px] text-white">
                  ✓
                </span>
                <span className="text-[11px] text-[#333333]">
                  Build a Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalGrowth;