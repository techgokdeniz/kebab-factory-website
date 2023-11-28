import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { MenuLinks } from "@/lib/constants";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="w-full h-[100px] flex flex-col z-50 fixed">
        <div className="w-full h-3 bg-theme-red"></div>
        <nav className="flex-1 bg-theme-gray">
          <div className="flex items-center justify-between h-full px-8">
            <div className="w-full h-full max-w-sm max-h-14">
              <Link href="/">
                <Image
                  width={300}
                  height={300}
                  src="/assets/logo.png"
                  alt="kebab-factory-logo"
                />
              </Link>
            </div>
            <Menu
              color="white"
              size={32}
              className="cursor-pointer lg:hidden z-20"
              onClick={onClickHandler}
            />
            <ul className="text-white lg:flex gap-20 hidden">
              {MenuLinks.map((link, index) => (
                <li key={index} className="text-2xl font-bold cursor-pointer">
                  <Link href={link.path}>{link.name.toLocaleUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {isMenuOpen && (
          <nav className="z-10 transition-all duration-300 opacity-90 absolute right-0 w-[300px] min-h-screen h-fu bg-black">
            <ul className="text-white flex flex-col gap-4 mt-40 px-4">
              {MenuLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-2xl transition-all duration-200 cursor-pointer px-2 font-bold hover:bg-white hover:text-black"
                >
                  <Link href={link.path}>{link.name.toLocaleUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
