import React, { useEffect, useState, useMemo } from "react";

const Home = () => {
  const roles = useMemo(() => ["Full-Stack Developer", "AI Enthusiast"], []);
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    if (isTyping) {
      if (typedText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentFullText.substring(0, typedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        // Pause at the end of the word
        setTimeout(() => {
          setFade(false); // Start fade out
          setTimeout(() => {
            setTypedText("");
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            setFade(true); // Start fade in
            setIsTyping(true);
          }, 500); // Time for fade out
        }, 2000); // How long the word stays visible
      }
    }
  }, [typedText, isTyping, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 -right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Main Hero Content */}
      <div className="text-center max-w-4xl z-10 flex flex-col items-center">
        <p className="text-purple-600 dark:text-purple-400 font-mono font-semibold mb-3 tracking-[0.3em] uppercase text-xs md:text-sm">
          Welcome to my world
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-slate-900 dark:text-white leading-tight">
          Hi, I'm <br className="md:hidden" />
          <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Nikhil Sai Shepuri
          </span>
        </h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-10">
          <h2 className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400">
            I am a{" "}
            <span
              className={`text-purple-600 dark:text-purple-400 font-bold transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {typedText}
              {isTyping && (
                <span className="ml-1 border-r-4 border-purple-500 animate-pulse">
                  &nbsp;
                </span>
              )}
            </span>
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="Images/SHEPURI NIKHIL SAI (5) (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3.5 rounded-full bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/25 hover:bg-purple-700 hover:-translate-y-1 transition-all duration-300"
          >
            View Resume ↓
          </a>

          <a
            href="#contact"
            className="px-10 py-3.5 rounded-full border-2 border-slate-300 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 hover:border-purple-500 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Certifications - Now part of the same flex flow with reduced margin */}
        <div className="w-full pt-6 border-t border-slate-200 dark:border-slate-800/50">
          <p className="text-slate-400 text-[12px] uppercase tracking-widest mb-6">
            Cloud Certifications
          </p>
          <div className="flex justify-center items-center gap-10 md:gap-16">
            <img
              src="/Images/aws-cloud-quest-cloud-practitioner (1).png"
              alt="AWS"
              className="h-12 md:h-16  opacity-60  transition-all duration-500"
            />
            <img
              src="/Images/aws-re-start-graduate.png"
              alt="AWS Graduate"
              className="h-12 md:h-16  transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
