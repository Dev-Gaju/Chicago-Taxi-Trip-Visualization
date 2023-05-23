import React from "react";
import {FaLinkedin, FaKaggle, FaResearchgate, FaMedium, FaStackOverflow} from "react-icons/fa";

const Social = () => {
  return (
    <ul className="flex mt-4">
      <li className="mr-1">
        <a
          className="text-base text-[#272935]"
          href="https://www.linkedin.com/in/gajuahmd10/"
        >
          <FaLinkedin className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>
      <li className="mx-1">
        <a
          className="text-base text-[#272935]"
          href="https://www.kaggle.com/gazu468"
        >
          <FaKaggle  className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>
      <li className="ml-1">
        <a
          className="text-base text-[#272935]"
          href="https://www.researchgate.net/profile/Gaju-Ahmed"
        >
          <FaResearchgate className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>
        <li className="ml-1">
        <a
          className="text-base text-[#272935]"
          href="https://medium.com/@gajuahmd"
        >
          <FaMedium className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>

        <li className="ml-1">
        <a
          className="text-base text-[#272935]"
          href="https://stackoverflow.com/users/12081080/md-gazuruddin"
        >
          <FaStackOverflow className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>

    </ul>
  );
};

export default Social;
