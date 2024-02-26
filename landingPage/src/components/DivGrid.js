const DivGrid = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start gap-[24px] mix-blend-normal max-w-full grid-cols-[repeat(3,_minmax(297px,_1fr))] text-left text-lg-1 text-whitesmoke font-inter mq750:grid-cols-[minmax(297px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(297px,_515px))]">
      <div className="rounded-xl bg-gray-600 box-border overflow-hidden flex flex-col items-end justify-start pt-[25px] pb-px pr-0 pl-0.5 gap-[24px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-6 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="relative leading-[27px] font-semibold">
              A type-safe SDK
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm-7 text-gray-200">
              <div className="relative leading-[21px]">
                Install and run our SDK generator, which introspects
              </div>
              <div className="relative leading-[21px]">
                your repositories’ content to output automatic
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[1px]">
                <div className="relative leading-[21px]">TypeScript types.</div>
                <div className="h-[18px] box-border flex flex-row items-start justify-start py-0 px-0 mix-blend-normal border-b-[1px] border-solid border-dimgray-100">
                  <div className="relative leading-[21px] whitespace-nowrap">
                    Learn more
                  </div>
                </div>
                <div className="relative leading-[21px]">.</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="[border:none] bg-[transparent] h-[282px] w-[360px] [outline:none] relative overflow-hidden shrink-0 object-cover mix-blend-normal max-w-full"
          rows={14}
          cols={18}
          alt=""
          src="/image-objectcover@2x.png"
        />
      </div>
      <div className="rounded-xl bg-gray-600 box-border overflow-hidden flex flex-col items-end justify-start pt-px pb-[25px] pr-0 pl-0.5 gap-[24px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
        <img
          className="[border:none] bg-[transparent] h-[282px] w-[360px] [outline:none] relative overflow-hidden shrink-0 object-cover mix-blend-normal max-w-full"
          rows={14}
          cols={18}
          alt=""
          src="/image-objectcover@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-6 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="relative leading-[27px] font-semibold">
              All the essentials, and then some
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm-7 text-gray-200">
              <div className="flex flex-row items-center justify-start py-0 pr-0.5 pl-0 gap-[1px] mq450:flex-wrap">
                <div className="relative leading-[21px]">Choose from a</div>
                <div className="h-[18px] flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="flex flex-row items-center justify-center py-0 pr-px pl-0 mix-blend-normal border-b-[1px] border-solid border-dimgray-100">
                    <div className="h-[17px] flex flex-col items-start justify-end py-0 px-0 box-border">
                      <div className="relative leading-[21px]">
                        wide selection of blocks
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative leading-[21px]">. Use</div>
              </div>
              <div className="relative leading-[21px]">
                primitive blocks—text, images, dates, etc—, or more
              </div>
              <div className="relative leading-[21px]">
                complex ones—collections, components, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-gray-600 box-border overflow-hidden flex flex-col items-end justify-start pt-[25px] pb-px pr-0 pl-0.5 gap-[24px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-6 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="relative leading-[27px] font-semibold">
              A Diff View to see your changes
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm-7 text-gray-200">
              <div className="relative leading-[21px]">
                See what you’re about to commit across your whole
              </div>
              <div className="relative leading-[21px]">
                repository with the diff view. Discard changes if
              </div>
              <div className="flex flex-row items-center justify-start gap-[1px]">
                <div className="relative leading-[21px]">
                  you’ve made a mistake.
                </div>
                <div className="h-[18px] box-border flex flex-row items-start justify-start py-0 px-0 mix-blend-normal border-b-[1px] border-solid border-dimgray-100">
                  <div className="relative leading-[21px] whitespace-nowrap">
                    Learn more
                  </div>
                </div>
                <div className="relative leading-[21px]">.</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[360px] relative max-h-full overflow-hidden object-cover mix-blend-normal max-w-full"
          loading="eager"
          alt=""
          src="/image-objectcover-4@2x.png"
        />
      </div>
    </div>
  );
};

export default DivGrid;
