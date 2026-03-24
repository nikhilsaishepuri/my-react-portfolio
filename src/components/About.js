import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaLaptopCode,
  FaTools,
  FaExternalLinkAlt,
} from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabContent = {
    skills: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
        {/* Programming Block */}
        <div className="p-5 bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 rounded-3xl group transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-purple-600" size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Core Languages
            </h3>
          </div>
          <div className="flex gap-5 flex-wrap">
            {["c-1.svg", "java-4.svg"].map((icon) => (
              <img
                key={icon}
                src={`/Images/skills/${icon}`}
                className="w-9 h-9 object-contain hover:scale-110 transition-transform"
                alt="skill"
              />
            ))}
          </div>
        </div>

        {/* Web Tech Block */}
        <div className="p-5 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-3xl group transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaLaptopCode className="text-blue-600" size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Frontend & Web
            </h3>
          </div>
          <div className="flex gap-5 flex-wrap">
            {[
              "html-1.svg",
              "css-3.svg",
              "logo-javascript.svg",
              "react-2.svg",
            ].map((icon) => (
              <img
                key={icon}
                src={`/Images/skills/${icon}`}
                className="w-9 h-9 object-contain hover:scale-110 transition-transform"
                alt="skill"
              />
            ))}
          </div>
        </div>

        {/* Tools Block */}
        <div className="p-5 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-3xl group transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaTools className="text-slate-600" size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Dev Tools
            </h3>
          </div>
          <div className="flex gap-5 flex-wrap">
            {["git-icon.svg", "github-icon-1.svg"].map((icon) => (
              <img
                key={icon}
                src={`/Images/skills/${icon}`}
                className="w-9 h-9 object-contain hover:scale-110 transition-transform"
                alt="skill"
              />
            ))}
          </div>
        </div>
      </div>
    ),
    education: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
        {[
          {
            school: "KMIT College",
            degree: "B.Tech - CSE",
            date: "2019 - 2023",
          },
          {
            school: "Polytechnic",
            degree: "Diploma - CME",
            date: "2016 - 2019",
          },
          { school: "ZP High School", degree: "SSC", date: "Completed 2016" },
        ].map((edu, i) => (
          <div
            key={i}
            className={`p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors shadow-sm`}
          >
            <FaGraduationCap
              className="absolute -right-1 -bottom-1 text-slate-100 dark:text-slate-800/50 group-hover:text-purple-500/10 transition-colors"
              size={50}
            />
            <p className="text-[10px] font-black text-purple-600 mb-1">
              {edu.date}
            </p>
            <h3 className="text-sm font-black dark:text-white leading-tight mb-1">
              {edu.school}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {edu.degree}
            </p>
          </div>
        ))}
      </div>
    ),
    certification: (
      <div className="grid md:grid-cols-3 gap-4 animate-fadeIn">
        {[
          {
            org: "AWS",
            name: "Cloud Practitioner",
            link: "Images/EBEON1223854480-1.png",
            accent: "bg-orange-500",
          },
          {
            org: "SP Technologies",
            name: "Android Development",
            link: "Images/SP Technologies.jpeg",
            accent: "bg-green-500",
          },
        ].map((cert, i) => (
          <div
            key={i}
            className="flex flex-col p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl group hover:border-purple-500/30 transition-all shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cert.icon}</span>
              <div className="overflow-hidden">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 truncate">
                  {cert.org}
                </h3>
                <p className="text-xs font-bold dark:text-white truncate">
                  {cert.name}
                </p>
              </div>
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-2 py-2 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all group/btn"
            >
              View Certificate
              <FaExternalLinkAlt
                size={8}
                className="group-hover/btn:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <section
      id="about"
      className="relative px-6 py-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 -right-20 w-80 h-80 "></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Top Section: Colorful Image & Bio */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          {/* Profile Frame (Smaller & Colorful) */}
          <div className="md:w-1/3 relative flex justify-center group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>
            <div className="relative transform transition-all duration-500 ease-out group-hover:[transform:rotateX(10deg)_rotateY(10deg)]">
              <img
                src="/Images/Prof.jpeg"
                alt="Nikhil Sai Shepuri"
                className="w-full max-w-[240px] rounded-3xl object-cover shadow-2xl transition-all duration-700"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/30 dark:bg-black/50 backdrop-blur-md rounded-2xl border border-white/20 dark:border-black/20 text-center shadow-lg">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Engineering Graduate
                </p>
              </div>
            </div>
          </div>

          {/* Bio Layout */}
          {/* Bio Layout */}
          <div className="md:w-3/4 text-left">
            {/* Modern Tagline */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                <span className="w-1 h-1 rounded-full bg-purple-300"></span>
              </div>
              <p className="text-purple-600 dark:text-purple-400 font-mono font-bold text-[20px] tracking-[0.4em] uppercase">
                // --About Nikhil
              </p>
            </div>

            {/* Description - Smaller & More Professional */}
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  I am a Computer Science enthusiast dedicated to building
                  scalable full-stack applications with high-performance
                  architectures and elegant user interfaces.
                </p>
              </div>
              <div className="md:col-span-2 border-l border-slate-200 dark:border-slate-800 pl-6">
                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Proficient in{" "}
                  <span className="dark:text-white font-semibold">
                    Java & ReactJS
                  </span>
                  , I deliver clean-code solutions backed by AWS expertise and
                  hands-on freelancing experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selection Section */}
        <div className="mt-10">
          <div className="flex justify-center md:justify-start gap-10 mb-10 border-b-2 border-slate-100 dark:border-slate-800">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === tab
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full animate-slideRight"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="min-h-[200px]">{tabContent[activeTab]}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
