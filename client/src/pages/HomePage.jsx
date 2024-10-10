import ChooseUs from "../components/ChooseUs";
import Clients from "../components/Clients";
import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";
import HeroSection from "../components/HeroSection";
import VehicleCategories from "../components/VehicleCategories";

const HomePage = () => {
  return (
    <div>
      <HeaderPage />
      <HeroSection />
      <ChooseUs />
      <VehicleCategories />
      <Clients />
      <FooterPage />
    </div>
  );
};

export default HomePage;
