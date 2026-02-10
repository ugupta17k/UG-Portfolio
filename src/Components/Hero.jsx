import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative bg-black w-full text-white">
      <div className="absolute fixed w-full h-screen">
        <img className="w-full h-full object-cover" src="/img/bg.svg" alt="" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className=" relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div className="w-[60%] h-full bg-zinc-900 flex flex-col justify-center items-center ">
          <div className="body w-[90%] h-full bg-black p-10 ">
            <Navbar />
            <div className="head mt-7 flex justify-between items-center">
              <div className="w-[60%]">
                <h1 className="text-3xl font-medium">Ujjwal Gupta </h1>
                <h2 className="text-2xl font-light mt-3">
                  A Full-Stack Developer
                </h2>
                <p className="mt-5 font-thin">
                  I’m a passionate Full Stack Developer who loves building clean, modern, and meaningful digital experiences. I enjoy turning ideas into scalable products using frontend and backend technologies, UI/UX principles, and strong logical problem-solving. From crafting smooth user interfaces to writing efficient server-side code, I focus on creating solutions that truly make an impact.
                </p>
              </div>
              <div className="w-[40%] pl-40">social icons</div>
            </div>
            <hr className="mt-10 border-gray-700" />
            <div className="projects">
              <div className="">
                <h1 className="text-2xl font-light mt-7 bg-zinc-900 p-3 text-[.8rem] flex justify-center items-center  w-[65%] border border-dashed">
                  I love designing and Building thoughtful, Production-grade
                  applications
                </h1>
                <div className="w-full flex justify-center gap-7 item-center mt-5 ">
                  <div className="left w-[45%] h-full border border-[0.5px] rounded-3xl">
                    <div className="w-full py-3 px-3">
                      <img
                        className="rounded-xl"
                        src="/img/project1.png"
                        alt=""
                      />
                    </div>
                    <div className="px-5 py-3 ">
                      <h1 className="text-2xl mb-2 ">hello</h1>
                      <p className="font-light text-[0.8rem]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid, sunt.
                      </p>
                      <h1 className="mt-5 text-[0.7rem] font-light">
                        Tech stack
                      </h1>
                      <div className="flex">
                        <img className="w-10" src="./icon/js.svg" alt="" />
                        <img className="w-10" src="./icon/js.svg" alt="" />
                        <img className="w-10" src="./icon/js.svg" alt="" />
                        <img className="w-10" src="./icon/js.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="right w-[45%] h-full border border-[0.5px] rounded-3xl">
                    <div className="w-full py-3 px-3">
                      <img
                        className="rounded-xl"
                        src="/img/project1.png"
                        alt=""
                      />
                    </div>
                    <div className="px-5 py-3 ">
                      <h1 className="text-2xl mb-2 ">hello</h1>
                      <p className="font-light text-[0.8rem]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid, sunt.
                      </p>
                      <h1 className="mt-5 text-[0.7rem] font-light">
                        Tech stack
                      </h1>
                      <div className="flex">
                        <img className="w-10" src="./icon/js.svg" alt="" />
                        <img className="w-10" src="./icon/js.svg" alt="" />
                        <img className="w-10" src="./icon/js.svg" alt="" />
                        <img className="w-10" src="./icon/js.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="py-2 px-8 bg-zinc-800 rounded mt-10 ml-70 cursor-pointer">
                  View all projects
                </button>
              </div>
            </div>
            <hr className="mt-10 border-gray-700" />
            <h1 className="text-3xl mt-1">Experience</h1>
            <hr className="mt-1 border-gray-700" />
            <div className="mt-5 ">
              <div className="flex justify-between">
                <h1>Full Stack Development & Digital Marketing</h1>
                <h2>sept 2025 - Present</h2>
              </div>
              <ol className="mt-5 px-5">
                <li className="text-[12px]  opacity-[0.7] ">
                  - Developing and maintaining full-stack web applications using
                  React.js, Node.js, Express.js, and MongoDB, focusing on
                  performance, scalability, and clean architecture.
                </li>
                <li className="text-[12px] mt-4 opacity-[0.7] ">
                  - Building RESTful APIs, handling backend logic, database
                  operations, and seamless frontend backend integration.
                </li>
                <li className="text-[12px] mt-4 opacity-[0.7] ">
                  - Designing and implementing responsive, user-friendly
                  interfaces, converting Figma designs into production-ready
                  components.
                </li>
                <li className="text-[12px]  mt-4 opacity-[0.7] ">
                  - Alongside development work, supporting digital marketing
                  initiatives by optimizing landing pages for SEO, performance,
                  and conversion rates.
                </li>
              </ol>
              <hr className="mt-10 border-gray-700" />
              <div className="flex mt-5 justify-between">
                <h1>Open Source Contributor</h1>
                <h2>sept 2025 - Present</h2>
              </div>
              <ol className="mt-5 px-5">
                <li className="text-[12px]  opacity-[0.7] ">
                  - Mastered React, Node.js, databases, and deployment
                  technologies
                </li>
                <li className="text-[12px] mt-4 opacity-[0.7] ">
                  - Contributed to multiple popular open source projects
                </li>
                <li className="text-[12px] mt-4 opacity-[0.7] ">
                  - Contributed to multiple popular open source projects
                </li>
              </ol>
              <hr className="mt-10 border-gray-700" />
              <h1 className="text-[25px] mt-5">Skills</h1>
              <h1 className="text-[14px] opacity-[0.8] mt-5">
                I love working with these technologies to build beautiful and
                functional applications.
              </h1>
              <div className="mt-5 flex flex-wrap gap-5">
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
                <div className="w-[8rem] rounded flex justify-center items-center h-[30px] bg-zinc-700">
                  <img className="w-[2.5rem]" src="./icon/js.svg" alt="" />
                  <h1>Javascript</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
