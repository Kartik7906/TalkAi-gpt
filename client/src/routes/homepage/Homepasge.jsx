import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepasge = () => {
  const [typingstatus, settypingstatus] = useState("Human1");

  return (
    <div className="homepage">
      <img src="" alt="" className="orbital" />
      <div className="left">
        <h1>Talk AI</h1>
        <h2>Supercharge Your Creativity and Productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, unde.
          Iusto, amet magni perspiciatis ea laborum ab error inventore labore
          incidunt, omnis qui quos saepe corrupti non? Illum, delectus
          architecto.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgcontainer">
          <div className="bgcontainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingstatus === "Human1"
                  ? "/human1.jpeg"
                  : typingstatus === "Human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Human: We produce food for Mice",
                2000,
                () => {
                  settypingstatus("Bot");
                },
                "Bot: We produce food for Hamsters",
                2000,
                () => {
                  settypingstatus("Human2");
                },
                "Human2: We produce food for Guinea Pigs",
                2000,
                () => {
                  settypingstatus("Bot");
                },
                "Bot: We produce food for Chinchillas",
                2000,
                () => {
                  settypingstatus("Human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <Link to='/'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepasge;
