import Image from "next/image";

import Logo from "@/assets/images/websiteLogo2.png";

const footerColumns = [
  [
    "Featured Courses",
    "Featured Categories",
    "Business",
    "IT",
    "Design",
  ],
  [
    "Development",
    "Marketing",
    "Photography",
    "Finance",
    "Sport",
  ],
  [
    "Become a Creator",
    "Affiliate Program",
    "Contact",
    "Help",
    "About",
  ],
];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1122px] px-6 pt-[62px] sm:px-8 md:px-10 lg:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_2fr] lg:gap-[70px]">
          {/* Newsletter Section */}
          <div>
            {/* Logo */}
            <Image
              src={Logo}
              alt="ByteSpace"
              width={160}
              height={42}
              priority
              className="h-auto w-[160px] object-contain"
            />

            {/* Description */}
            <p className="mt-[18px] text-[14px] font-normal leading-[18px] text-[#333333]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form className="mt-[29px] flex w-full max-w-[472px] items-center gap-[22px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[48px] min-w-0 flex-1 rounded-full border border-[#D4D4D4] bg-white px-[21px] text-[13px] font-normal text-[#333333] outline-none placeholder:text-[#444444] focus:border-[#C8FF00]"
              />

              <button
                type="submit"
                className="h-[40px] shrink-0 rounded-full bg-[#C8FF00] px-[25px] text-[14px] font-normal text-[#171717] transition-colors duration-200 hover:bg-[#bdf000]"
              >
                Search
              </button>
            </form>

            {/* Privacy Text */}
            <p className="mt-[22px] max-w-[445px] text-[10px] font-normal leading-[16px] text-[#444444]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-x-8 lg:mt-18">
            {footerColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <ul className="space-y-[17px]">
                  {column.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[12px] font-normal leading-[18px] text-[#333333] transition-colors duration-200 hover:text-black"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-[100px] border-t border-[#D9D9D9]" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 pt-[22px] pb-[42px] text-[11px] font-normal text-[#444444] md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p>© 2023 ByteSpace. All rights reserved.</p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-[23px]">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-black"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-black"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-black"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;