import React from "react";
import MaxWidthWrapper from "../utils/MaxWidthWrapper";
import { ProducstList } from "@/lib/constants";
import ImageGallery from "../ui/ImageGallery";
import TitleGenerator from "../utils/TitleGenerator";

type Props = {};

const ProductsLanding = (props: Props) => {
  return (
    <div
      id="products"
      className="w-full h-full flex items-center justify-center py-12 lg:py-0  flex-col text-white bg-theme-red min-h-[720px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-0 gap-8">
        <MaxWidthWrapper className="flex flex-col gap-8 md:px-24 ">
          <TitleGenerator
            variant="white"
            className="flex flex-col justify-center items-start font-bold text-6xl"
          >
            En iyi seçeneklerimizi keşfedin
          </TitleGenerator>
          <p className="font-medium text-2xl">
            İnsanların arkadaşlarıyla paylaşmak isteyeceği hikayeler yaratarak
            distribütörlerimizin istek ve ihtiyaçlarını karşılamayı seviyoruz.
            Motivasyonu yüksek bir ekiple harika bir kebap deneyimi sunmak için
            güçlü yönlerimize odaklanmaya devam ediyoruz. Müşterilerimize yüksek
            kalite ve mükemmel hizmet sunmayı amaçlıyoruz.
          </p>
          <div className="flex flex-wrap max-w-xl gap-2">
            {ProducstList.map((products, index) => (
              <span
                key={index}
                className="p-2 rounded-lg bg-theme-gray text-2xl"
              >
                {products}
              </span>
            ))}
          </div>
        </MaxWidthWrapper>
        <div className="relative">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default ProductsLanding;
