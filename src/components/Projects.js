import React, { useState } from "react";
import Modal from "./Modal";
import { projects as project_list } from "../resources/allData";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProj, setSelectedProj] = useState(null);
  const handleModal = (proj) => {
    setShowModal((prev) => !prev);
    setSelectedProj(proj);
  };

  const projects = project_list.map((project, id) => {
    return (
      <div className="shadow-md rounded-lg overflow-hidden" key={id}>
        <div className="relative rounded-lg item_wrap">
          <div onClick={() => handleModal(project)}>
            <img
              className="w-full h-full"
              src={require("../projects/thumbs/" + project.thumbnail)}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:backdrop-blur-sm hover:bg-opacity-60 transition delay-400 duration-200 ease-in-out cursor-pointer overlay">
              <div className="p-5 flex items-center h-full justify-center">
                <span className="block text-white font-poppins text-base font-light tracking-wider">
                  {project.title}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          data={selectedProj}
        />
      </div>
    );
  });

  return (
    <div className="mb-8">
      <h1 className="text-[#3d4346] font-light text-3xl font-poppins leading-5 break-words mb-8">My Works</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{projects}</div>
    </div>
  );
};

export default Projects;
