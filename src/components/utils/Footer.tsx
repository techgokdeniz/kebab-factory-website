import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { ContactInfo } from "@/lib/constants";
import { Phone, Mail } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col relative">
      <div className="hidden  w-[400px] h-[400px] bg-theme-red absolute bottom-0 right-24 lg:flex items-center justify-center">
        <Image
          width={300}
          height={300}
          src="/assets/footer-logo.svg"
          alt="footer-image"
        />
      </div>
      <div className="min-h-[285px] bg-theme-dark grid grid-cols-1 lg:grid-cols-2">
        <MaxWidthWrapper className="lg:px-24 py-16">
          <div className="flex flex-col gap-6">
            <p className="text-2xl text-white">{ContactInfo.adress}</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-theme-red rounded-md flex items-center justify-center ">
                <Phone color="white" />
              </div>
              <a
                href={`tel:${ContactInfo.tel}`}
                className="text-2xl text-white "
              >
                {ContactInfo.tel}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-theme-red rounded-md flex items-center justify-center ">
                <Mail color="white" />
              </div>
              <a
                href={`mailto:${ContactInfo.mail}`}
                className="text-2xl text-white "
              >
                {ContactInfo.mail}
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-theme-red h-8"></div>
    </footer>
  );
};

export default Footer;
