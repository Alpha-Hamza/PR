/* eslint-disable @next/next/no-img-element */

export default function Second() {
  return (
    <div className="mx-auto container mt-[155px]  ">
      <div className="flex">
        <div className="w-[50%]">
          <img src="./images/SS.svg" alt=" " className="mt-[44px] " />
        </div>
        <div className="w-[50%] mt-20">
          <h1 className="text-[64px] leading-[70.4px] text-[#1A202C] font-black tracking-[-2.5%]">
            Gather data to offer a bespoke solution
          </h1>
          <p className="text-[28px] font-normal mt-[22px]  text-[#1A202C] leading-[40px] tracking-[-1%]">
            Here at Globex we take special care of what your organization needs
            instead of selling you a mass market tool that takes a one size fits
            all approach. I personally review each and every client business and
            oversee the team that tailores a solution
          </p>
          <div className="flex mt-[24px]">
            <img src="./images/ssi.svg" alt=" " className=" " />
            <div className="ml-[12px]">
              <h1 className="text-[28px] font-normal ">Rachel Dawson</h1>
              <p className="text-[18px] ">CEO, Globex Workspaces</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-row-1 grid-flow-col  gap-[32px] h-[192px] mt-[259px]  ">
        {/* <div className="flex space-x-[32px] justify-center mt-[259px]"> */}
        <div className="relative bg-[#F56565] ">
          <h1 className="text-[32px] text-[#1A202C] font-bold leading-[38.4px] w-[50%] ml-5 mt-5 ">
            Download the app
          </h1>
          <img
            src="./images/ssi1.svg"
            alt=" "
            className=" absolute right-5 bottom-0  "
          />
        </div>
        <div className="relative bg-[#F56565]">
          <h1 className="text-[32px] text-[#1A202C] font-bold leading-[38.4px] w-[50%] ml-5 mt-5 ">
            Download the app
          </h1>
          <img
            src="./images/ssi1.svg"
            alt=" "
            className=" absolute right-5 bottom-0  "
          />
        </div>
        <div className="relative bg-[#F56565]">
          <h1 className="text-[32px] text-[#1A202C] font-bold leading-[38.4px] w-[50%] ml-5 mt-5">
            Download the app
          </h1>
          <img
            src="./images/ssi1.svg"
            alt=" "
            className=" absolute right-5 bottom-0  "
          />
        </div>
        <div className="relative bg-[#F56565]">
          <h1 className="text-[32px] text-[#1A202C] font-bold leading-[38.4px] w-[50%] ml-5 mt-5">
            Download the app
          </h1>
          <img
            src="./images/ssi1.svg"
            alt=" "
            className=" absolute right-5 bottom-0  "
          />
        </div>
      </div>
    </div>
  );
}
