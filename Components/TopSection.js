/* eslint-disable @next/next/no-img-element */
import Header from "./Header";

export default function TopSection() {
  return (
    <div className=" mx-auto container flex 2xl:w-full  w-[90%] ">
      <div className="w-[50%]    ">
        <img src="./Images/Logo.svg" alt=" " className="mt-[44px] " />
        <div className=" 2xl:w-[515px] xl:w-[500px] lg:w-[90%] md:w-[90%]   mt-[145px]">
          <h1 className="2xl:text-[128px] xl:text-[100px] lg:text-[100px] font-black text-[#1A202C] xl:leading-[142.08px] lg:leading-[122.08px] xl:tracking-[-3%]  ">
            Build. Review. Ship.
          </h1>
          <p className="text-[28px] font-normal mt-[82px]  text-[#1A202C] leading-[40px] tracking-[-1%]">
            The next big thing starts here. Get Prodify and be the first to
            market with an integrated product that you love
          </p>
          <button className="w-full h-[72px] bg-[#E55278] hover:bg-[#D53F8C] text-[28px] font-bold text-white rounded-[6px] mt-[43px]">
            Let’s Build
          </button>
        </div>
      </div>
      <div className="w-[50%]   ">
        <Header />
      </div>
    </div>
  );
}
