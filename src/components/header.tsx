import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FoodLogo } from "./Foodlogo";

export const FoodHeader = () => {
  return (
    <div className="w-[100vw] h-[68px] bg-[#18181B] flex justify-center items-center">
      <div className="w-[1240px] h-[50px] flex justify-between items-center">
        <FoodLogo />

        <div className="flex justify-between gap-2">
          <Button className="px-3 py-2 bg-white text-black rounded-full">
            Sign up
          </Button>
          <Button className="px-3 py-2 bg-[#EF4444] text-white rounded-full">
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};
