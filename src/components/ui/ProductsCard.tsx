import ChickenIco from "@/images/ChickenIcon";
import React from "react";

const ProductsCard = ({ icon, desc }: { icon: any; desc: string }) => {
  return (
    <div className="rounded-2xl bg-theme-light-gray min-h-[180px] relative flex items-center justify-center">
      <div className="w-16 h-16 bg-theme-red rounded-full absolute top-[-30px] flex items-center justify-center">
        {icon}
      </div>
      <p className="font-bold text-3xl md:text-4xl lg:text-3xl xl:text-5xl ">
        {desc}
      </p>
    </div>
  );
};

export default ProductsCard;
