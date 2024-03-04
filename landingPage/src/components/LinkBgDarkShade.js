const LinkBgDarkShade = ({
  imageRoundedFull,
  jayzers,
  jayzersdotdev,
  theQualityOfTheUiTheAmoun,
  basehubAiDeliversSoFastIs,
}) => {
  return (
    <div className="self-stretch rounded-lg bg-gray-600 flex flex-col items-center justify-start py-[25px] pr-[26px] pl-6 gap-[24px] mix-blend-normal text-left text-base-1 text-whitesmoke font-inter border-[1px] border-solid border-gray-500">
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="h-14 w-14 relative rounded-9980xl overflow-hidden shrink-0 object-cover mix-blend-normal"
            loading="eager"
            alt=""
            src={imageRoundedFull}
          />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-medium">{jayzers}</div>
            <div className="relative text-smi-9 leading-[19.5px] text-gray-200">
              {jayzersdotdev}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <img
            className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/icon-4.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-0 text-sm-7 text-lightgray">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="relative leading-[21px]">
            {theQualityOfTheUiTheAmoun}
          </div>
          <div className="relative leading-[21px]">
            {basehubAiDeliversSoFastIs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBgDarkShade;
