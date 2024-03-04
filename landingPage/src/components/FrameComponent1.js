const FrameComponent1 = () => {
  return (
    <section className="w-[1036px] flex flex-col items-center justify-start pt-0 px-5 pb-[88px] box-border gap-[29px] max-w-full shrink-0 text-left text-mid-9 text-gray-200 font-inter mq750:pb-[37px] mq750:box-border mq1050:pb-[57px] mq1050:box-border">
      <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[27px] box-border max-w-full shrink-0">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full text-13xl-4 text-whitesmoke">
          <b className="relative leading-[38.4px] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
            Building blocks for your website
          </b>
        </div>
        <div className="relative leading-[27px] z-[1]">{`Work on a beautiful, Notion-like document. Press “/” and pick a block from a selection from `}</div>
        <div className="relative leading-[27px]">over a dozen options.</div>
      </div>
      <img
        className="self-stretch h-[581.8px] relative rounded-2xl max-w-full overflow-hidden shrink-0 object-cover mix-blend-normal"
        loading="eager"
        alt=""
        src="/image-mt8@2x.png"
      />
      <div className="flex flex-col items-start justify-start gap-[16px] mix-blend-normal max-w-full shrink-0 text-base-6">
        <div className="flex flex-row items-start justify-start gap-[8px] mix-blend-normal max-w-full">
          <img
            className="h-5 w-5 relative mix-blend-normal"
            loading="eager"
            alt=""
            src="/div.svg"
          />
          <div className="h-[22px] flex flex-col items-start justify-end py-0 px-0 box-border max-w-[calc(100%_-_28px)]">
            <div className="relative leading-[22.4px]">
              Model and write your content in one go, without the context
              switch.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[8px] mix-blend-normal max-w-full">
          <img
            className="h-5 w-5 relative mix-blend-normal"
            alt=""
            src="/div.svg"
          />
          <div className="h-[22px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border max-w-[calc(100%_-_28px)]">
            <div className="relative leading-[22.4px]">
              Drag-and-drop, duplicate, multi-select Blocks for faster
              workflows.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-0 box-border gap-[8px] mix-blend-normal max-w-full">
          <img
            className="h-5 w-5 relative mix-blend-normal"
            alt=""
            src="/div.svg"
          />
          <div className="h-[22px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border max-w-[calc(100%_-_28px)]">
            <div className="relative leading-[22.4px]">
              Build Components to reuse, just like you’d do in Figma or in
              React.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
