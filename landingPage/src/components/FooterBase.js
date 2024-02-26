const FooterBase = () => {
  return (
    <section className="w-[1276px] flex flex-row items-start justify-start pt-0 px-5 pb-[108px] box-border max-w-full shrink-0 text-left text-33xl-8 text-gray-200 font-inter mq750:pb-[70px] mq750:box-border">
      <div className="flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[32px]">
        <div className="flex flex-col items-start justify-start max-w-full">
          <div className="relative leading-[64.8px] font-light mq450:text-13xl mq450:leading-[39px] mq1050:text-23xl mq1050:leading-[52px]">
            We want to change how content is
          </div>
          <div className="relative leading-[64.8px] font-light inline-block max-w-full z-[1] mq450:text-13xl mq450:leading-[39px] mq1050:text-23xl mq1050:leading-[52px]">
            written and distributed.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-full text-whitesmoke">
          <div className="relative leading-[64.8px] font-light mq450:text-13xl mq450:leading-[39px] mq1050:text-23xl mq1050:leading-[52px]">
            We want to build the best tools to help
          </div>
          <div className="relative leading-[64.8px] font-light z-[1] mq450:text-13xl mq450:leading-[39px] mq1050:text-23xl mq1050:leading-[52px]">
            ambitious content teams—developers,
          </div>
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border max-w-full">
            <div className="relative leading-[64.8px] font-light z-[2] mq450:text-13xl mq450:leading-[39px] mq1050:text-23xl mq1050:leading-[52px]">
              marketers, bloggers, journalists—write
            </div>
            <div className="relative leading-[64.8px] font-light inline-block max-w-full z-[3] mq450:text-13xl mq450:leading-[39px] mq1050:text-23xl mq1050:leading-[52px]">
              better content, faster.
            </div>
          </div>
          <button className="cursor-pointer pt-2 pb-[9px] pr-[13px] pl-[15px] bg-gray-600 rounded-77xl flex flex-row items-end justify-start gap-[8px] mix-blend-normal whitespace-nowrap border-[1px] border-solid border-gray-400 hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0 mix-blend-normal"
              alt=""
              src="/icon-3.svg"
            />
            <div className="relative text-sm-9 leading-[16px] font-medium font-inter text-lightgray text-left">
              Read more about our mission
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterBase;
