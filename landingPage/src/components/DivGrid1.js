const DivGrid1 = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] mix-blend-normal max-w-full text-left text-lg-1 text-whitesmoke font-inter">
      <div className="flex-1 rounded-xl bg-gray-600 box-border overflow-hidden flex flex-row items-start justify-start pt-[25px] pb-px pr-px pl-[25px] gap-[24px] mix-blend-normal min-w-[394px] max-w-full border-[1px] border-solid border-gray-400 mq750:flex-wrap mq750:min-w-full">
        <div className="h-[106px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3635.546875px] box-border gap-[16px] mix-blend-normal min-w-[178px] lg:pb-[1536px] lg:box-border mq750:pb-[649px] mq750:box-border mq1050:pb-[998px] mq1050:box-border">
          <div className="relative leading-[27px] font-semibold">
            Realtime, Multiplayer Presence
          </div>
          <div className="self-stretch h-[63px] flex flex-col items-start justify-start pt-0 pb-[3720.546875px] pr-[22.390625px] pl-0 box-border mix-blend-normal text-sm-7 text-gray-200 lg:pb-[1572px] lg:box-border mq750:pb-[664px] mq750:box-border mq1050:pb-[1022px] mq1050:box-border">
            <div className="relative leading-[21px]">
              Work with your team in real time. You’ll
            </div>
            <div className="relative leading-[21px]">
              see their faces as they move through
            </div>
            <div className="relative leading-[21px]">the Repository.</div>
          </div>
        </div>
        <img
          className="[border:none] bg-[transparent] h-[250px] w-auto [outline:none] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-normal min-w-[183px]"
          rows={13}
          cols={14}
          alt=""
          src="/image-objectcover@2x.png"
        />
      </div>
      <div className="w-[606px] rounded-xl bg-gray-600 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[25px] pb-px pr-[450px] pl-[25px] gap-[24px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400 mq450:pr-5 mq450:box-border mq750:pr-28 mq750:box-border mq1050:flex-wrap mq1050:pr-[225px] mq1050:box-border">
        <div className="h-[127px] flex flex-col items-start justify-start pt-0 px-0 pb-[3614.546875px] box-border gap-[16px] mix-blend-normal min-w-[274px] lg:pb-[1527px] lg:box-border mq750:pb-[645px] mq750:box-border mq1050:flex-1 mq1050:pb-[993px] mq1050:box-border">
          <div className="relative leading-[27px] font-semibold">
            AI Structure Generation
          </div>
          <div className="h-[84px] flex flex-col items-start justify-start pt-0 pb-[3720.546875px] pr-[19.71875px] pl-0 box-border mix-blend-normal text-sm-7 text-gray-200 lg:pb-[1572px] lg:box-border mq750:pb-[664px] mq750:box-border mq1050:pb-[1022px] mq1050:box-border">
            <div className="relative leading-[21px]">
              Generate entire content models with
            </div>
            <div className="relative leading-[21px]">
              natural language. Try it out with things
            </div>
            <div className="relative leading-[21px]">
              like “a blog post about space travel”, or
            </div>
            <div className="relative leading-[21px]">
              “model a documentation site”.
            </div>
          </div>
        </div>
        <img
          className="h-[250px] w-[282px] relative overflow-hidden shrink-0 object-cover mix-blend-normal mq1050:flex-1"
          loading="eager"
          alt=""
          src="/image-objectcover-1@2x.png"
        />
      </div>
    </div>
  );
};

export default DivGrid1;
