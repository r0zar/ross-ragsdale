import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import SpinningBox from "../../webgl/Box";
import { Canvas } from "react-three-fiber";
import ReactDOM from "react-dom";

export default function Skills() {
  React.useEffect(() => {
    ReactDOM.render(
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinningBox position={[0, 0, 0]} />
      </Canvas>,
      document.getElementById("skills-webgl")
    );
  });
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <div id="skills-webgl" className="skills-webgl" />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills) => {
                return <p className="subTitle skills-text">{skills}</p>;
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
