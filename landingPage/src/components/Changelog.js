import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const Changelog = () => {
  return (
    <section className="w-[1242px] flex flex-col items-center justify-start pt-0 px-5 pb-[88px] box-border gap-[56px] max-w-full shrink-0 text-left text-27xl-7 text-gray-200 font-inter lg:pb-[57px] lg:box-border mq750:gap-[56px] mq750:pb-[37px] mq750:box-border">
      <div className="flex flex-col items-center justify-start gap-[12px] max-w-full shrink-0">
        <div className="flex flex-col items-center justify-start py-0 px-[18px] box-border gap-[15px] max-w-full">
          <TextField
            className="[border:none] bg-[transparent] w-[254px] h-[29.5px] font-inter text-smi-9 text-dimgray-100 mix-blend-normal"
            placeholder="BaseHub Is Now Open for Everyone"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="9px" height="12.1px" src="/icon-1.png" />
              ),
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
            <div className="relative leading-[52.8px] z-[1] mq450:text-9xl mq450:leading-[32px] mq1050:text-18xl mq1050:leading-[42px]">
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
                src="/image-selectnone.svg"
              />
              <img
                className="self-stretch w-[120px] relative max-h-full overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[1]"
                loading="eager"
                alt=""
                src="/image-selectnone-1.svg"
              />
              <img
                className="self-stretch w-[120px] relative max-h-full overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[2]"
                loading="eager"
                alt=""
                src="/image-selectnone-2.svg"
              />
              <img
                className="self-stretch w-[120px] relative max-h-full overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[3]"
                loading="eager"
                alt=""
                src="/image-selectnone-3.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
          <button className="cursor-pointer [border:none] pt-2.5 pb-3 pr-[7px] pl-[13px] bg-orangered-100 rounded-77xl flex flex-row items-center justify-end mix-blend-normal whitespace-nowrap hover:bg-orangered-200">
            <div className="relative text-base-1 leading-[16px] font-medium font-inter text-black text-left">
              Get Started
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch h-[790px] rounded-3xl box-border flex flex-row items-end justify-center relative mix-blend-normal max-w-full border-[1px] border-solid border-gray-600">
        <div className="self-stretch w-[956px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#e47320,_rgba(228,_115,_32,_0))] [filter:blur(264px)] hidden mix-blend-normal max-w-full z-[0]" />
        <img
          className="h-full w-full absolute my-0 mx-[!important] top-[calc(50%_-_393.6px)] left-[calc(50%_-_600px)] rounded-4xl object-cover mix-blend-normal z-[1]"
          alt=""
          src="/figure-rounded11px@2x.png"
        />
        <div className="h-[394px] flex-1 [background:linear-gradient(0deg,_#040404,_rgba(0,_0,_0,_0))] flex flex-row items-end justify-center p-[49px] box-border mix-blend-normal max-w-full z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <button className="cursor-pointer pt-2 pb-1.5 pr-2.5 pl-3.5 bg-whitesmoke rounded-9980xl flex flex-row items-start justify-start gap-[4px] mix-blend-normal whitespace-nowrap z-[3] border-[1px] border-solid border-gainsboro-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
            <div className="relative text-sm-9 leading-[16px] font-medium font-inter text-black text-left">
              See how BaseHub Works
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
              alt=""
              src="/icon-2.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Changelog;
