const TextGroupFAQButtons = () => {
  return (
    <section className="w-[1324px] flex flex-row items-start justify-start pt-0 pb-[57px] pr-11 pl-5 box-border max-w-full shrink-0 text-left text-13xl-4 text-whitesmoke font-inter lg:pr-[22px] lg:box-border mq750:pb-[37px] mq750:box-border">
      <div className="flex-1 flex flex-row items-center justify-start gap-[32px] max-w-full shrink-0 mq750:gap-[32px] mq1050:flex-wrap">
        <div className="flex flex-col items-start justify-start py-5 px-0 box-border gap-[15px] min-w-[345px] max-w-full mq450:min-w-full mq1050:flex-1">
          <b className="relative leading-[38.4px] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
            Our Roadmap
          </b>
          <div className="flex flex-col items-start justify-start gap-[24px] text-mid-9 text-gray-200">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[27px]">{`See the milestones that brought us here, `}</div>
              <div className="relative leading-[27px] z-[1]">
                and get a sneak peak of what’s next.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-smi-9">
              <div className="relative leading-[19.5px] z-[1]">{`Have some feature request? `}</div>
              <div className="flex flex-row items-center justify-start text-whitesmoke">
                <div className="h-[15px] rounded flex flex-row items-start justify-start py-0 px-0 box-border mix-blend-normal">
                  <div className="relative [text-decoration:underline] leading-[19.5px]">
                    Join our Discord
                  </div>
                </div>
                <div className="relative leading-[19.5px] text-gray-200">
                  {" "}
                  and tell us more!
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[464.7px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-normal min-w-[574px] mq750:min-w-full"
          loading="eager"
          alt=""
          src="/picture-flex10@2x.png"
        />
      </div>
    </section>
  );
};

export default TextGroupFAQButtons;
