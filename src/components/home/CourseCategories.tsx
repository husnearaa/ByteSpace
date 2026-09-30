import Image from "next/image";
import DesignIcon from "@/assets/images/icons/icon-1.png";
import DevelopmentIcon from "@/assets/images/icons/icon-2.png";
import SoftwareIcon from "@/assets/images/icons/icon-3.png";
import BusinessIcon from "@/assets/images/icons/icon-4.png";
import MarketingIcon from "@/assets/images/icons/icon-5.png";
import PhotographyIcon from "@/assets/images/icons/icon-6.png";

const categories = [
  {
    id: 1,
    name: "Design",
    icon: DesignIcon,
  },
  {
    id: 2,
    name: "Development",
    icon: DevelopmentIcon,
  },
  {
    id: 3,
    name: "IT & Software",
    icon: SoftwareIcon,
  },
  {
    id: 4,
    name: "Business",
    icon: BusinessIcon,
  },
  {
    id: 5,
    name: "Marketing",
    icon: MarketingIcon,
  },
  {
    id: 6,
    name: "Photography",
    icon: PhotographyIcon,
  },
];

const CourseCategories = () => {
  return (
    <section className="container mx-auto bg-white px-5 py-14 md:px-8">
      <div className="mx-auto container">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#080D25] md:text-[34px]">
            Explore Diverse Learning Paths at ByteSpace
          </h2>

          <p className="mx-auto mt-4 max-w-[850px] text-[14px] font-normal leading-7 text-[#9296A2] md:text-[16px]">
            At ByteSpace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16 grid grid-cols-2 justify-items-center  sm:grid-cols-3 md:grid-cols-6 md:gap-x-8 md:gap-y-0">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex h-[153px] w-[154px] flex-col items-center justify-center rounded-[22px] border border-[#D5D5D5] bg-white"
            >
              {/* Icon */}
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#C8FA00]">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>

              {/* Category Name */}
              <p className="mt-3 text-center text-[18px] font-normal leading-6 text-[#292929]">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;