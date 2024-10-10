import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "../assets/testimonials.jpg";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4-2.jpg";
import Image5 from "../assets/image-1-1.jpg";
import { MdMailOutline, MdOutlineSettingsPhone } from "react-icons/md";

const Clients = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: Image,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sint iure fugit molestiae quisquam!",
    },
    {
      name: "Jane Smith",
      image: Image1,
      text: "Nobis voluptate, ut sit adipisci eveniet ipsa quibusdam accusamus, animi voluptatem delectus dolorum quidem unde! Non!",
    },
    {
      name: "Alice Johnson",
      image: Image2,
      text: "Eveniet ipsa quibusdam accusamus, animi voluptatem delectus dolorum quidem unde!",
    },
    {
      name: "Bob Williams",
      image: Image3,
      text: "Fugit molestiae quisquam! Nobis voluptate, ut sit adipisci eveniet.",
    },
    {
      name: "Charlie Brown",
      image: Image4,
      text: "Sint iure fugit molestiae quisquam! Nobis voluptate, ut sit adipisci.",
    },
  ];

  // Append cloned testimonials to create a seamless loop
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 3)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle the carousel movement every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 6000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Reset position when reaching the cloned testimonials
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Wait for the transition to complete
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, testimonials.length]);

  // Calculate the transform value based on the currentIndex
  const transformValue = -(currentIndex * 100) / 3;

  return (
    <>
      <div className="h-[100vh] bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center h-full">
          <h1 className="font-bold text-3xl text-[#273f44] uppercase mb-10">
            What our clients say
          </h1>

          {/* Container for the testimonials carousel */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-x-7"
              animate={{ x: `${transformValue}%` }}
              transition={{
                duration: isTransitioning ? 0.5 : 0, // Disable animation when resetting
                ease: "easeInOut",
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[33.33%] p-5 border border-gray-400 border-dashed h-[60vh] flex flex-col items-center justify-center bg-white"
                >
                  <div className="mb-7">
                    <img
                      src={testimonial.image}
                      alt=""
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                  <h2 className="font-bold text-lg text-[#273f44] mb-4">
                    {testimonial.name}
                  </h2>
                  <p className="text-center text-sm text-gray-600">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-[75vh] bg-neutral-500">
        <div className="flex items-center justify-center h-full w-full">
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
          <div className="w-1/2 h-full bg-teal-500 flex items-center justify-center">
            <img
              src={Image5}
              alt="About us"
              className="h-full w-full object-cover"
            />
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
    </>
  );
};

export default Clients;
