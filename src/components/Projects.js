import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Shri Aryan Caterers",
      image: "/Images/cat-logo.png",
      description:
        "Designed and developed a responsive catering website to showcase menus, services, and contact details.",
      tags: ["ReactJS", "TailwindCSS"],
      link: "https://shriaryancaterers.in",
    },
    {
      title: "Feed Your Buds",
      image: "/Images/feed your buds.jpg",
      description:
        "E-commerce for freshly baked goods with real-time delivery tracking.",
      tags: ["React"],
    },

    {
      title: "Bakery Shop",
      image: "/Images/bakery.jpg",
      description:
        "Online storefront focusing on seamless payment integration.",
      tags: ["React"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - More Compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-purple-600 dark:text-purple-400 font-mono font-bold text-[20px] tracking-[0.3em] uppercase mb-2">
              // PROJECTS
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-none">
              Featured <span className="text-purple-600">Projects.</span>
            </h2>
          </div>
        </div>

        {/* Project Grid - Optimized for Desktop Fit */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Image Container - Reduced Height (h-48) */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area - Tighter Padding */}
              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] uppercase font-black tracking-widest text-purple-600 dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer"
                    className="text-[10px] font-black uppercase tracking-widest text-purple-600"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
