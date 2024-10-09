import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeaderPage />
      <HeroSection />
      <div className="h-[80vh] bg-orange-500">Section 2</div>
      <div className="h-[80vh] bg-red-500">Section 3</div>
      <div className="h-[80vh] bg-sky-500">Section 4</div>
      <div className="h-[80vh] bg-neutral-500">Section 5</div>
      <div className="h-[80vh] bg-red-500">Section 6</div>
      <div className="h-[80vh] bg-blue-500">Section 7</div>
      <FooterPage />
    </div>
  );
};

export default HomePage;
