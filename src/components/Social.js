import React from "react";
import { FaLinkedin, FaInstagram, FaGraduationCap } from "react-icons/fa";

const Social = () => {
  return (
    <ul className="flex mt-4">
      <li className="mr-1">
        <a
          className="text-base text-[#272935]"
          href="https://linkedin.com/in/iansarker"
        >
          <FaLinkedin className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>
      <li className="mx-1">
        <a
          className="text-base text-[#272935]"
          href="https://www.instagram.com/sarker_anis_"
        >
          <FaInstagram className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>
      <li className="ml-1">
        <a
          className="text-base text-[#272935]"
          href="https://scholar.google.com/citations?user=DGp3Q3wAAAAJ&hl=en&authuser=1"
        >
          <FaGraduationCap className="w-5 h-5 text-teal-600 hover:text-teal-500" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
