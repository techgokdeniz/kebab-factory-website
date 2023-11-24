import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../utils/MaxWidthWrapper";

type Props = {};

const ImageGallery = (props: Props) => {
  return (
    <div>
      <div className="lg:grid hidden lg:absolute grid-cols-1 lg:grid-cols-2 gap-4">
        <Image
          style={{
            position: "relative",
            top: "-45%",
          }}
          alt="gallery1"
          src="/assets/gallery1.webp"
          width={398}
          height={481}
        />
        <Image
          alt="gallery1"
          style={{
            position: "relative",
            top: "-25%",
          }}
          src="/assets/gallery2.webp"
          width={398}
          height={481}
        />
        <Image
          style={{
            position: "relative",
            top: "-45%",
          }}
          alt="gallery1"
          src="/assets/gallery3.webp"
          width={398}
          height={481}
        />
        <Image
          alt="gallery1"
          style={{
            position: "relative",
            top: "-25%",
          }}
          src="/assets/gallery4.webp"
          width={398}
          height={481}
        />
      </div>
      <div className="lg:hidden">
        <MaxWidthWrapper className="md:px-24 grid grid-cols-2 gap-4">
          <Image
            alt="gallery1"
            src="/assets/gallery1.webp"
            width={398}
            height={481}
          />
          <Image
            alt="gallery2"
            src="/assets/gallery2.webp"
            width={398}
            height={481}
          />
          <Image
            alt="gallery3"
            src="/assets/gallery3.webp"
            width={398}
            height={481}
          />
          <Image
            alt="gallery4"
            src="/assets/gallery4.webp"
            width={398}
            height={481}
          />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default ImageGallery;
