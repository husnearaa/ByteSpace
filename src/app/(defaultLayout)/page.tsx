import CommunityTestimonials from "@/components/home/CommunityTestimonials";
import CourseCategories from "@/components/home/CourseCategories";
import CourseSection from "@/components/home/CourseSection";
import CreatorCTA from "@/components/home/CreatorCTA";
import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";
import ProfessionalGrowth from "@/components/home/ProfessionalGrowth";



const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <CourseSection />
      <CourseCategories />
      <ProfessionalGrowth />
      <CreatorCTA />
      <CommunityTestimonials />
    </div>
  );
};

export default HomePage;
