import { BG } from "@/components/bg";
import { Menu } from "@/components/foodMenu";
import { Footer } from "@/components/footer";
import { FoodHeader } from "@/components/header";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#404040]">
      <FoodHeader />
      <BG /> 
      <Menu />
      <Footer />
    </div>
  );
}
