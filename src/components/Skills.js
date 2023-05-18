import React from "react";
import { programming_skills, lib_framework_skills, other_skills } from "./../resources/allData";

const SkillUi = ({ val }) => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-200 rounded-md px-2 py-1 shadow-inner shadow-teal-100 border-0 border-r-2 border-b-2 border-slate-300 mr-1 mb-1">
      <code className="text-[#3d4346]">{val.title}</code>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[#3d4346] font-light text-3xl font-poppins leading-5 break-words mb-8">Expertises</h1>
      <div>
        <div className="mb-3">
          <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-3">Programming Skills</h1>
          <div className="flex flex-wrap">
            {programming_skills.map((val, id) => (
              <SkillUi val={val} key={id} />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-3">Framework/Libraries</h1>
          <div className="flex flex-wrap">
            {lib_framework_skills.map((val, id) => (
              <SkillUi val={val} key={id} />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-3">Other Skills</h1>
          <div className="flex flex-wrap">
            {other_skills.map((val, id) => (
              <SkillUi val={val} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
