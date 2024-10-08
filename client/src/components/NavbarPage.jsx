import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationPin,
  FaPhone,
  FaUser,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <div className="bg-[#2a4041] flex justify-between items-center w-full py-1">
      <div className="w-3/5 flex items-center justify-center text-white text-sm gap-x-6">
        <div className="flex items-center gap-x-2">
          <span>
            <FaPhone />
          </span>
          <span>Top Bar Action</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span>
            <FaLocationPin />
          </span>
          <span>Top Bar Address</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span>
            <FaClock />
          </span>
          <span>Top Bar Working Hours Label</span>
        </div>
      </div>
      <div className="w-1/5 flex justify-center gap-3 text-white text-sm">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaXTwitter />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaLinkedin />
        </a>
        <a href="/">
          <FaYoutube />
        </a>
      </div>
      <div className="w-1/5 flex justify-center items-center gap-x-6">
        <Link to="/login">
          <button className="text-white text-[11px] uppercase flex items-center justify-center gap-x-2 mt-1">
            <FaUser />
            <span>Login</span>
          </button>
        </Link>

        <Link to="/register">
          <button className="text-white text-[11px] uppercase">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarPage;
