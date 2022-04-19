/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className=" ">
      <div className="absolute  2xl:w-[50%] xl:w-[45%] lg:w-[46%] md:w-[50%] right-0 h-[1050px]    ">
        <img src="./Images/BG1.png" alt=" " className="w-full h-[1050px] " />
        <img
          src="./Images/desktop.svg"
          alt=" "
          className=" absolute xl:top-[20%] lg:top-[25%]  2xl:-ml-40 lg:-ml-[20%]   "
        />

        <div className=" absolute top-0 mt-[69px] 2xl:px-[90px] xl:px-[8%] lg:pl-[5%] 2xl:space-x-[22px] xl:space-x-[15px] lg:space-x-[10px] lg:flex hidden   ">
          <button className="xl:text-[18px] text-[16px] font-bold text-[#FFFFFF] focus:border-b-2">
            Home
          </button>
          <button className="xl:text-[18px] text-[16px] font-bold text-[#FFFFFF] focus:border-b-2 ">
            About Us
          </button>
          <button className="xl:text-[18px] text-[16px] font-bold text-[#FFFFFF] focus:border-b-2">
            Pricing
          </button>
          <button className="xl:text-[18px] text-[16px] font-bold text-[#FFFFFF] focus:border-b-2">
            Resources
          </button>
          <div>
            <button className=" ml-[15px] relative  cursor-pointer bg-[#FFFFFF4D]  hover:bg-white  hover:bg-opacity-[20%] w-[133px] h-[42px] rounded-[8px]   leading-[20px] font-bold text-[#FFFFFF] xl:text-[18px] text-[16px] ">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
