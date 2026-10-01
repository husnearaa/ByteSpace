import Image, { StaticImageData } from "next/image";

import CommunityBg from "@/assets/images/CommunityBg.png";

import SarahProfile from "@/assets/images/avatar/Sarah.png";
import JamesProfile from "@/assets/images/avatar/James.png";
import AlexProfile from "@/assets/images/avatar/Alex.png";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: SarahProfile,
    review:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    image: JamesProfile,
    review:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    image: AlexProfile,
    review:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const CommunityTestimonials = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={CommunityBg}
          alt=""
          fill
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div>
            <h2 className="max-w-[390px] text-[30px] font-bold leading-[1.15] text-[#050505] sm:text-[34px] md:text-[36px]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div>
            <p className="max-w-[440px] text-[12px] leading-[1.7] text-[#555555] sm:text-[13px] md:text-[14px]">
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex min-h-[275px] flex-col rounded-[17px] bg-white p-5 shadow-sm"
            >
              {/* Profile */}
              <div>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>

              {/* Name + Role */}
              <div className="mt-4">
                <h3 className="text-[14px] font-semibold leading-5 text-[#111111]">
                  {testimonial.name}
                </h3>

                <p className="mt-0.5 text-[11px] font-normal text-[#0047FF]">
                  {testimonial.role}
                </p>
              </div>

              {/* Review */}
              <p className="mt-5 text-[12px] font-normal leading-[1.7] text-[#666666]">
                {testimonial.review}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;