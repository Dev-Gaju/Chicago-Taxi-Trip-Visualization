import React from "react";
import Skills from "./Skills";
import About from "./About";
import Publications from "./Publications";
import Projects from "./Projects";
import Experience from "./Experience";

const Wrapper = ({ children, id }) => {
  return (
    <div className="p-2 md:p-0" id={id}>
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div
      className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 mx-auto pt-20"
      id="/iansarker"
    >
      <Wrapper id="about">
        <About />
      </Wrapper>
      <Wrapper id="publications">
        <Publications />
      </Wrapper>
      <Wrapper id="experience">
        <Experience />
      </Wrapper>
      <Wrapper id="skills">
        <Skills />
      </Wrapper>
      <Wrapper id="projects">
        <Projects />
      </Wrapper>
    </div>
  );
};

export default Home;
