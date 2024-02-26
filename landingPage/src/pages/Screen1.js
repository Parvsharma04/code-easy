import Group from "../components/Group";
import Changelog from "../components/Changelog";
import FrameComponent1 from "../components/FrameComponent1";
import DivGrid1 from "../components/DivGrid1";
import DivGrid from "../components/DivGrid";
import FooterBase from "../components/FooterBase";
import StartForFreeGrow from "../components/StartForFreeGrow";
import TextGroupFAQButtons from "../components/TextGroupFAQButtons";
import ListSpaceY1 from "../components/ListSpaceY1";
import ListSpaceY from "../components/ListSpaceY";
import DivOverflowHidden from "../components/DivOverflowHidden";

const Screen1 = () => {
  return (
    <div className="w-full relative bg-gray-1000 flex flex-col items-center justify-start pt-0 px-0 pb-px box-border gap-[72px] mix-blend-normal tracking-[normal] text-left text-13xl-4 text-whitesmoke font-inter mq450:gap-[72px] mq750:gap-[72px]">
      <Group />
      <Changelog />
      <FrameComponent1 />
      <section className="w-[1036px] flex flex-col items-center justify-start pt-0 px-5 pb-[88px] box-border gap-[56px] max-w-full shrink-0 text-left text-13xl-4 text-whitesmoke font-inter mq750:gap-[56px] mq750:pb-[37px] mq750:box-border mq1050:pb-[57px] mq1050:box-border">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full shrink-0">
          <div className="flex flex-col items-center justify-start gap-[16px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full">
              <b className="relative leading-[38.4px] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                Deliver your content via GraphQL
              </b>
            </div>
            <div className="relative text-mid-9 leading-[27px] text-gray-200">
              Query your repository with our typesafe SDK, or with any GraphQL
              Client of your choosing.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[28px] max-w-full shrink-0 text-base-6 text-gray-200">
          <img
            className="self-stretch h-[581.8px] relative rounded-2xl max-w-full overflow-hidden shrink-0 object-cover mix-blend-normal"
            loading="eager"
            alt=""
            src="/image-mt8-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[15px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[6px] max-w-full mq750:flex-wrap">
              <img
                className="h-5 w-5 relative mix-blend-normal"
                loading="eager"
                alt=""
                src="/div.svg"
              />
              <div className="relative leading-[22.4px]">{`Get started quickly with `}</div>
              <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 box-border [row-gap:20px] max-w-full mq450:flex-wrap">
                <div className="h-[19px] rounded flex flex-row items-end justify-end py-0 px-0 box-border mix-blend-normal">
                  <div className="relative [text-decoration:underline] leading-[22.4px]">
                    the basehub SDK
                  </div>
                </div>
                <div className="relative leading-[22.4px] z-[1] ml-[-1px] mq450:ml-0">
                  . Type-safe and lightweight.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-5 w-5 relative mix-blend-normal"
                  loading="eager"
                  alt=""
                  src="/div.svg"
                />
                <div className="relative leading-[22.4px]">
                  Query a performant GraphQL API, with an easy-to-understand API
                  design.
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px] max-w-full mq450:flex-wrap">
                <img
                  className="h-5 w-5 relative mix-blend-normal"
                  loading="eager"
                  alt=""
                  src="/div.svg"
                />
                <div className="relative leading-[22.4px]">{`Easy to integrate with Next.js. Check out `}</div>
                <div className="flex flex-row items-start justify-start">
                  <div className="h-[19px] rounded flex flex-row items-end justify-end pt-0 px-0 pb-0 box-border mix-blend-normal">
                    <div className="relative [text-decoration:underline] leading-[22.4px]">
                      our docs
                    </div>
                  </div>
                  <div className="relative leading-[22.4px] z-[1] ml-[-3px]">
                    !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1276px] flex flex-col items-center justify-start pt-0 px-5 pb-[88px] box-border gap-[56px] max-w-full shrink-0 text-left text-13xl-4 text-whitesmoke font-inter lg:pb-[57px] lg:box-border mq750:gap-[56px] mq750:pb-[37px] mq750:box-border">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full shrink-0">
          <div className="flex flex-col items-center justify-start gap-[15px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border max-w-full">
              <b className="relative leading-[38.4px] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                Features that make you work better
              </b>
            </div>
            <div className="relative text-mid-9 leading-[27px] text-gray-200">
              Query your repository with our typesafe SDK, or with any GraphQL
              Client of your choosing.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full shrink-0 text-5xl-2 text-black">
          <DivGrid1 />
          <DivGrid />
          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-end justify-between py-6 pr-[26px] pl-[25px] relative mix-blend-normal gap-[20px] border-[1px] border-solid border-darkorange mq450:flex-wrap">
            <img
              className="h-[82px] w-[1234px] absolute my-0 mx-[!important] top-[calc(50%_-_41px)] left-[calc(50%_-_617px)] overflow-hidden shrink-0 object-cover mix-blend-normal"
              loading="eager"
              alt=""
              src="/image-absolute@2x.png"
            />
            <b className="relative leading-[36px] z-[1] mq450:text-lgi mq450:leading-[29px]">
              Try BaseHub Today
            </b>
            <button className="cursor-pointer pt-2 pb-[9px] pr-[7px] pl-3 bg-gray-600 rounded-77xl flex flex-row items-center justify-center mix-blend-normal whitespace-nowrap z-[1] border-[1px] border-solid border-gray-400 hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
              <div className="relative text-sm-9 leading-[16px] font-medium font-inter text-lightgray text-left">
                Get Started
              </div>
            </button>
          </div>
        </div>
      </section>
      <FooterBase />
      <StartForFreeGrow />
      <TextGroupFAQButtons />
      <div className="w-[832px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[48px] max-w-full shrink-0 mq450:gap-[48px]">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full">
          <div className="flex flex-col items-center justify-start gap-[15px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
              <b className="relative leading-[38.4px] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                Pricing
              </b>
            </div>
            <div className="relative text-mid-9 leading-[24.48px] text-gray-200">
              <span>{`Get started with a free Personal Account, or a Team with `}</span>
              <span className="text-gray-100">unlimited members.</span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full text-sm-7">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
            <div className="flex-[0.8906] rounded-lg bg-gray-1000 box-border flex flex-col items-center justify-start p-5 gap-[25px] mix-blend-normal min-w-[250px] max-w-full border-[1px] border-solid border-gray-400 mq750:flex-1">
              <div className="relative leading-[21px]">For Personal Use</div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full text-13xl-4">
                <b className="relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                  Free
                </b>
                <div className="self-stretch flex flex-col items-center justify-start gap-[12px] max-w-full text-sm-7">
                  <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                    <div className="self-stretch flex-1 relative box-border overflow-hidden mix-blend-normal max-w-full border-t-[1px] border-solid border-gray-400" />
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
                    <ListSpaceY1
                      image="/image.svg"
                      personalWorkspace="Personal Workspace"
                    />
                    <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 mix-blend-normal border-t-[1px] border-solid border-gray-400" />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mix-blend-normal">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px gap-[2px] mix-blend-normal mq450:flex-wrap">
                        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                          <div className="relative leading-[21px]">
                            375 Blocks,
                          </div>
                        </div>
                        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border text-gray-200">
                          <div className="relative leading-[21px]">
                            then $2.5 per 125
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px gap-[2px] mix-blend-normal mq450:flex-wrap">
                        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                          <div className="relative leading-[21px]">
                            75K API Requests,
                          </div>
                        </div>
                        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border text-gray-200">
                          <div className="relative leading-[21px]">
                            then $2.5 per 25K
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px mix-blend-normal [row-gap:20px] mq450:flex-wrap">
                        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                          <div className="relative leading-[21px]">
                            1M CDN Requests,
                          </div>
                        </div>
                        <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border text-gray-200">
                          <div className="relative leading-[21px]">
                            then $5 per 1M
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-77xl bg-gray-600 flex flex-row items-center justify-center pt-2 pb-[9px] pr-[9px] pl-3 mix-blend-normal whitespace-nowrap text-sm-9 text-lightgray border-[1px] border-solid border-gray-400">
                      <div className="relative leading-[16px] font-medium">
                        Get Started For Free
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 text-smi-9 text-gray-200">
                    <div className="relative leading-[19.5px]">
                      No credit card required
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-1100 shadow-[0px_0px_50px_rgba(255,_108,_2,_0.1)] overflow-hidden flex flex-row items-center justify-center mix-blend-normal min-w-[250px] max-w-full mq750:flex-1">
              <div className="flex-1 rounded-lg bg-gray-900 box-border flex flex-col items-center justify-start p-5 gap-[25px] mix-blend-normal max-w-full border-[1px] border-solid border-gray-400">
                <div className="relative leading-[21px]">For Teams</div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full text-13xl-4">
                  <div className="flex flex-row items-end justify-start gap-[4px]">
                    <b className="relative leading-[48px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">{`$29 `}</b>
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 text-sm-7 text-gray-200">
                      <div className="relative leading-[21px]">/ month</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[12px] max-w-full text-sm-7">
                    <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                      <div className="self-stretch flex-1 relative box-border overflow-hidden mix-blend-normal max-w-full border-t-[1px] border-solid border-gray-400" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
                      <ListSpaceY1
                        image="/image-3.svg"
                        personalWorkspace="Unlimited Members"
                        propColor="#ff8b35"
                      />
                      <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 mix-blend-normal border-t-[1px] border-solid border-gray-400" />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mix-blend-normal">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px gap-[4px] mix-blend-normal mq450:flex-wrap">
                          <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                            <div className="relative leading-[21px]">
                              500 Blocks,
                            </div>
                          </div>
                          <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border text-gray-200">
                            <div className="relative leading-[21px]">
                              then $2.5 per 125
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px gap-[2px] mix-blend-normal mq450:flex-wrap">
                          <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                            <div className="relative leading-[21px]">
                              100K API Requests,
                            </div>
                          </div>
                          <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border text-gray-200">
                            <div className="relative leading-[21px]">
                              then $2.5 per 25K
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px gap-[1px] mix-blend-normal mq450:flex-wrap">
                          <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                            <div className="relative leading-[21px]">
                              2M CDN Requests,
                            </div>
                          </div>
                          <div className="h-5 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border text-gray-200">
                            <div className="relative leading-[21px]">
                              then $5 per 1M
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] pt-2 pb-[9px] pr-2 pl-3 bg-orangered-100 rounded-77xl flex flex-row items-center justify-center mix-blend-normal whitespace-nowrap hover:bg-orangered-200">
                        <div className="relative text-sm-9 leading-[16px] font-medium font-inter text-black text-left">
                          Create a Team
                        </div>
                      </button>
                    </div>
                    <div className="relative text-smi-9 leading-[19.5px] text-gray-200">
                      Payments secured by Stripe
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[483.5px] w-96 relative rounded-lg box-border hidden opacity-[0] mix-blend-normal max-w-full z-[2] border-[1px] border-solid border-orangered-100">
                <div className="absolute top-[442.8px] left-[107.7px] text-smi-9 leading-[19.5px] text-gray-200">
                  Payments secured by Stripe
                </div>
                <div className="absolute top-[398px] left-[132.2px] rounded-77xl bg-orangered-100 w-[119.6px] h-[33px] mix-blend-normal whitespace-nowrap text-sm-9 text-black">
                  <div className="absolute top-[8.5px] left-[12px] leading-[16px] font-medium">
                    Create a Team
                  </div>
                </div>
                <div className="absolute top-[291px] left-[21px] w-[342px] h-[87px] flex flex-col items-start justify-start pt-0 px-0 pb-[7190.234375px] box-border gap-[12px] mix-blend-normal">
                  <div className="self-stretch h-[21px] relative mix-blend-normal">
                    <div className="absolute top-[-0.5px] left-[0px] leading-[21px]">
                      500 Blocks,
                    </div>
                    <div className="absolute top-[-0.5px] left-[80.9px] leading-[21px] text-gray-200">
                      then $2.5 per 125
                    </div>
                  </div>
                  <div className="self-stretch h-[21px] relative mix-blend-normal">
                    <div className="absolute top-[-0.5px] left-[0px] leading-[21px]">
                      100K API Requests,
                    </div>
                    <div className="absolute top-[-0.5px] left-[128.8px] leading-[21px] text-gray-200">
                      then $2.5 per 25K
                    </div>
                  </div>
                  <div className="self-stretch h-[21px] relative mix-blend-normal">
                    <div className="absolute top-[-0.5px] left-[0px] leading-[21px]">
                      2M CDN Requests,
                    </div>
                    <div className="absolute top-[-0.5px] left-[124.7px] leading-[21px] text-gray-200">
                      then $5 per 1M
                    </div>
                  </div>
                </div>
                <div className="absolute top-[270px] left-[21px] box-border w-[342px] h-px overflow-hidden mix-blend-normal border-t-[1px] border-solid border-gray-400" />
                <div className="absolute top-[155px] left-[21px] w-[342px] h-[95px] flex flex-col items-start justify-start pt-0 px-0 pb-[7054.234375px] box-border gap-[16px] mix-blend-normal">
                  <div className="self-stretch h-[21px] relative mix-blend-normal text-darkorange">
                    <div className="absolute top-[-0.5px] left-[24px] leading-[21px]">
                      Unlimited Members
                    </div>
                    <img
                      className="absolute top-[2px] left-[0px] w-4 h-[17px] overflow-hidden mix-blend-normal"
                      alt=""
                    />
                  </div>
                  <div className="self-stretch h-[21px] relative mix-blend-normal">
                    <div className="absolute top-[-0.5px] left-[24px] leading-[21px]">
                      Discord Support
                    </div>
                    <input
                      className="m-0 absolute top-[2px] left-[0px] w-4 h-[17px] overflow-hidden mix-blend-normal"
                      type="checkbox"
                    />
                  </div>
                  <div className="self-stretch h-[21px] relative mix-blend-normal">
                    <div className="absolute top-[-0.5px] left-[24px] leading-[21px]">
                      AI Assistant
                    </div>
                    <img
                      className="absolute top-[2px] left-[0px] w-4 h-[17px] overflow-hidden mix-blend-normal"
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute top-[134px] left-[21px] box-border w-[342px] h-px overflow-hidden mix-blend-normal border-t-[1px] border-solid border-gray-400" />
                <div className="absolute top-[66px] left-[131.5px] w-[121px] h-[53px] mix-blend-normal text-gray-200">
                  <div className="absolute top-[19.5px] left-[69.1px] leading-[21px]">
                    / month
                  </div>
                  <b className="absolute top-[0px] left-[0px] text-13xl-4 leading-[48px] text-whitesmoke whitespace-nowrap mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">{`$29 `}</b>
                </div>
                <div className="absolute top-[20.5px] left-[158.1px] leading-[21px]">
                  For Teams
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-smi-9 text-gray-200">
            <div className="relative leading-[19.5px]">
              <span>{`Are you an Alpha User? You'll be able to use BaseHub completely for free until `}</span>
              <span className="text-whitesmoke">23 May, 2024</span>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[832px] flex flex-col items-start justify-start pt-0 px-5 pb-[7px] box-border gap-[36px] max-w-full shrink-0 text-5xl-2 mq450:gap-[36px]">
        <b className="relative leading-[31.2px] inline-block max-w-full mq450:text-lgi mq450:leading-[25px]">
          Frequently Asked Questions
        </b>
        <ListSpaceY />
      </div>
      <DivOverflowHidden />
    </div>
  );
};

export default Screen1;
