module.exports = {
  darkMode: "class", // for dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s infinite",
        hinge: "hingeDrop 2s ease-in-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        hingeDrop: {
          "0%": { transform: "rotate(0)" },
          "20%,60%": { transform: "rotate(80deg)" },
          "40%": { transform: "rotate(60deg)" },
          "80%": {
            transform: "rotate(60deg) translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(600px) rotate(80deg)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
