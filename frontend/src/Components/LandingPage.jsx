import { TextField, createTheme, ThemeProvider, Button } from "@mui/material";
import bannerImage from "../assets/bannerImage.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/landing.css";
import introJs from "intro.js";
import { useEffect } from "react";

const LandingPage = ({ theme, settheme }) => {
  const getDemo = () => {
    let aiDiv = document.getElementById("aichatbot-widget-button");
    aiDiv.setAttribute("data-step", "6");
    aiDiv.setAttribute(
      "data-intro",
      "Ask any query to codeEasy AI and Enjoy the website !!!"
    );

    introJs().setOptions("showProgress", true).start();
  };

  return (
    <>
      <Navbar theme={theme} settheme={settheme} />
      <div
        style={{
          height: "80vh",
        }}
        className={`${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } pl-4 pr-4`}
      >
        <section
          className={`flex items-center justify-between h-full${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
          style={{
            height: "77vh",
          }}
        >
          <div
            style={{ boxShadow: "0px 0px 100px red" }}
            className="text-center content-container flex items-center flex-col-reverse md:flex-row justify-between lg:gap-[12px] m-auto"
          >
            <div className="left flex flex-col justify-evenly items-center">
              <div className="flex flex-col items-center justify-start py-0 px-[18px] box-border gap-[15px] w-auto">
                <div className="flex flex-col items-center justify-start">
                  <div className="text-xl md:text-3xl">
                    Unlock Your Website's Potential: Explore Free Pre-Built
                    Components Today!
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pb-3 box-border  text-base-6">
                <div className="relative leading-[22.4px] z-[1]"></div>
                <div className="relative leading-[22.4px] inline max-w-90 mt-5 mb-3">
                  Discover a treasure trove of free pre-built website
                  components. From stylish templates, streamline your web
                  development journey effortlessly.
                </div>
              </div>
              <div className="flex flex-row items-center justify-center md:justify-between py-0 pr-0 pl-[5px] w-52">
                <button
                  data-step="4"
                  data-intro="Click here to get started with the framework"
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
                <button
                  style={{ backgroundColor: "#e53935" }}
                  className="hidden md:flex rounded cursor-pointer [border:none] pt-2.5 pb-3 pr-[7px] pl-[13px] bg-orangered-100 rounded-77xl flex-row items-center justify-end mix-blend-normal whitespace-nowrap hover:bg-orangered-200"
                >
                  <div
                    onClick={() => getDemo()}
                    className="relative text-base-1 leading-[16px] font-medium font-inter text-black text-left"
                  >
                    Get Demo
                  </div>
                </button>
              </div>
            </div>
            <div className="right block mb-5 md:mb-0 w-fit h-fit">
              <img
                className="rounded-lg border-2"
                src={bannerImage}
                alt="banner image"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer theme={theme} settheme={settheme} />
    </>
  );
};

export default LandingPage;
