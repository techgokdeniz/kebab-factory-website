import Image from "next/image";
import { Glory } from "next/font/google";
import HomeLayout from "@/layout/HomeLayout";
import LandingImage from "@/components/base/LandingImage";
import MeetToFactory from "@/components/base/MeetToFactory";
import ProductsLanding from "@/components/base/ProductsLanding";
import FaqSection from "@/components/base/FaqSection";
import ContactSection from "@/components/base/ContactSection";

const glory = Glory({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomeLayout className={glory.className}>
      <LandingImage />
      <MeetToFactory />
      <ProductsLanding />
      <FaqSection />
      <ContactSection />
    </HomeLayout>
  );
}
