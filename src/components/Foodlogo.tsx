import Image from "next/image";

export const FoodLogo = () => {
  return (
    <div className="flex">
      <Image
        src="/redLogo.png"
        alt="loading..."
        width={1000}
        height={1000}
        className="w-[46px] h-[37px]"
      />
      <div>
        <h4 className="text-[20px] font-semibold">
          <span className="text-white">Nom</span>
          <span className="text-[#EF4444]">Nom</span>
        </h4>
        <p className="font-normal">Swift delivery</p>
      </div>
    </div>
  );
};
