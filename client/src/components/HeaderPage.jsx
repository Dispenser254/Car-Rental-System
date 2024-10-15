import { useEffect, useState } from "react";
import MotorsLogo from "../assets/motors_car_rental_logo.svg";
import { FaPhone } from "react-icons/fa6";
import NavbarPage from "./NavbarPage";

const HeaderPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NavbarPage will be hidden when scrolled */}
      <div className={`${isScrolled ? "hidden" : ""}`}>
        <NavbarPage />
      </div>

      {/* HeaderPage will be fixed when scrolled */}
      <nav
        className={`${
          isScrolled
            ? "fixed top-0 left-0 bg-[#273f44]"
            : "relative bg-[#273f44]"
        } w-full h-[13vh] transition-all duration-[500] flex justify-center items-center z-50`}
      >
        <div className="max-w-7xl w-full mx-auto flex">
          {/* Section 1 */}
          <div className="w-1/4 flex justify-center items-center">
            <img src={MotorsLogo} alt="Motors Logo" />
          </div>
          {/* Section 2 */}
          <div className="w-1/2 flex justify-center items-center">
            <ul className="text-white text-sm font-bold uppercase flex gap-x-8">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/date-reservation">Reservation</a>
              </li>
              <li>
                <a href="/service">Service</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Section 3 */}
          <div className="w-1/4 flex justify-center items-center gap-x-3">
            <span className="p-2 bg-[#f0c540] rounded-full">
              <FaPhone />
            </span>
            <span className="text-white text-xl font-bold">123-456-789</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderPage;
