import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const ListSpaceY = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mix-blend-normal max-w-full text-left text-sm-7 text-whitesmoke font-inter">
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-[47px] font-inter text-sm-7 text-whitesmoke mix-blend-normal"
        placeholder="Do you have an annual plan or discounts?"
        variant="outlined"
        InputProps={{
          startAdornment: <img width="18px" height="18px" src="/icon-11.svg" />,
        }}
        sx={{
          "& fieldset": { borderColor: "#252525" },
          "& .MuiInputBase-root": {
            height: "47px",
            backgroundColor: "#040404",
            paddingLeft: "13px",
            borderRadius: "8px",
            fontSize: "13.7px",
          },
          "& .MuiInputBase-input": { paddingLeft: "8px", color: "#f3f3f3" },
        }}
      />
      <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center mix-blend-normal max-w-full">
        <div className="flex-1 rounded-lg bg-gray-1000 box-border flex flex-row items-center justify-start p-[13px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
          <div className="flex flex-row items-center justify-start pt-0 pb-px pr-px pl-0 box-border gap-[8px] mix-blend-normal max-w-full">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 mix-blend-normal"
              loading="eager"
              alt=""
              src="/icon-12.svg"
            />
            <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border max-w-[calc(100%_-_26px)]">
              <div className="relative leading-[21px]">
                What happens when I reach the limit on the number of Blocks?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center mix-blend-normal max-w-full">
        <div className="flex-1 rounded-lg bg-gray-1000 box-border flex flex-row items-center justify-start p-[13px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
          <div className="flex flex-row items-center justify-start pt-0 pb-px pr-px pl-0 box-border gap-[8px] mix-blend-normal max-w-full">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 mix-blend-normal"
              loading="eager"
              alt=""
              src="/icon-12.svg"
            />
            <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border max-w-[calc(100%_-_26px)]">
              <div className="relative leading-[21px]">
                What happens when I reach the limit on the number of API
                Requests made?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center mix-blend-normal max-w-full">
        <div className="flex-1 rounded-lg bg-gray-1000 box-border flex flex-row items-center justify-start p-[13px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
          <div className="flex flex-row items-center justify-start pt-0 pb-px pr-px pl-0 gap-[8px] mix-blend-normal">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 mix-blend-normal"
              loading="eager"
              alt=""
              src="/icon-12.svg"
            />
            <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
              <div className="relative leading-[21px]">
                How are the number of Blocks counted?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center mix-blend-normal max-w-full">
        <div className="flex-1 rounded-lg bg-gray-1000 box-border flex flex-row items-center justify-start p-[13px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
          <div className="flex flex-row items-center justify-start pt-0 pb-px pr-[5px] pl-0 box-border gap-[8px] mix-blend-normal max-w-full">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 mix-blend-normal"
              loading="eager"
              alt=""
              src="/icon-12.svg"
            />
            <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
              <div className="relative leading-[21px]">
                Is there any free trial available for the Team Plan?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSpaceY;
