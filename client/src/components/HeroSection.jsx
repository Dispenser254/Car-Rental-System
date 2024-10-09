import { useState } from "react";
import Banner from "../assets/Banner.jpg";
import { Button, Checkbox, Label, Select } from "flowbite-react";
import {
  FaArrowRight,
  FaArrowRotateLeft,
  FaLocationDot,
} from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    selectedOffice: "",
    selectedReturnOffice: "",
    isChecked: true,
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

    // Proceed with form submission logic...
    console.log("Form data submitted:", formData);
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

  return (
    <div
      className={`h-[75vh] transition-all duration-300 bg-contain bg-center relative ${
        formData.isChecked ? "h-[75vh]" : "h-[80vh]"
      }`}
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "140%",
      }}
    >
      <div className="absolute top-[6vh] right-[20vh] h-[80%] w-[25%] bg-[#f0c540] flex justify-center items-center">
        <div className="p-6 flex flex-col w-full gap-y-2">
          <h1 className="text-xl uppercase font-bold">Pick Up</h1>

          <div className="relative">
            <Select
              className="pl-8"
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
            <div className="absolute bg-gray-50 rounded-l-lg py-3 px-3 left-0 top-1/2 transform -translate-y-1/2">
              <FaLocationDot className="text-gray-700" />
            </div>
            {errorMessage.selectedOffice && (
              <p className="text-red-500">{errorMessage.selectedOffice}</p>
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

          <DatePicker
            showIcon
            dateFormat="dd/MM/yyyy"
            selected={formData.pickupDate}
            onChange={(date) => handleDateChange("pickupDate", date)}
            placeholderText="Pickup Date"
            selectsStart
            startDate={formData.pickupDate}
            endDate={formData.returnDate}
            className="text-gray-700 rounded-lg flex items-center justify-center"
            minDate={new Date()}
          />
          {errorMessage.pickupDate && (
            <p className="text-red-500">{errorMessage.pickupDate}</p>
          )}

          <h1 className="text-xl uppercase font-bold">Return</h1>

          <div
            className={`relative transition-opacity duration-300 ${
              formData.isChecked ? "opacity-0 h-0" : "opacity-100 h-auto"
            }`}
          >
            <div className="relative">
              <Select
                className="pl-8 outline-none"
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
              <div className="absolute bg-gray-50 rounded-l-lg py-3 px-3 left-0 top-1/2 transform -translate-y-1/2">
                <FaLocationDot className="text-gray-700" />
              </div>
              {errorMessage.selectedReturnOffice && (
                <p className="text-red-500">
                  {errorMessage.selectedReturnOffice}
                </p>
              )}
            </div>
          </div>

          <DatePicker
            showIcon
            dateFormat="dd/MM/yyyy"
            selected={formData.returnDate}
            onChange={(date) => handleDateChange("returnDate", date)}
            placeholderText="Return Date"
            selectsEnd
            startDate={formData.pickupDate}
            endDate={formData.returnDate}
            className="text-gray-700 rounded-lg flex items-center justify-center"
            minDate={new Date()}
          />
          {errorMessage.returnDate && (
            <p className="text-red-500">{errorMessage.returnDate}</p>
          )}

          <div className="flex items-center justify-between mt-6">
            <Button
              className="bg-[#273f44] hover:bg-[#4f7d86] uppercase font-semibold flex items-center"
              onClick={handleSubmit}
            >
              <span className="text-sm">Find a Vehicle</span>
              <span className="flex items-center justify-center ml-2">
                <FaArrowRight />
              </span>
            </Button>

            {isFormChanged && (
              <div
                className="flex items-center cursor-pointer"
                onClick={clearData}
              >
                <span className="flex items-center justify-center mr-1">
                  <FaArrowRotateLeft />
                </span>
                <span className="underline">Clear Data</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
