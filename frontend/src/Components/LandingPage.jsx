import { TextField, createTheme, ThemeProvider, Button } from "@mui/material";
import img1 from "../assets/icon-1.png";
import img2 from "../assets/image-selectnone.svg";
import img3 from "../assets/image-selectnone-1.svg";
import img4 from "../assets/image-selectnone-2.svg";
import img5 from "../assets/image-selectnone-3.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/landing.css";

const LandingPage = ({ theme, settheme }) => {
  return (
    <>
      <Navbar theme={theme} settheme={settheme} />
      <section
        className={`fixed flex items-center justify-center p-8 m-auto w-full h-full ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div
          style={{ boxShadow: "0px 0px 100px red" }}
          className="text-center content-container flex flex-col items-center justify-center lg:gap-[12px] m-auto p-5"
        >
          <div className="flex flex-col items-center justify-start py-0 px-[18px] box-border gap-[15px] max-w-full">
            <div className="flex flex-col items-center justify-start max-w-full">
              <div
                style={{ fontSize: "xx-large" }}
                className="relative leading-[52.8px] z-[1] mq450:text-9xl mq450:leading-[32px] mq1050:text-18xl mq1050:leading-[42px]"
              >
                Unlock Your Website's Potential: Explore Free Pre-Built Components Today!
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-0 px-0 pb-3 box-border max-w-full text-base-6">
            <div className="relative leading-[22.4px] z-[1]">
              
            </div>
            <div className="relative leading-[22.4px] inline max-w-90 mt-[-1px]">
            Discover a treasure trove of free pre-built website components. From stylish templates, streamline your web development journey effortlessly.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 pb-3 pr-0 pl-1.5 box-border max-w-full text-smi-9">
            <div className="flex flex-col items-center justify-start gap-[4px] max-w-full">
              <div className="relative leading-[19.5px]">Used by</div>
              <div className="flex items-start justify-center flex-wrap">
                <img
                  className="self-stretch w-[120px] relative max-h-full overflow-hidden shrink-0 mix-blend-normal min-h-[45px]"
                  loading="eager"
                  alt=""
                  src={img2}
                />
                <img
                  className="self-stretch w-[120px] relative max-h-full overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[1]"
                  loading="eager"
                  alt=""
                  src={img3}
                />
                <img
                  className="self-stretch w-[120px] relative max-h-full overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[2]"
                  loading="eager"
                  alt=""
                  src={img4}
                />
                <img
                  className="self-stretch w-[120px] relative max-h-full overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[3]"
                  loading="eager"
                  alt=""
                  src={img5}
                />
              </div>
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
      </section>
      {/* <hr
        className={`absolute w-full bottom-24 z-50 ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
      /> */}
      <Footer theme={theme} settheme={settheme} />
    </>
  );
};

export default LandingPage;
