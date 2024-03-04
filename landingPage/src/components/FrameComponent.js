import { useMemo } from "react";

const FrameComponent = ({
  imageRoundedFull,
  brotzky,
  brotzky1,
  justGotAccessToBasehubAi,
  propBorderRadius,
  propBackgroundColor,
  propBorder,
  propPadding,
  propMixBlendMode,
  propTop,
  propRight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      padding: propPadding,
      mixBlendMode: propMixBlendMode,
    };
  }, [
    propBorderRadius,
    propBackgroundColor,
    propBorder,
    propPadding,
    propMixBlendMode,
  ]);

  const iconStyle = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
    };
  }, [propTop, propRight]);

  return (
    <div
      className="self-stretch flex flex-row items-center justify-start relative text-left text-base-1 text-whitesmoke font-inter"
      style={frameDivStyle}
    >
      <img
        className="h-4 w-4 absolute my-0 mx-[!important] top-[7.7px] right-[0px] overflow-hidden shrink-0 mix-blend-normal"
        loading="eager"
        alt=""
        src="/icon-4.svg"
        style={iconStyle}
      />
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="h-14 w-14 relative rounded-9980xl overflow-hidden shrink-0 object-cover mix-blend-normal"
            loading="eager"
            alt=""
            src={imageRoundedFull}
          />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-medium">{brotzky}</div>
            <div className="relative text-smi-9 leading-[19.5px] text-gray-200">
              {brotzky1}
            </div>
          </div>
        </div>
        <div className="relative text-sm-7 leading-[21px] text-lightgray">
          {justGotAccessToBasehubAi}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
