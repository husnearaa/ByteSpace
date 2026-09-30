import Navbar from "@/components/common/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar/>
      <div>{children}</div>
      {/* <Footer/> */}
    </>
  );
};

export default CommonLayout;

