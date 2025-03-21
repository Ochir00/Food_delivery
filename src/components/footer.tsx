import { FoodLogo } from "./Foodlogo";

export const Footer = () => {
  return (
    <div className="w-[100vw] h-[755px] bg-[#18181B] flex flex-wrap justify-between items-center">
      <div className="h-[92px] w-[100vw] bg-[#EF4444] mt-[60px]"></div>
      <div className="w-[1264px] h-[228px] flex justify-between m-auto">
        <FoodLogo />
        <div className="flex gap-5">
          <div className="w-[122px]">
            <p>NOMNOM</p>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div className="flex-wrap w-[122px]">
            <p>MENU</p>
          </div>
          <div className="w-[122px]">
            <p>FOLLOW US</p>

          </div>
        </div>
      </div>
      <div className="border-t-gray-500 border-t-[1px] w-[1264px] m-auto flex justify-between items-center pt-7 text-gray-400">
        <p>Copy right 2024 © Nomnom LLC</p>
        <p>Privacy policy</p>
        <p>Terms and conditoin</p>
        <p>Cookie policy</p>
      </div>
    </div>
  );
};
