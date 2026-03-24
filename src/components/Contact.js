import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaAward,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Nikhil will get back to you soon.");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-purple-600 dark:text-purple-400 font-mono font-bold text-[10px] tracking-[0.3em] uppercase mb-2">
              // LET'S CONNECT
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-none">
              Get in <span className="text-purple-600">Touch.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            {[
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/7659831448",
                color: "hover:text-green-500",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/shepuri-nikhil-sai-2b844318b",
                color: "hover:text-blue-500",
              },
              {
                icon: <FaAward />,
                link: "https://www.credly.com/users/shepuri-nikhil-sai",
                color: "hover:text-orange-500",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Quick Info - Left Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <div className="text-purple-600">
                <FaEnvelope size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Email
                </p>
                {/* Clickable Email Link */}
                <a
                  href="mailto:nikhilsaishepuri@gmail.com"
                  className="text-sm font-bold truncate dark:text-white hover:text-purple-600 transition-colors block"
                >
                  nikhilsaishepuri@gmail.com
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <div className="text-purple-600">
                <FaPhone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Phone
                </p>
                {/* Clickable Phone Link */}
                <a
                  href="tel:+917659831448"
                  className="text-sm font-bold dark:text-white hover:text-purple-600 transition-colors block"
                >
                  +91 7659831448
                </a>
              </div>
            </div>
          </div>

          {/* Compact Form - Right Column (Spans 2) */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-purple-500 text-sm dark:text-white transition-all outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-purple-500 text-sm dark:text-white transition-all outline-none"
                />
              </div>
              <textarea
                rows="3"
                placeholder="Your Message..."
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-purple-500 text-sm dark:text-white transition-all resize-none mb-4 outline-none"
              ></textarea>
              <button
                type="submit"
                className="group flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all active:scale-95"
              >
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[10px]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Branding - Tiny and Clean */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">
          © 2026 NIKHIL SAI SHEPURI
        </p>
        <p className="text-[10px] font-bold">Built with React & Tailwind</p>
      </div>
    </section>
  );
};

export default Contact;
