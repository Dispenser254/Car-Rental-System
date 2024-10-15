import { MdMailOutline, MdOutlineSettingsPhone } from "react-icons/md";
import Image5 from "../assets/image-driver.jpg";
import Fotolia from "../assets/Fotolia.jpg";
import Fotolia1 from "../assets/Fotolia-1.jpg";
import { FaCheck } from "react-icons/fa6";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import {
  FaAward,
  FaBabyCarriage,
  FaBlenderPhone,
  FaMapLocationDot,
  FaTowerBroadcast,
} from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

const Service = () => {
  return (
    <div>
      <HeaderPage />
      <div className="h-[90vh] bg-gray-50">
        <div className="max-w-5xl mx-auto flex items-center justify-center w-full h-full">
          <div className="w-[70%] flex flex-col gap-y-5 pr-10">
            <h1 className="uppercase text-[#273f44] font-bold text-4xl">
              <span className="text-[#f0c540]">Motors</span> service center
            </h1>
            <p>
              Are you ready to give your car the service it is asking for?
              Schedule car maintenance or repair right here. Our top-notch
              service staff can get your car or truck in and out quickly. We
              know there isn’t much more frustrating than being without your
              vehicle while it gets repaired. That’s why we have a staff that
              excels in providing top-notch maintenance and repair – and is able
              to do it quickly.
            </p>
            <div>
              <h1 className="uppercase text-[#273f44] font-bold text-xl">
                Our Services Include
              </h1>
              <ul className="list-none mt-4 space-y-2 flex flex-wrap gap-x-[10vh] w-full">
                <div className="space-y-2">
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    General Automotive Repair
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Preventative Car Maintenance
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Air Conditioning and Heater Service
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Cooling System and Radiator Repair
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Synthetic Motor Oil Replacement
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Oil Filter Replacement
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Brake Repair
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Engine Diagnostic
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Belts, Hoses, Fluids
                  </li>
                  <li className="flex items-center gap-x-2">
                    <FaCheck className="text-[#f0c540]" />
                    Transmission Services
                  </li>
                </div>
              </ul>
            </div>
            <p>
              Save yourself some time by scheduling service right here. After
              you submit the form, we’ll be in touch to confirm your service
              appointment. It doesn’t get much easier than that.
            </p>
          </div>
          <div className="w-[30%] flex flex-col items-center justify-center space-y-4">
            <div className="w-full h-1/2 flex justify-center">
              <img
                src={Fotolia}
                alt="Service Image 1"
                className="object-contain"
              />
            </div>
            <div className="w-full h-1/2 flex justify-center">
              <img
                src={Fotolia1}
                alt="Service Image 2"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70vh] bg-neutral-500">
        <div className="flex items-center justify-center h-full w-full">
          <div className="w-1/2 h-full bg-teal-500 flex items-center justify-center">
            <img
              src={Image5}
              alt="About us"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full bg-[#273f44] flex flex-col items-start justify-center pl-[16vh] pr-[7vh] gap-y-8">
            <h1 className="uppercase text-3xl text-white font-bold">
              What do you know about us
            </h1>
            <p className="text-white">
              Vestibulum id odio a erat gravida sollicitudin. Quisque porttitor
              turpis sit amet dolor imperdiet, et molestie tellus suscipit. Ut
              nec odio nisl. Quisque malesuada tortor non erat fermentum, sed
              sollicitudin nisl sodales. Pellentesque faucibus viverra massa,
              vitae tempus nisi venenatis eu. Proin mauris tellus, egestas ac
              tempor vitae, luctus lobortis nisl. Vivamus convallis gravida quam
            </p>
            <button className="bg-[#f0c540] hover:bg-[#f5d472] px-10 py-4 text-base uppercase rounded-lg font-bold text-[#273f44]">
              Our company
            </button>
          </div>
        </div>
      </div>
      <div className="h-[80vh] bg-[#eeeeee]">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center h-full gap-y-10">
          <h1 className="uppercase text-[#273f44] font-extrabold text-4xl">
            Why choose us
          </h1>
          <div className="grid grid-cols-3 gap-x-10">
            <div className="flex items-start">
              {/* Icon wrapper */}
              <span className="flex items-center justify-center py-2 px-3 rounded-full bg-[#f0c540] w-12 h-12 mr-4">
                <AiFillLike className="text-2xl text-white" />{" "}
                {/* Adjust size as needed */}
              </span>

              {/* Text content */}
              <div>
                <h4 className="text-[#273f44] font-bold text-xl mb-2">
                  Outstanding Services
                </h4>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, adipiscing elit. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Maecenas
                  lobortis vestibulum ipsum vitae pellentesque.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              {/* Icon wrapper */}
              <span className="flex items-center justify-center py-2 px-3 rounded-full bg-[#f0c540] w-12 h-12 mr-4">
                <FaAward className="text-white text-2xl" />
              </span>

              {/* Text content */}
              <div>
                <h4 className="text-[#273f44] font-bold text-xl mb-2">
                  Name for Quality Vehicles
                </h4>
                <p className="text-sm font-light">
                  Maecenas lobortis vestibulum ipsum vitae pellentesque. Sed
                  malesuada, neque quis tincidunt suscipit, lorem lectus rutrum
                  lacus, a iaculis ipsum eros sed ipsum.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              {/* Icon wrapper */}
              <span className="flex items-center justify-center py-2 px-3 rounded-full bg-[#f0c540] w-12 h-12 mr-4">
                <FaMapLocationDot className="text-2xl text-white" />{" "}
                {/* Adjust size as needed */}
              </span>

              {/* Text content */}
              <div>
                <h4 className="text-[#273f44] font-bold text-xl mb-2">
                  GPS on Every Vehicle!
                </h4>
                <p className="text-sm font-light">
                  Sed malesuada, neque quis tincidunt suscipit, lorem lectus
                  rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque
                  massa ut nibh tincidunt, eget pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-10">
            <div className="flex items-start">
              {/* Icon wrapper */}
              <span className="flex items-center justify-center py-2 px-3 rounded-full bg-[#f0c540] w-12 h-12 mr-4">
                <FaBabyCarriage className="text-2xl text-white" />{" "}
                {/* Adjust size as needed */}
              </span>

              {/* Text content */}
              <div>
                <h4 className="text-[#273f44] font-bold text-xl mb-2">
                  Baby Chairs/Booster Seats
                </h4>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, adipiscing elit. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Maecenas
                  lobortis vestibulum ipsum vitae pellentesque.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              {/* Icon wrapper */}
              <span className="flex items-center justify-center py-2 px-3 rounded-full bg-[#f0c540] w-12 h-12 mr-4">
                <FaTowerBroadcast className="text-white text-2xl" />
              </span>

              {/* Text content */}
              <div>
                <h4 className="text-[#273f44] font-bold text-xl mb-2">
                  AT/MT Transmission
                </h4>
                <p className="text-sm font-light">
                  Sed malesuada, neque quis tincidunt suscipit, lorem lectus
                  rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque
                  massa ut nibh tincidunt
                </p>
              </div>
            </div>

            <div className="flex items-start">
              {/* Icon wrapper */}
              <span className="flex items-center justify-center py-2 px-3 rounded-full bg-[#f0c540] w-12 h-12 mr-4">
                <FaBlenderPhone className="text-2xl text-white" />{" "}
                {/* Adjust size as needed */}
              </span>

              {/* Text content */}
              <div>
                <h4 className="text-[#273f44] font-bold text-xl mb-2">
                  24 Hours Support
                </h4>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, adipiscing elit. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Maecenas
                  lobortis vestibulum ipsum vitae pellentesque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[18vh] bg-[#f0c540]">
        <div className="flex items-center justify-center h-full w-full">
          <div className="w-1/2 flex items-center justify-center">
            <h1 className="text-[#273f44] uppercase font-bold text-[26px]">
              Do you have questions? Feel free to ask...
            </h1>
          </div>
          <div className="w-1/2 flex items-center justify-center gap-x-10">
            <div className="flex items-center justify-center gap-x-1">
              <span>
                <MdOutlineSettingsPhone className="h-10 w-10 text-white" />
              </span>
              <span className="text-[#273f44] text-2xl font-bold">
                +254 123-456-789
              </span>
            </div>
            <div>
              <button className="px-8 py-4 border border-white hover:bg-white text-[#273f44] flex items-center justify-center gap-x-2 rounded-lg">
                <span>
                  <MdMailOutline className="h-5 w-5" />
                </span>
                <span className="uppercase text-sm font-bold">Feedback</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default Service;
