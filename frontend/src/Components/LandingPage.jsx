import { TextField, createTheme, ThemeProvider, Button } from "@mui/material";
import img1 from "../assets/icon-1.png";
import img2 from "../assets/image-selectnone.svg";
import img3 from "../assets/image-selectnone-1.svg";
import img4 from "../assets/image-selectnone-2.svg";
import img5 from "../assets/image-selectnone-3.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/landing.css"

const LandingPage = ({ theme, settheme }) => {
  const customTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '&:hover': {
              display: 'none'
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <>
        <Navbar theme={theme} settheme={settheme} />
        <section
          style={{ paddingTop: '4vh', height: '74vh' }}
          className="bg-black flex flex-col items-center justify-center pt-0 px-5 pb-[88px] box-border gap-[56px] w-auto shrink-0 text-left text-27xl-7 text-gray-200 font-inter lg:pb-[57px] lg:box-border mq750:gap-[56px] mq750:pb-[37px] mq750:box-border"
        >
          <div style={{boxShadow: '0px 0px 100px red'}} className="content-container flex flex-col items-center justify-start gap-[12px] max-w-full shrink-0">
            <div className="flex flex-col items-center justify-start py-0 px-[18px] box-border gap-[15px] max-w-full">
              <TextField
                className="text-white [border:none] bg-[transparent] w-[254px] h-[29.5px] font-inter text-smi-9 text-dimgray-100 mix-blend-normal"
                placeholder="BaseHub Is Now Open for Everyone"
                variant="outlined"
                InputProps={{
                  startAdornment: <img width="9px" height="12.1px" src={img1} />,
                  inputProps: {
                    style: { color: "white" },
                  },
                }}
                sx={{
                  "& fieldset": { borderColor: "#1b1b1b" },
                  "& .MuiInputBase-root": {
                    height: "29.5px",
                    paddingLeft: "12px",
                    borderRadius: "9999px",
                    fontSize: "12.9px",
                  },
                  "& .MuiInputBase-input": { paddingLeft: "8px", color: "#646464" },
                  width: "254px",
                }}
              />
              <div className="flex flex-col items-center justify-start max-w-full">
                <div style={{ fontSize: 'xx-large' }} className="relative leading-[52.8px] z-[1] mq450:text-9xl mq450:leading-[32px] mq1050:text-18xl mq1050:leading-[42px]">
                  Fast, Collaborative, AI-Native
                </div>
                <div className="relative leading-[52.8px] text-whitesmoke inline-block max-w-full mq450:text-9xl mq450:leading-[32px] mq1050:text-18xl mq1050:leading-[42px]">
                  Content Management
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-3 box-border max-w-full text-base-6">
              <div className="relative leading-[22.4px] z-[1]">
                Make your website editable faster than ever with BaseHub, the
                Headless CMS that’s built for
              </div>
              <div className="relative leading-[22.4px] inline-block max-w-full mt-[-1px]">
                speed and collaborative workflows—all with the help of AI.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 pb-3 pr-0 pl-1.5 box-border max-w-full text-smi-9">
              <div className="flex flex-col items-center justify-start gap-[4px] max-w-full">
                <div className="relative leading-[19.5px]">Used by</div>
                <div className="flex flex-row items-start justify-center [row-gap:20px] mq750:flex-wrap">
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
              <button style={{ backgroundColor: '#e53935' }} className="rounded cursor-pointer [border:none] pt-2.5 pb-3 pr-[7px] pl-[13px] bg-orangered-100 rounded-77xl flex flex-row items-center justify-end mix-blend-normal whitespace-nowrap hover:bg-orangered-200">
                <div onClick={ () => {
                  window.location.href = "./framework"
                }} className="relative text-base-1 leading-[16px] font-medium font-inter text-black text-left">
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </section>
        <hr />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default LandingPage;
