import CarBg from "../assets/cars_bg.jpg";
import Convertible from "../assets/convertible.png";
import MinivanVan from "../assets/minivan_van.png";
import Speciality from "../assets/speciality.png";
import SuvTruck from "../assets/suv_trucks.png";
import StandSaloon from "../assets/stand.png";
import Economy from "../assets/economy.png";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaRegSnowflake, FaSuitcase } from "react-icons/fa6";
import { GiCarDoor } from "react-icons/gi";

const VehicleCategories = () => {
  return (
    <div
      className="h-[170vh] bg-center bg-fixed"
      style={{
        backgroundImage: `url(${CarBg})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-white uppercase text-3xl font-extrabold mb-[9vh]">
          Vehicle Categories
        </h1>
        <div className="grid grid-cols-3 gap-x-7 w-full">
          <div className="h-[65vh] bg-white group hover:bg-[#f0c540] flex flex-col justify-center items-center cursor-pointer">
            <div className="flex w-full px-8">
              <div className="w-3/5">
                <h2 className="text-2xl font-bold text-[#273f44]">
                  Convertible
                </h2>
                <p className="font-bold text-base">
                  Mercedes S-Class or Similar
                </p>
                <button className="flex flex-col bg-[#edc95b] group-hover:bg-[#273f44] w-full py-2 px-5 mt-4">
                  <span className="uppercase font-bold text-white">From</span>
                  <span className="uppercase font-bold text-white">
                    $900/day
                  </span>
                </button>
              </div>
              <div className="w-2/5 flex flex-col gap-y-3">
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <MdOutlineAirlineSeatReclineNormal className="h-7 w-7 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">2 Seats</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <GiCarDoor className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">4 Doors</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaRegSnowflake className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">A/C</span>
                </div>
              </div>
            </div>
            <div>
              <img src={Convertible} alt="Convertible car" />
            </div>
          </div>
          <div className="h-[65vh] bg-white group hover:bg-[#f0c540] flex flex-col justify-center items-center cursor-pointer">
            <div className="flex w-full px-8">
              <div className="w-3/5">
                <h2 className="text-2xl font-bold text-[#273f44]">Minivan</h2>
                <p className="font-bold text-base">
                  Volkswagen California or Similar
                </p>
                <button className="flex flex-col bg-[#edc95b] group-hover:bg-[#273f44] w-full py-2 px-5 mt-4">
                  <span className="uppercase font-bold text-white">From</span>
                  <span className="uppercase font-bold text-white">
                    $1,180/day
                  </span>
                </button>
              </div>
              <div className="w-2/5 flex flex-col gap-y-3">
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <MdOutlineAirlineSeatReclineNormal className="h-7 w-7 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">6 Seats</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaSuitcase className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">2 Bags</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <GiCarDoor className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">5 Doors</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaRegSnowflake className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">A/C</span>
                </div>
              </div>
            </div>
            <div>
              <img src={MinivanVan} alt="Minivan car" />
            </div>
          </div>
          <div className="h-[65vh] bg-white group hover:bg-[#f0c540] flex flex-col justify-center items-center cursor-pointer">
            <div className="flex w-full px-8">
              <div className="w-3/5">
                <h2 className="text-2xl font-bold text-[#273f44]">
                  Speciality
                </h2>
                <p className="font-bold text-base">
                  Ferrari F12 Berlinetta or Similar
                </p>
                <button className="flex flex-col bg-[#edc95b] group-hover:bg-[#273f44] w-full py-2 px-5 mt-4">
                  <span className="uppercase font-bold text-white">From</span>
                  <span className="uppercase font-bold text-white">
                    $589/day
                  </span>
                </button>
              </div>
              <div className="w-2/5 flex flex-col gap-y-3">
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <MdOutlineAirlineSeatReclineNormal className="h-7 w-7 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">2 Seats</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <GiCarDoor className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">2 Doors</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaRegSnowflake className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">A/C</span>
                </div>
              </div>
            </div>
            <div>
              <img src={Speciality} alt="Speciality car" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-7 w-full mt-8">
          <div className="h-[65vh] bg-white group hover:bg-[#f0c540] flex flex-col justify-center items-center cursor-pointer">
            <div className="flex w-full px-8">
              <div className="w-3/5">
                <h2 className="text-2xl font-bold text-[#273f44]">Standart</h2>
                <p className="font-bold text-base">
                  BMW 3 Series Sedan or Similar
                </p>
                <button className="flex flex-col bg-[#edc95b] group-hover:bg-[#273f44] w-full py-2 px-5 mt-4">
                  <span className="uppercase font-bold text-white">From</span>
                  <span className="uppercase font-bold text-white">
                    $280/day
                  </span>
                </button>
              </div>
              <div className="w-2/5 flex flex-col gap-y-3">
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <MdOutlineAirlineSeatReclineNormal className="h-7 w-7 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">4 Seats</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaSuitcase className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">2 Bags</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <GiCarDoor className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">4 Doors</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaRegSnowflake className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">A/C</span>
                </div>
              </div>
            </div>
            <div>
              <img src={StandSaloon} alt="Saloon car" />
            </div>
          </div>
          <div className="h-[65vh] bg-white group hover:bg-[#f0c540] flex flex-col justify-center items-center cursor-pointer">
            <div className="flex w-full px-8">
              <div className="w-3/5">
                <h2 className="text-2xl font-bold text-[#273f44]">Premium</h2>
                <p className="font-bold text-base">
                  Volkswagen Tiguan or Similar
                </p>
                <button className="flex flex-col bg-[#edc95b] group-hover:bg-[#273f44] w-full py-2 px-5 mt-4">
                  <span className="uppercase font-bold text-white">From</span>
                  <span className="uppercase font-bold text-white">
                    $800/day
                  </span>
                </button>
              </div>
              <div className="w-2/5 flex flex-col gap-y-3">
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <MdOutlineAirlineSeatReclineNormal className="h-7 w-7 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">4 Seats</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaSuitcase className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">2 Bags</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <GiCarDoor className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">4 Doors</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaRegSnowflake className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">A/C</span>
                </div>
              </div>
            </div>
            <div>
              <img src={SuvTruck} alt="Suv Truck car" />
            </div>
          </div>
          <div className="h-[65vh] bg-white group hover:bg-[#f0c540] flex flex-col justify-center items-center cursor-pointer">
            <div className="flex w-full px-8">
              <div className="w-3/5">
                <h2 className="text-2xl font-bold text-[#273f44]">Economy</h2>
                <p className="font-bold text-base">
                  Mini Copper 3 or <br /> Similar
                </p>
                <button className="flex flex-col bg-[#edc95b] group-hover:bg-[#273f44] w-full py-2 px-5 mt-4">
                  <span className="uppercase font-bold text-white">From</span>
                  <span className="uppercase font-bold text-white">
                    $100/day
                  </span>
                </button>
              </div>
              <div className="w-2/5 flex flex-col gap-y-3">
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <MdOutlineAirlineSeatReclineNormal className="h-7 w-7 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">4 Seats</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <GiCarDoor className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">2 Doors</span>
                </div>
                <div className="flex items-center justify-start px-4">
                  <span className="">
                    <FaRegSnowflake className="h-6 w-6 text-[#edc95b] group-hover:text-[#273f44]" />
                  </span>
                  <span className="text-sm font-light pl-2">A/C</span>
                </div>
              </div>
            </div>
            <div>
              <img src={Economy} alt="Economy car" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCategories;
