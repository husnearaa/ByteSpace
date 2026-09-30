import CourseCategories from "@/components/home/CourseCategories";
import CourseSection from "@/components/home/CourseSection";
import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";



const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <CourseSection />
      <CourseCategories />
    </div>
  );
};

export default HomePage;
