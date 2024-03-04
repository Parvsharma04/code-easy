/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fefefe",
          "200": "#909090",
          "300": "#787878",
          "400": "#252525",
          "500": "#1b1b1b",
          "600": "#161616",
          "700": "#131313",
          "800": "#0e0e0e",
          "900": "#0c0c0c",
          "1000": "#040404",
          "1100": "rgba(255, 255, 255, 0)",
        },
        orangered: {
          "100": "#ff6c00",
          "200": "#e65200",
        },
        whitesmoke: "#f3f3f3",
        black: "#000",
        darkorange: "#ff8b35",
        lightgray: "#ccc",
        darkslategray: "#4a4a4a",
        dimgray: {
          "100": "#646464",
          "200": "#595959",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "41xl": "60px",
        "77xl": "96px",
        "39xl": "58px",
        "9980xl": "9999px",
        "4xl": "23px",
      },
    },
    fontSize: {
      "smi-9": "12.9px",
      "sm-7": "13.7px",
      "sm-9": "13.9px",
      "base-6": "15.6px",
      "5xl-2": "24.2px",
      lgi: "19px",
      "13xl-4": "32.4px",
      "7xl": "26px",
      "mid-9": "17.9px",
      "base-1": "16.1px",
      "33xl-8": "52.8px",
      "13xl": "32px",
      "23xl": "42px",
      "lg-1": "18.1px",
      "27xl-7": "46.7px",
      "9xl": "28px",
      "18xl": "37px",
      "smi-7": "12.7px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
