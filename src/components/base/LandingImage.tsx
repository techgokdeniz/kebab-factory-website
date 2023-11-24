import React from "react";
import MaxWidthWrapper from "../utils/MaxWidthWrapper";
import { Button } from "../ui/Button";
import Link from "next/link";

type Props = {};

const LandingImage = (props: Props) => {
  return (
    <div className="w-full min-h-[750px]  text-white bg-red-200 h-full bg-[url('/assets/main-image.webp')] bg-cover bg-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-black min-h-[750px] bg-opacity-60">
          <MaxWidthWrapper className="h-full flex flex-col gap-10 md:gap-16 justify-center md:px-24">
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl font-bold">
                Her lokmada mükemmelliği yakalayın!
              </h1>
              <p className="font-medium text-3xl">
                Otantik ve lezzetli ürünlerimizi sofralara taşıyoruz!
              </p>
            </div>
            <Link
              className=" bg-theme-red border-2 rouded-lg max-w-xs text-2xl font-medium p-4 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              href={"#contacts"}
            >
              İletişime Geç
            </Link>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
};

export default LandingImage;
