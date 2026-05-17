import React from "react";
import "./Home.css";
import "./Home.scss";
import UGmotion from "./UGmotion";

const Home = () => {
  return (
    
    <div className="HomePage">
      <UGmotion />
      <div className="header flex flex-col  justify-center ">
        <hr className="firstHr" />
        <div className="head flex justify-between ">
          <div className="logo">
            <h1>UG_Portfolio</h1>
          </div>
          <div className="menus flex gap-30">
            <h1>Home</h1>
            <h1>About me</h1>
            <h1>Project</h1>
            <h1>Contact me</h1>
          </div>
          <div className="login flex gap-5">
            <button className="bg-black text-white rounded-xl ">
              register
            </button>
            <h1 className="text-[10px]">/</h1>
            <button className="bg-black text-white rounded-xl ">Login</button>
          </div>
        </div>
        <hr className="SecondHr" />
      </div>
      <div className="Body">
        <div className="hero">
          <div className="right w-[50%] text-end">
            <div className="Rtop">
              <div className="soft">
                <h2>Software</h2>
                <h3>Developer</h3>
              </div>
              <div className="para">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat ducimus voluptatem nemo nihil maiores praesentium
                  dolorem iste aperiam br necessitatibus.
                </p>
              </div>
            </div>
            <div className="Rbot">
              <div className="socialBtn">
                <button className="social" >ig</button>
                <button className="social" >X</button>
                <button className="social" >fb</button>
                <button className="social" >tw</button>
              </div>
              <hr />
            </div>
          </div>
          <div className="lefT"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
