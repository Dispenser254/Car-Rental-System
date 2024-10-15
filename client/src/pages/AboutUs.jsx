import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";
import Fotolia from "../assets/Fotolia.jpg";
import Fotolia1 from "../assets/Fotolia-1.jpg";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4-2.jpg";
import Edge from "../assets/edge.png";
import TVC from "../assets/tvc.png";
import Arcade from "../assets/arcade.png";
import Fast from "../assets/fast.png";
import Volker from "../assets/volker.png";
import Kphone from "../assets/kphone.png";
import { FaCheck } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div>
      <HeaderPage />
      <div className="h-[145vh] bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col items-center mb-[15vh] justify-center w-full h-full">
          <div className="h-[50vh] w-full flex gap-x-4 mb-[15vh]">
            <div className="w-1/2">
              <img src={Fotolia} alt="" />
            </div>
            <div className="w-1/2 gap-y-4 flex flex-col">
              <h1 className="uppercase text-[#273f44] font-bold text-3xl">
                Welcome to the <span className="text-[#f0c540]">motors</span>
              </h1>
              <p className="text-[#273f44] font-medium">
                Before we get ahead of ourselves, we want to welcome you to
                Loeber Motors. While nothing can replace thing on-the-lot
                experience.
              </p>
              <p className="text-[#273f44] font-medium">
                We appreciate you taking the time today to visit our web site.
                Our goal is to give you an interactive tour of our new and used
                inventory, as well as allow you to conveniently get a quote,
                schedule a service appointment, or apply for financing. The
                search for a luxury car is filled with high expectations.
                Undoubtedly, that has a lot to do with the vehicles you are
                considering, but at Motors, we think you should also have pretty
                high expectations for your dealership.
              </p>
              <p className="italic text-[#273f44] font-medium">
                MIKEY DIOKLES, President of Motors
              </p>
            </div>
          </div>
          <div className="h-[50vh] w-full flex gap-x-4">
            <div className="w-1/2 gap-y-4 flex flex-col">
              <h1 className="uppercase text-[#273f44] font-bold text-3xl">
                Core values
              </h1>
              <p className="text-[#273f44] font-medium">
                We go through extensive factory training so that we may provide
                you with the knowledge you need to make an educated decision in
                choosing the vehicle that is right for your lifestyle.
              </p>
              <ul className="list-none mt-2 space-y-2 flex flex-col w-full text-sm text-[#273f44]">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-[#f0c540]" />
                  Stress-free finance department.
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-[#f0c540]" />
                  Robust selection of popular vehicles.
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-[#f0c540]" />
                  350 offers on site, trusted by a community.
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-[#f0c540]" />
                  Maintain your car to stay safe on the road
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-[#f0c540]" />
                  We know how to handle a wide range of car services.
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <img src={Fotolia1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70vh] bg-gray-200">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto h-full gap-y-10">
          <h1 className="uppercase text-[#273f44] font-bold text-3xl">
            Our team
          </h1>
          <div className="grid grid-cols-4 gap-x-6">
            <div>
              <img src={Image1} alt="" />
              <div className="bg-white flex flex-col items-center justify-center mt-2">
                <h1 className="uppercase text-base text-[#273f44]">
                  Lennox Wardell
                </h1>
                <p className="text-sm font-light text-[#273f44]">
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <div>
              <img src={Image2} alt="" />
              <div className="bg-white flex flex-col items-center justify-center mt-2">
                <h1 className="uppercase text-base text-[#273f44]">
                  Srah Orgade Wardell
                </h1>
                <p className="text-sm font-light text-[#273f44]">
                  President of Finance
                </p>
              </div>
            </div>
            <div>
              <img src={Image3} alt="" />
              <div className="bg-white flex flex-col items-center justify-center mt-2">
                <h1 className="uppercase text-base text-[#273f44]">
                  Lars Jatiba
                </h1>
                <p className="text-sm font-light text-[#273f44]">
                  Executive Vice President
                </p>
              </div>
            </div>
            <div>
              <img src={Image4} alt="" />
              <div className="bg-white flex flex-col items-center justify-center mt-2">
                <h1 className="uppercase text-base text-[#273f44]">
                  Mikey Diokles
                </h1>
                <p className="text-sm font-light text-[#273f44]">
                  Sales Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[30vh]">
        <div className="max-w-6xl mx-auto flex h-full items-center">
          <div>
            <img src={Volker} alt="" />
          </div>
          <div>
            <img src={Kphone} alt="" />
          </div>
          <div>
            <img src={Fast} alt="" />
          </div>
          <div>
            <img src={TVC} alt="" />
          </div>
          <div>
            <img src={Arcade} alt="" />
          </div>
          <div>
            <img src={Edge} alt="" />
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default AboutUs;
