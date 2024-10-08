import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const FooterPage = () => {
  return (
    <div className="h-[45vh] bg-[#273f44] flex justify-center items-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <h1 className="uppercase text-white mb-5 text-sm">
              <span className="text-[#f0c540]">About</span> car rental
            </h1>
            <p className="text-gray-400 text-sm">
              Motors Automotive we repair domestic and foreign cars. We service
              the Los Angeles Metro Area for all Automotive Service & Repair.
            </p>
          </div>
          <div>
            <h1 className="uppercase text-white mb-5 text-sm">Contact info</h1>
            <p className="text-white text-sm">
              <span className="text-gray-400 font-bold">
                Car Rental Office:
              </span>{" "}
              (323) 938-5798
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-400 font-bold">
                Vehicle Repair service:
              </span>{" "}
              (888) 637-7262
            </p>
            <p className="text-[#f0c540] text-sm">
              <span className="text-gray-400 font-bold">Email:</span>{" "}
              Info@styleixthemes.com
            </p>
          </div>
          <div>
            <h1 className="uppercase text-white mb-5 text-sm">Service hours</h1>
            <p className="text-white text-sm">
              <span className="text-gray-400 font-bold">Monday - Friday:</span>{" "}
              09:00AM - 09:00PM
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-400 font-bold">Saturday:</span> 09:00AM
              - 07:00PM
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-400 font-bold">Sunday:</span> Closed
            </p>
          </div>
          <div>
            <h1 className="uppercase text-white mb-5 text-sm">
              Social Network
            </h1>
            <div className="flex gap-4 text-white text-xl">
              <p className="rounded-full bg-gray-600 p-2">
                <FaFacebook />
              </p>
              <p className="rounded-full bg-gray-600 p-2">
                <FaXTwitter />
              </p>
              <p className="rounded-full bg-gray-600 p-2">
                <FaInstagram />
              </p>
              <p className="rounded-full bg-gray-600 p-2">
                <FaLinkedin />
              </p>
              <p className="rounded-full bg-gray-600 p-2">
                <FaYoutube />
              </p>
            </div>
          </div>
        </div>

        <hr className="h-px bg-gray-400 border-0 mt-10 mb-6" />

        <div className="flex justify-between">
          <div className="flex gap-x-2 text-gray-500 text-sm">
            <span>Copyright &copy; 2024</span>
            <a href="/" className="text-[#f0c540]">
              Motion.
            </a>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex gap-10 text-[#f0c540] text-sm">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaXTwitter />
            </p>
            <p>
              <FaInstagram />
            </p>
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaYoutube />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
