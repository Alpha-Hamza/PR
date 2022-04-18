/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <div className="mx-auto container mt-[155px] pb-10  ">
      <img src="./Images/Logo.svg" alt=" " className="mx-auto" />
      <h1 className="text-[24px] font-black text-[#000000] mt-[20px] text-center">
        Build. Review. Ship.
      </h1>
      <div className="space-x-[24px] mt-[40px] flex justify-center">
        <button className="text-[16px] font-normal text-[#1A202C] border-[#1A202C] focus:border-b-2 ">
          Download Now
        </button>
        <button className="text-[16px] font-normal text-[#1A202C] border-[#1A202C] focus:border-b-2 ">
          License
        </button>
      </div>
      <div className="space-x-[24px] mt-[24px] flex justify-center">
        <button className="text-[16px] font-normal text-[#1A202C]  border-[#1A202C] focus:border-b-2 ">
          About
        </button>
        <button className="text-[16px] font-normal text-[#1A202C]  border-[#1A202C] focus:border-b-2">
          Features
        </button>
        <button className="text-[16px] font-normal text-[#1A202C] border-[#1A202C] focus:border-b-2 ">
          Pricing
        </button>
        <button className="text-[16px] font-normal text-[#1A202C] border-[#1A202C] focus:border-b-2 ">
          Careers
        </button>
        <button className="text-[16px] font-normal text-[#1A202C]  border-[#1A202C] focus:border-b-2">
          Help
        </button>
        <button className="text-[16px] font-normal text-[#1A202C] border-[#1A202C] focus:border-b-2 ">
          Privacy Policy
        </button>
      </div>
      <p className="text-[14px] font-normal text-[#1A202C] mt-[22px] text-center ">
        © 2020 Prodify. All rights reserved
      </p>
      <img src="./Images/Divider.svg" alt=" " className="mt-[37px] mx-auto" />
      <div className="mt-[46px] space-x-[17px] flex justify-center">
        <img src="./Images/Footer.svg" alt=" " className="cursor-pointer" />
        <img src="./Images/Footer2.svg" alt=" " className="cursor-pointer" />
      </div>
    </div>
  );
}
