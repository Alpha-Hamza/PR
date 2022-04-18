/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className=" ">
      <div className="absolute  2xl:w-[50%] xl:w-[60%] lg:w-[70%] h-[1050px]    ">
        <img src="./Images/BG1.png" alt=" " className="w-full h-[1050px] " />
        <img
          src="./Images/desktop.svg"
          alt=" "
          className=" absolute top-[20%]  2xl:-ml-40 xl:-ml-20  "
        />

        <div className="flex  absolute top-0 mt-[69px] px-[90px] space-x-[22px]    ">
          <button className="text-[18px] font-bold text-[#FFFFFF] focus:border-b-2">Home</button>
          <button className="text-[18px] font-bold text-[#FFFFFF] focus:border-b-2 ">
            About Us
          </button>
          <button className="text-[18px] font-bold text-[#FFFFFF] focus:border-b-2">
            Pricing
          </button>
          <button className="text-[18px] font-bold text-[#FFFFFF] focus:border-b-2">
            Resources
          </button>
          <div>
            <button className=" ml-[15px] relative  cursor-pointer bg-[#FFFFFF4D]  hover:bg-white  hover:bg-opacity-[20%] w-[133px] h-[42px] rounded-[8px]   leading-[20px] font-bold text-[#FFFFFF] text-[18px] ">
              Sign in
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
