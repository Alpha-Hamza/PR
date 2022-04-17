/* eslint-disable @next/next/no-img-element */
import Header from "./Header";

export default function TopSection() {
  return (
    <div className="mx-auto container flex">
      <div className="w-[50%]  ">
        <img src="./images/Logo.svg" alt=" " className="mt-[44px] " />
        <div className="w-[515px] mt-[145px]">
          <h1 className="text-[128px] font-black text-[#1A202C] leading-[142.08px] tracking-[-3%] ">
            Build. Review. Ship.
          </h1>
          <p className="text-[28px] font-normal mt-[82px]  text-[#1A202C] leading-[40px] tracking-[-1%]">
            The next big thing starts here. Get Prodify and be the first to
            market with an integrated product that you love
          </p>
          <button className="w-full h-[72px] bg-[#E55278] text-[28px] font-bold text-white rounded-[6px] mt-[43px]">
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
