import { useMemo } from "react";

const ListSpaceY1 = ({ image, personalWorkspace, propColor }) => {
  const personalWorkspaceStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] mix-blend-normal text-left text-sm-7 text-whitesmoke font-inter">
      <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-px gap-[8px] mix-blend-normal">
        <img
          className="h-[17px] w-4 relative overflow-hidden shrink-0 mix-blend-normal"
          alt=""
          src={image}
        />
        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
          <div
            className="relative leading-[21px]"
            style={personalWorkspaceStyle}
          >
            {personalWorkspace}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-px gap-[8px] mix-blend-normal">
        <input
          className="m-0 h-[17px] w-4 relative overflow-hidden shrink-0 mix-blend-normal"
          type="checkbox"
        />
        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
          <div className="relative leading-[21px]">Discord Support</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-px gap-[8px] mix-blend-normal">
        <img
          className="h-[17px] w-4 relative overflow-hidden shrink-0 mix-blend-normal"
          alt=""
          src="/image-2.svg"
        />
        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
          <div className="relative leading-[21px]">AI Assistant</div>
        </div>
      </div>
    </div>
  );
};

export default ListSpaceY1;
