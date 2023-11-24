import Header from "@/components/utils/Header";
import React from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/utils/Footer";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const HomeLayout = (props: Props) => {
  return (
    <div className={cn("", props.className)}>
      <Header />
      <main className="w-full h-full">{props.children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
