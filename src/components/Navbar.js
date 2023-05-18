import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Whitebeard from "../assets/icons/whitebeard.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="items-center z-50 backdrop-blur-lg justify-center px-2 py-4 inset-x-0 top-0 fixed w-full">
      <div className="absolute -z-[9999] inset-0 bg-gradient-to-r from-[#493240] via-[#c31432] to-[#f5af19] opacity-40"></div>
      <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/4 mx-auto">
        <button onClick={() => setOpen(!open)} className="block sm:hidden m-3">
          {open ? (
            <FaTimes className="block h-6 w-6 text-black" />
          ) : (
            <FaBars className="block h-6 w-6 text-black" />
          )}
        </button>
        <div className="hidden sm:block">
          <div className="flex flex-row justify-between">
            <Link
              to="/iansarker"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-[#272935] font-poppins font-base flex items-center hover:text-black rounded-md cursor-pointer"
            >
              <img
                alt="whitebeard pirates"
                src={Whitebeard}
                className=" h-8 w-8"
              />
            </Link>
            <span className="flex flex-row">
              <Link to="/iansarker" className="text-black border border-black hover:border-white hover:text-black hover:bg-white  font-poppins font-base font-medium flex items-center px-3 py-1 rounded-md cursor-pointer">Home</Link>
              <Link
                to="https://drive.google.com/file/d/1viRTErqDRJ-rlLUSSOms7uYy67Jc_JER/view?usp=sharing"
                className="text-black  font-poppins font-base font-medium hover:underline flex items-center hover:text-black px-3 py-1 rounded-md cursor-pointer"
              >
                <span>CV/Resume</span>
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className={open ? "md:hidden" : "hidden"} onClick={handleToggle}>
        <div className="mb-2">
          <Link
            to="/iansarker"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-[#272935] font-poppins font-base flex items-center mx-1 cursor-pointer text-center px-3 py-2"
          >
            <img
              alt="whitebeard pirates"
              src={Whitebeard}
              className="mr-1 h-6 w-6"
            />
            <span>Home</span>
          </Link>
          <a
            href="https://drive.google.com/file/d/1viRTErqDRJ-rlLUSSOms7uYy67Jc_JER/view?usp=sharing"
            className="text-[#272935] font-poppins font-base flex items-center mx-1 cursor-pointer text-center px-3 py-2"
          >
            <span className="h-6 block"></span>
            <span>CV/Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
