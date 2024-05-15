import { TextField, createTheme, ThemeProvider, Button } from "@mui/material";
import bannerImage from "../assets/bannerImage.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/landing.css";

const LandingPage = ({ theme, settheme }) => {
  return (
    <>
      <Navbar theme={theme} settheme={settheme} />
      <section
        className={`fixed flex items-center justify-between p-8 m-auto w-full h-full ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div
          style={{ boxShadow: "0px 0px 100px red" }}
          className="text-center content-container flex items-center sm:flex-col md:flex-row justify-between lg:gap-[12px] m-auto h-96"
        >
          <div className="left flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center justify-start py-0 px-[18px] box-border gap-[15px] w-auto">
              <div className="flex flex-col items-center justify-start">
                <div className="text-3xl">
                  Unlock Your Website's Potential: Explore Free Pre-Built
                  Components Today!
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pb-3 box-border  text-base-6">
              <div className="relative leading-[22.4px] z-[1]"></div>
              <div className="relative leading-[22.4px] inline max-w-90 mt-5 mb-3">
                Discover a treasure trove of free pre-built website components.
                From stylish templates, streamline your web development journey
                effortlessly.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
              <button
                style={{ backgroundColor: "#e53935" }}
                className="rounded cursor-pointer [border:none] pt-2.5 pb-3 pr-[7px] pl-[13px] bg-orangered-100 rounded-77xl flex flex-row items-center justify-end mix-blend-normal whitespace-nowrap hover:bg-orangered-200"
              >
                <div
                  onClick={() => {
                    window.location.href = "./framework";
                  }}
                  className="relative text-base-1 leading-[16px] font-medium font-inter text-black text-left"
                >
                  Get Started
                </div>
              </button>
            </div>
          </div>
          <div className="right block w-fit h-fit">
            <img
              className="rounded-lg border-2"
              src={bannerImage}
              alt="banner image"
            />
          </div>
        </div>
      </section>
      <Footer theme={theme} settheme={settheme} />
    </>
  );
};

export default LandingPage;
