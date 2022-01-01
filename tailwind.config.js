module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bai: ["Bai Jamjuree", "sans-serif"],
      },
      fontSize: {
        project: "1.125rem",
      },
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      backgroundImage: {
        "hero-pattern-mobile": "url('/images/bg-header-mobile.png')",
        "hero-pattern-desktp": "url('/images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
};
