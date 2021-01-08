import React from "react";
import ReactDOM from "react-dom";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import SpinningBox from "../../webgl/Box";
import { Canvas } from "react-three-fiber";

export default function Greeting() {
  React.useEffect(() => {
    ReactDOM.render(
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinningBox position={[0, 0, 0]} />
      </Canvas>,
      document.getElementById("wave")
    );
  });

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title} &nbsp; <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div id="wave" className="greeting-webgl" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
