/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className=" mx-auto container">
      <div className="absolute  right-0   ">
        <img src="./images/BG1.svg" alt=" " className="  " />
        <img
          src="./images/desktop.svg"
          alt=" "
          className=" absolute top-0 my-[30%] -left-[16.5%] "
        />

        <div className="flex  absolute top-0 mt-[69px] px-[90px] space-x-[22px]    ">
          <button className="text-[18px] font-bold text-[#FFFFFF]">Home</button>
          <button className="text-[18px] font-bold text-[#FFFFFF] ">
            About Us
          </button>
          <button className="text-[18px] font-bold text-[#FFFFFF]">
            Pricing
          </button>
          <button className="text-[18px] font-bold text-[#FFFFFF]">
            Resources
          </button>
          <div>
            <button className=" ml-[15px] relative  cursor-pointer bg-[#FFFFFF4D] w-[133px] h-[42px] rounded-[8px]   leading-[20px] font-bold text-[#FFFFFF] text-[18px] ">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
