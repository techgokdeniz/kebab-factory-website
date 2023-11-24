import React from "react";
import MaxWidthWrapper from "../utils/MaxWidthWrapper";
import ProductsCard from "../ui/ProductsCard";
import { MeetItems } from "@/lib/constants";
import TitleGenerator from "../utils/TitleGenerator";

type Props = {};

const MeetToFactory = (props: Props) => {
  return (
    <MaxWidthWrapper
      id="hakkimizda"
      className="py-10 md:pt-20 w-full h-full flex items-center justify-center flex-col"
    >
      <div className="flex flex-col mb-32 ">
        <div className="flex flex-col gap-6 items-center justify-center text-center mb-32">
          <TitleGenerator
            variant="red"
            className="text-6xl font-bold text-theme-red"
          >
            Kebab Factory ile Tanışın
          </TitleGenerator>
          <p className="text-4x  font-bold text-theme-dark">
            Restoranlara, catering hizmetlerine ve daha fazlasına geniş bir ürün
            yelpazesi sunan kebap üreticisi bir firmayız.
          </p>
          <p className="text-2xl  font-medium text-theme-dark">
            Kebap Factory’de müşteri memnuniyeti, hijyen, sağlık ve güvenlik
            konularında en yüksek standartlara sahip bir şirket olarak
            itibarımıza bağlıyız. Ürünlerimiz uzmanlık ve doğal içeriklerden
            gelen kendine özgü bir tada sahiptir.
          </p>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
          {MeetItems.map((item, index) => (
            <ProductsCard key={index} icon={<item.icon />} desc={item.text} />
          ))}
        </div>
        <i className="text-center font-medium text-3xl text-theme-dark-gray mt-4">
          Ürünü ürettik ve üretmeye devam ediyoruz…
        </i>
      </div>
    </MaxWidthWrapper>
  );
};

export default MeetToFactory;
