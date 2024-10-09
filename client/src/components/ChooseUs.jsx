import { AiFillLike } from "react-icons/ai";
import {
  FaAward,
  FaBabyCarriage,
  FaBlenderPhone,
  FaMapLocationDot,
  FaTowerBroadcast,
} from "react-icons/fa6";

const ChooseUs = () => {
  return (
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
  );
};

export default ChooseUs;
