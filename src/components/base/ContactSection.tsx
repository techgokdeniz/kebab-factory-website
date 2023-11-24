import React from "react";
import MaxWidthWrapper from "../utils/MaxWidthWrapper";
import ContactForm from "./ContactForm";
import Map from "./GoogleMaps";
import TitleGenerator from "../utils/TitleGenerator";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div
      id="contacts"
      className="bg-theme-light-gray min-h-[800px] h-full grid grid-cols-1 lg:grid-cols-2"
    >
      <MaxWidthWrapper className="lg:px-24 my-20 lg:my-40">
        <div className="flex flex-col gap-4 ">
          <TitleGenerator
            variant="red"
            className="text-5xl text-theme-red font-bold"
          >
            İletişime Geçin
          </TitleGenerator>
          <p className="text-4xl font-bold">
            Sorulanız var veya ortaklık fırsatlarını mı araştırıyorsunuz? Formu
            doldurun sizi arayalım!
          </p>
        </div>
        <ContactForm />
      </MaxWidthWrapper>
      <Map />
    </div>
  );
};

export default ContactSection;
