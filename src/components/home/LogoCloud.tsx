import Image, { StaticImageData } from "next/image";

import Logo1 from "@/assets/images/company/Frame.png";
import Logo2 from "@/assets/images/company/Frame-1.png";
import Logo3 from "@/assets/images/company/Frame-2.png";
import Logo4 from "@/assets/images/company/Frame-3.png";
import Logo5 from "@/assets/images/company/Frame-4.png";

type LogoItem = {
  id: number;
  name: string;
  image: StaticImageData;
};

const logoData: LogoItem[] = [
  {
    id: 1,
    name: "Logoipsum",
    image: Logo1,
  },
  {
    id: 2,
    name: "Logoipsum",
    image: Logo2,
  },
  {
    id: 3,
    name: "Logoipsum",
    image: Logo3,
  },
  {
    id: 4,
    name: "Logoipsum",
    image: Logo4,
  },
  {
    id: 5,
    name: "Logoipsum",
    image: Logo5,
  },
];

const LogoCloud = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="mx-auto flex min-h-[88px] max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {logoData.map((logo) => (
            <div
              key={logo.id}
              className="flex w-full items-center justify-center"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={500}
                height={500}
                className="
                  h-auto
                  w-[100px]
                  object-contain
                  sm:w-[120px]
                  md:w-[140px]
                  lg:w-[160px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;