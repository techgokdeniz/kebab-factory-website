import React from "react";
import MaxWidthWrapper from "../utils/MaxWidthWrapper";
import { FaqList } from "@/lib/constants";
import ProductsCard from "../ui/ProductsCard";
import TitleGenerator from "../utils/TitleGenerator";

type Props = {};

const FaqSection = (props: Props) => {
  return (
    <div className="lg:pt-60 lg:px-24 px-4 py-20">
      <div className="flex flex-col gap-6 lg:pb-40 pb-16">
        <TitleGenerator
          variant="red"
          className="font-bold text-5xl text-theme-red"
        >
          Kalite Önceliğimizdir
        </TitleGenerator>
        <p className="font-bold text-4xl text-theme-dark lg:max-w-6xl ">
          Her ürünün tazeliğin, özgünlüğün ve üstün lezzetin kanıtı olmasını
          sağlayarak en yüksek standartlara bağlı kalıyoruz.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {FaqList.map((item, index) => (
          <ProductsCard
            key={index}
            icon={<item.icon color="white" />}
            desc={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
