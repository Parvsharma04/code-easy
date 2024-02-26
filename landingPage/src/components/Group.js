const Group = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-left text-base-6 text-whitesmoke font-inter">
      <div className="flex-1 rounded-t-none rounded-b-3xl bg-gray-800 shadow-[0px_1px_0px_rgba(71,_70,_70,_0.25),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0)] overflow-hidden flex flex-row items-center justify-between py-0 pr-[31px] pl-8 box-border mix-blend-normal gap-[20px] max-w-full">
        <div className="w-[143px] flex flex-col items-start justify-start">
          <div className="w-[92px] rounded flex flex-row items-start justify-start pt-0 px-0 pb-7 box-border relative mix-blend-normal">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain mix-blend-normal"
              loading="eager"
              alt=""
              src="/icon@2x.png"
            />
            <div className="h-0 flex flex-col items-start justify-end py-0 px-0 box-border">
              <div className="w-px h-px relative overflow-hidden shrink-0 mix-blend-normal">
                <div className="absolute right-[-107px] bottom-[-22.5px] leading-[24px] whitespace-nowrap z-[1]">
                  BaseHub Logo
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full text-sm-7 text-gray-200 mq750:hidden">
          <div className="rounded flex flex-row items-center justify-center pt-[13px] px-2.5 pb-3.5 mix-blend-normal">
            <div className="relative leading-[21px]">Pricing</div>
          </div>
          <div className="rounded flex flex-row items-center justify-center pt-[13px] pb-3.5 pr-[11px] pl-2.5 mix-blend-normal">
            <div className="relative leading-[21px]">Documentation</div>
          </div>
          <div className="rounded flex flex-row items-center justify-center pt-[13px] pb-3.5 pr-[11px] pl-2.5 mix-blend-normal">
            <div className="relative leading-[21px]">Blog</div>
          </div>
          <div className="rounded flex flex-row items-center justify-center pt-[13px] pb-3.5 pr-[11px] pl-2.5 mix-blend-normal">
            <div className="relative leading-[21px]">Changelog</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <button className="cursor-pointer pt-1 pb-1.5 pr-2 pl-3 bg-gray-600 w-[63px] rounded-77xl box-border flex flex-row items-center justify-center mix-blend-normal whitespace-nowrap border-[1px] border-solid border-gray-400 hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-smi-7 leading-[16px] font-medium font-inter text-lightgray text-left">
              Log In
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-1 pb-1.5 pr-[9px] pl-3 bg-orangered-100 rounded-77xl flex flex-row items-center justify-center mix-blend-normal whitespace-nowrap hover:bg-orangered-200">
            <div className="relative text-smi-7 leading-[16px] font-medium font-inter text-black text-left">
              Sign Up
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Group;
