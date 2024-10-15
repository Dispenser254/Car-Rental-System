/* eslint-disable react/prop-types */
import {
  FaArrowRight,
  FaArrowRotateLeft,
  FaRegSnowflake,
  FaSuitcase,
} from "react-icons/fa6";
import Reservation from "../assets/reservation.jpg";
import SuvTrucks from "../assets/suv_trucks.png";
import Speciality from "../assets/speciality.png";
import { PiCarProfile } from "react-icons/pi";
import { IoMdAddCircle } from "react-icons/io";
import { Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import Driver from "../assets/driver.svg";
import Handicap from "../assets/handicap.svg";
import Opt from "../assets/opt.svg";
import Waiver from "../assets/waiver.svg";
import Insurance from "../assets/insurance.svg";
import Wifi from "../assets/wifi.svg";

const HeroReservation = () => {
  const [formData, setFormData] = useState({
    selectedOffice: "",
    selectedReturnOffice: "",
    isChecked: true,
    pickupDate: null,
    returnDate: null,
  });
  const [submittedData, setSubmittedData] = useState({
    selectedOffice: "",
    selectedReturnOffice: "",
    pickupDate: null,
    returnDate: null,
  });

  const [errorMessage, setErrorMessage] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsFormChanged(true);
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({ ...prev, isChecked: !prev.isChecked }));
    setIsFormChanged(true);
  };

  const handleDateChange = (name, date) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
    setIsFormChanged(true);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.selectedOffice) {
      errors.selectedOffice = "Pickup office is required.";
    }
    if (!formData.pickupDate) {
      errors.pickupDate = "Pickup date is required.";
    }
    if (!formData.isChecked && !formData.selectedReturnOffice) {
      errors.selectedReturnOffice = "Return office is required.";
    }
    if (!formData.returnDate) {
      errors.returnDate = "Return date is required.";
    }
    if (!formData.isChecked && !formData.returnDate) {
      errors.returnDate = "Return date is required.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    setSubmittedData(formData);
    // Proceed with form submission logic...
    console.log("Form data submitted:", formData);
    setIsFormChanged(false);
  };

  const clearData = () => {
    setFormData({
      selectedOffice: "",
      selectedReturnOffice: "",
      isChecked: true,
      pickupDate: null,
      returnDate: null,
    });
    setIsFormChanged(false);
    setErrorMessage({});
  };
  console.log(errorMessage);

  return (
    <>
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Reservation})`,
        }}
      >
        <div className="max-w-5xl mx-auto flex gap-y-[7vh] flex-col items-center justify-end h-full pb-[5vh]">
          <h1 className="text-white font-bold text-4xl uppercase">
            Reservation
          </h1>
          <div className="grid grid-cols-3 gap-x-8 h-[40vh] w-full">
            <div className="h-full">
              <div className="h-1/5 flex justify-center items-center w-full">
                <div className="bg-[#273f44] h-full w-[18%] flex items-center justify-center font-extrabold text-[#f0c540] text-xl">
                  1
                </div>
                <div className="bg-[#273f44] bg-opacity-30 h-full w-[82%] flex items-center justify-start px-5 text-white text-xl font-bold">
                  Your Itinenary
                </div>
              </div>
              <div className="bg-white h-4/5 flex flex-col justify-center gap-y-3 items-start p-8">
                <div className="flex flex-col items-start">
                  <h1 className="text-[#273f44] uppercase text-base font-bold">
                    Pick up
                  </h1>
                  <p>{submittedData.selectedOffice || "--"}</p>
                  <p>
                    {submittedData.pickupDate
                      ? new Date(submittedData.pickupDate).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short", // e.g., Thu
                            year: "numeric", // e.g., 2024
                            month: "short", // e.g., Oct
                            day: "numeric", // e.g., 10
                          }
                        )
                      : "--"}
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[#273f44] uppercase text-base font-bold">
                    Drop off
                  </h1>
                  <p>
                    {submittedData.selectedReturnOffice ||
                      submittedData.selectedOffice ||
                      "--"}
                  </p>
                  <p>
                    {submittedData.returnDate
                      ? new Date(submittedData.returnDate).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short", // e.g., Thu
                            year: "numeric", // e.g., 2024
                            month: "short", // e.g., Oct
                            day: "numeric", // e.g., 10
                          }
                        )
                      : "--"}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="h-1/5 flex justify-center items-center w-full">
                <div className="bg-[#273f44] h-full w-[18%] flex items-center justify-center font-extrabold text-[#f0c540] text-xl">
                  2
                </div>
                <div className="bg-[#273f44] bg-opacity-30 h-full w-[82%] flex items-center justify-start px-5 text-white text-xl font-bold">
                  Select Vehicle/Add-ons
                </div>
              </div>
              <div className="bg-white h-4/5 flex flex-col justify-start gap-y-5 items-start p-8">
                <div className="flex flex-col items-start">
                  <h1 className="text-[#273f44] uppercase text-base font-bold">
                    Type
                  </h1>
                  <p>--</p>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[#273f44] uppercase text-base font-bold">
                    Addons
                  </h1>
                  <p>--</p>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="h-1/5 flex justify-center items-center w-full">
                <div className="bg-[#273f44] h-full w-[18%] flex items-center justify-center font-extrabold text-[#f0c540] text-xl">
                  3
                </div>
                <div className="bg-[#273f44] bg-opacity-30 h-full w-[82%] flex items-center justify-start px-5 text-white text-xl font-bold">
                  Reserve Your Vehicle
                </div>
              </div>
              <div className="bg-white h-4/5 flex flex-col justify-start gap-y-5 items-start p-8">
                <div className="flex flex-col items-start">
                  <h1 className="text-[#273f44] uppercase text-base font-bold">
                    Your information
                  </h1>
                  <p>--</p>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[#273f44] uppercase text-base font-bold">
                    Payment Information
                  </h1>
                  <p>--</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <YourItinenary
        formData={formData}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
        handleDateChange={handleDateChange}
        isFormChanged={isFormChanged}
        clearData={clearData}
      /> */}
      {/* <Vehicle /> */}
      {/* <VehicleAddons /> */}
      <Checkout />
    </>
  );
};

export default HeroReservation;

const YourItinenary = ({
  errorMessage,
  formData,
  handleSubmit,
  handleCheckboxChange,
  handleInputChange,
  handleDateChange,
  isFormChanged,
  clearData,
}) => {
  return (
    <div className="h-[170vh] bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-start justify-center h-full">
        <h1 className="text-[#273f44] uppercase text-3xl font-bold mb-[10vh]">
          Reserve your vehicle
        </h1>
        <div
          className={`flex w-full h-[110vh] gap-x-5 ${
            formData.isChecked ? "h-[110vh]" : "h-[140vh]"
          } ${Object.keys(errorMessage).length > 0 ? "h-[150vh]" : ""}`}
        >
          <div className="bg-white w-3/5 h-full flex flex-col justify-center items-center">
            <div className="w-full p-10 flex flex-col gap-y-5">
              <h1 className="uppercase text-[#273f44] text-sm font-bold">
                Pick up
              </h1>
              <div className="border-2 border-[#f0c540] p-8 flex flex-col gap-y-4">
                <h1 className="uppercase text-[#273f44] text-sm font-bold">
                  Place to pick up car*
                </h1>
                <div className="">
                  <Select
                    name="selectedOffice"
                    value={formData.selectedOffice}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose Office</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Nyeri">Nyeri</option>
                  </Select>
                  {errorMessage.selectedOffice && (
                    <p className="text-red-500">
                      {errorMessage.selectedOffice}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="return"
                    checked={formData.isChecked}
                    onChange={handleCheckboxChange}
                    className="text-gray-600 focus:outline-none"
                  />
                  <Label htmlFor="return" className="font-medium text-base">
                    Return to the same location
                  </Label>
                </div>
                <h1 className="uppercase text-[#273f44] text-sm font-bold">
                  Pick-up date/time*
                </h1>
                <DatePicker
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={formData.pickupDate}
                  onChange={(date) => handleDateChange("pickupDate", date)}
                  placeholderText="Pickup Date"
                  selectsStart
                  startDate={formData.pickupDate}
                  endDate={formData.returnDate}
                  className="text-gray-700 rounded-lg w-full flex items-center justify-center"
                  minDate={new Date()}
                />
                {errorMessage.pickupDate && (
                  <p className="text-red-500">{errorMessage.pickupDate}</p>
                )}
              </div>
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Return
              </h1>
              <div className="border border-[#f0c540] p-8 flex flex-col gap-y-4">
                <h1 className="uppercase text-[#273f44] text-sm font-bold">
                  Place to drop the car*
                </h1>
                <div
                  className={`relative transition-opacity duration-300 ${
                    formData.isChecked ? "opacity-0 h-0" : "opacity-100 h-auto"
                  }`}
                >
                  <div className="">
                    <Select
                      name="selectedReturnOffice"
                      value={formData.selectedReturnOffice}
                      onChange={handleInputChange}
                    >
                      <option value="">Choose Office</option>
                      <option value="Nairobi">Nairobi</option>
                      <option value="Mombasa">Mombasa</option>
                      <option value="Nakuru">Nakuru</option>
                      <option value="Nyeri">Nyeri</option>
                    </Select>
                    {errorMessage.selectedReturnOffice && (
                      <p className="text-red-500">
                        {errorMessage.selectedReturnOffice}
                      </p>
                    )}
                  </div>
                </div>
                <h1 className="uppercase text-[#273f44] text-sm font-bold">
                  Drop Date/Time
                </h1>
                <DatePicker
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={formData.returnDate}
                  onChange={(date) => handleDateChange("returnDate", date)}
                  placeholderText="Return Date"
                  selectsEnd
                  startDate={formData.pickupDate}
                  endDate={formData.returnDate}
                  className="text-gray-700 rounded-lg w-full flex items-center justify-center"
                  minDate={new Date()}
                />
                {errorMessage.returnDate && (
                  <p className="text-red-500">{errorMessage.returnDate}</p>
                )}
              </div>

              <div className="flex flex-col items-center justify-between mt-6">
                <button
                  className="bg-[#f0c540] w-full hover:bg-[#273f44] text-lg text-[#273f44] hover:text-white font-semibold flex items-center justify-center py-3"
                  onClick={handleSubmit}
                >
                  Continue reservation
                </button>

                {isFormChanged && (
                  <div
                    className="flex items-center cursor-pointer mt-4"
                    onClick={clearData}
                  >
                    <span className="flex items-center justify-center mr-2">
                      <FaArrowRotateLeft />
                    </span>
                    <span className="underline">Clear Data</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-white w-2/5 h-[110vh] flex flex-col justify-between items-center">
            <div className="w-full p-12 flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <h1 className="uppercase text-[#273f44] text-xl font-bold">
                  Car
                </h1>
                <p className="font-light text-lg">Please select a car</p>
              </div>

              <div className="flex flex-col group justify-center items-center mt-7">
                <div className="relative">
                  <span>
                    <PiCarProfile className="h-24 w-24 text-gray-300 group-hover:text-[#f0c540]" />
                  </span>
                  <span className="absolute top-2 -right-2">
                    <IoMdAddCircle className="h-8 w-8 text-gray-300 group-hover:text-gray-900" />
                  </span>
                </div>
                <button className="bg-[#f0c540] group-hover:bg-[#f1d276] py-4 px-6 flex items-center justify-center gap-x-2">
                  <span className="uppercase font-bold text-sm text-[#273f44]">
                    Find a vehicle
                  </span>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full p-6 flex flex-col gap-y-6">
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Rate
              </h1>
              <div className="bg-neutral-200 flex py-3 px-6 justify-between items-start">
                <span>--</span>
                <span>--</span>
              </div>
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Add-ons
              </h1>
              <div className="bg-neutral-200 flex py-3 px-6 justify-between items-start">
                <span>--</span>
                <span>--</span>
              </div>
              <div className="bg-neutral-200 flex py-8 px-6 justify-between items-start">
                <span className="font-bold text-lg text-[#273f44]">
                  Estimated Time
                </span>
                <span>--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vehicle = () => {
  const vehicles = [
    {
      id: 1,
      category: "Premium",
      name: "Volkswagen Tiguan or Similar",
      image: SuvTrucks,
      seats: 6,
      bags: 2,
      doors: 5,
      ac: true,
      totalPrice: "$2,700.00",
      duration: "3 Days/0 Hours",
      payLaterPrice: "$2,700.00",
      payNowPrice: "$2,400.00",
      savings: "$300.00",
    },
    {
      id: 1,
      category: "Speciality",
      name: "Ferrari F12 Berlinetta or Similar",
      image: Speciality,
      seats: 2,
      doors: 2,
      ac: true,
      duration: "3 Days/0 Hours",
      payLaterPrice: "$1,800.00",
      payNowPrice: "$1,767.00",
      savings: "$3.00",
    },
  ];

  return (
    <div className="h-full bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-start justify-center h-full py-[10vh]">
        <h1 className="text-[#273f44] uppercase text-3xl font-bold mb-[5vh]">
          Select vehicle/add-ons
        </h1>
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white w-full h-[35vh] flex mb-4">
            <div className="w-[30%] flex items-center justify-center">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-full w-full object-center p-4"
              />
            </div>
            <div className="w-[35%] flex flex-col items-start justify-center gap-y-3">
              <h1 className="text-[#273f44] uppercase text-2xl font-bold">
                {vehicle.category}
              </h1>
              <p className="text-lg font-light">{vehicle.name}</p>
              <div className="w-full flex gap-y-4">
                <div className="flex items-center justify-center px-2">
                  <MdOutlineAirlineSeatReclineNormal className="h-6 w-6 text-[#edc95b]" />
                  <span className="text-sm font-light pl-1">
                    {vehicle?.seats} Seats
                  </span>
                </div>
                <div className="flex items-center justify-start px-2">
                  <FaSuitcase className="h-5 w-5 text-[#edc95b]" />
                  <span className="text-sm font-light pl-2">
                    {vehicle?.bags} Bags
                  </span>
                </div>
                <div className="flex items-center justify-start px-2">
                  <GiCarDoor className="h-6 w-6 text-[#edc95b]" />
                  <span className="text-sm font-light pl-2">
                    {vehicle?.doors} Doors
                  </span>
                </div>
                {vehicle?.ac && (
                  <div className="flex items-center justify-start px-2">
                    <FaRegSnowflake className="h-6 w-6 text-[#edc95b]" />
                    <span className="text-sm font-light pl-2">A/C</span>
                  </div>
                )}
              </div>
            </div>
            <div className="w-[35%] flex items-start justify-center mt-[5vh] gap-x-6">
              <div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#273f44] font-normal text-xl">
                    {vehicle.payLaterPrice}/Total
                  </h1>
                  <p className="text-[#273f44] text-sm font-light underline">
                    {vehicle.duration}
                  </p>
                </div>
                <button className="border-2 mt-5 border-[#edc95b] rounded-md hover:border-[#273f44] py-3 px-8 w-full text-[#273f44] uppercase font-bold text-sm">
                  Pay later
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#273f44] font-normal text-xl">
                    {vehicle.payNowPrice}/Total
                  </h1>
                  <p className="text-[#273f44] text-sm font-light underline">
                    {vehicle.duration}
                  </p>
                </div>
                <button className="mt-5 bg-[#f0c540] hover:bg-[#273f44] rounded-md py-[14px] px-8 w-full text-[#273f44] hover:text-white uppercase font-bold text-sm">
                  Pay now
                </button>
                <p className="uppercase font-medium text-[10px] mt-2">
                  Saves you {vehicle.savings}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VehicleAddons = () => {
  const addons = [
    {
      id: 1,
      logo: Wifi,
      title: "Navigation System",
    },
    {
      id: 2,
      logo: Driver,
      title: "Additional Driver",
    },
    {
      id: 3,
      logo: Insurance,
      title: "Super Protective Insurance",
    },
    {
      id: 4,
      logo: Handicap,
      title: "Handicap Controls",
    },
    {
      id: 5,
      logo: Waiver,
      title: "Loss Damage Waiver",
    },
    {
      id: 6,
      logo: Opt,
      title: "Child Seat",
    },
  ];
  return (
    <div className="h-full bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-start justify-center h-full py-[10vh]">
        <h1 className="text-[#273f44] uppercase text-3xl font-bold mb-[5vh]">
          Vehicle add-ons
        </h1>
        <div className="w-full flex gap-x-4">
          <div className="w-1/2 flex flex-col">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="bg-white flex items-center w-full py-6 px-4 mb-1"
              >
                <div className="w-[80%] flex items-center gap-x-6">
                  <img src={addon.logo} alt="" className="h-16 w-16" />

                  <h1 className="uppercase font-bold text-base text-[#273f44]">
                    {addon.title}
                  </h1>
                </div>
                <div className="w-[20%]">
                  <button className="px-8 py-3 border-2 border-[#f0c540] hover:bg-[#e2b839] font-bold uppercase text-sm">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white w-1/2 flex flex-col justify-between items-center">
            <div className="w-full p-12 flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <h1 className="uppercase text-[#273f44] text-xl font-bold">
                  Rental Car
                </h1>
              </div>

              <div className="flex flex-col group justify-center items-center mt-7">
                <div className="relative">
                  <span>
                    <PiCarProfile className="h-24 w-24 text-gray-300 group-hover:text-[#f0c540]" />
                  </span>
                  <span className="absolute top-2 -right-2">
                    <IoMdAddCircle className="h-8 w-8 text-gray-300 group-hover:text-gray-900" />
                  </span>
                </div>
                <button className="bg-[#f0c540] group-hover:bg-[#f1d276] py-4 px-6 flex items-center justify-center gap-x-2">
                  <span className="uppercase font-bold text-sm text-[#273f44]">
                    Find a vehicle
                  </span>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full p-6 flex flex-col gap-y-6">
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Rate
              </h1>
              <div className="bg-neutral-200 flex py-3 px-6 justify-between items-start">
                <span>--</span>
                <span>--</span>
              </div>
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Add-ons
              </h1>
              <div className="bg-neutral-200 flex py-3 px-6 justify-between items-start">
                <span>--</span>
                <span>--</span>
              </div>
              <div className="bg-neutral-200 flex py-8 px-6 justify-between items-start">
                <span className="font-bold text-lg text-[#273f44]">
                  Estimated Total
                </span>
                <span>--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-start justify-center h-full py-[8vh]">
        <h1 className="text-[#273f44] uppercase text-3xl font-bold mb-[5vh]">
          Checkout
        </h1>
        <div className="w-full flex gap-x-5">
          <div className="bg-white w-[40%] flex flex-col h-[120vh] justify-between items-center">
            <div className="w-full p-12 flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <h1 className="uppercase text-[#273f44] text-xl font-bold">
                  Rental Car
                </h1>
              </div>

              <div className="flex flex-col group justify-center items-center mt-7">
                <div className="relative">
                  <span>
                    <PiCarProfile className="h-24 w-24 text-gray-300 group-hover:text-[#f0c540]" />
                  </span>
                  <span className="absolute top-2 -right-2">
                    <IoMdAddCircle className="h-8 w-8 text-gray-300 group-hover:text-gray-900" />
                  </span>
                </div>
                <button className="bg-[#f0c540] group-hover:bg-[#f1d276] py-4 px-6 flex items-center justify-center gap-x-2">
                  <span className="uppercase font-bold text-sm text-[#273f44]">
                    Find a vehicle
                  </span>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full p-6 flex flex-col gap-y-6">
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Rate
              </h1>
              <div className="bg-neutral-200 flex py-3 px-6 justify-between items-start">
                <span>--</span>
                <span>--</span>
              </div>
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Add-ons
              </h1>
              <div className="bg-neutral-200 flex py-3 px-6 justify-between items-start">
                <span>--</span>
                <span>--</span>
              </div>
              <div className="bg-neutral-200 flex py-8 px-6 justify-between items-start">
                <span className="font-bold text-lg text-[#273f44]">
                  Estimated Total
                </span>
                <span>--</span>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-col">
            <div className="bg-white w-full flex flex-col gap-y-3 mb-2 px-8 py-6">
              <h1 className="uppercase text-[#273f44] text-xl font-bold">
                Billing Details
              </h1>
              <div className="flex gap-x-4 w-full">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="First Name" />
                  </div>
                  <TextInput id="firstName" type="text" required shadow />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Last Name" />
                  </div>
                  <TextInput id="lastName" type="text" required shadow />
                </div>
              </div>
              <div className="flex gap-x-4 w-full">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="driver" value="Driver License (optional)" />
                  </div>
                  <TextInput id="driver" type="text" required shadow />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="companyName"
                      value="Company Name (optional)"
                    />
                  </div>
                  <TextInput id="companyName" type="text" required shadow />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="StreetAddress"
                    value="Street address (optional)"
                  />
                </div>
                <TextInput
                  id="StreetAddress"
                  type="text"
                  placeholder="House Number and street name"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Town" value="Town/City (optional)" />
                </div>
                <TextInput id="Town" type="text" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Phone" />
                </div>
                <TextInput id="phone" type="text" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email Address" />
                </div>
                <TextInput id="email" type="email" required shadow />
              </div>
            </div>
            <div className="bg-white flex flex-col gap-y-5 px-8 py-6">
              <h1 className="text-[#273f44] uppercase font-bold">Payment</h1>
              <p className="font-light">
                Please contact us if you require assistance or wish to make
                alternate arrangements.
              </p>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  className="text-gray-600 focus:outline-none"
                />
                <Label htmlFor="terms" className="font-medium text-sm">
                  I have read and agree to the website{" "}
                  <a href="/" className="hover:text-[#e1b73c]">
                    terms and conditions *
                  </a>
                </Label>
              </div>
              <button className="w-full bg-[#f0c540] py-4 font-bold">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
