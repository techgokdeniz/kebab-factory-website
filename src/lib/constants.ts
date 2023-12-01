import BeefIcon from "@/images/BeefIcon";
import ChickenIco from "@/images/ChickenIcon";
import StarIcon from "@/images/StarIcon";
import LambIcon from "@/images/LambIcon";

const MenuLinks: { path: string; name: string }[] = [
  {
    path: "?#hakkimizda",
    name: "Hakkımızda",
  },
  {
    path: "?#products",
    name: "Ürünler",
  },
  {
    path: "?#contacts",
    name: "İletişim",
  },
];

const MeetItems = [
  {
    icon: LambIcon,
    text: "+3600 Kg Kuzu",
  },
  {
    icon: BeefIcon,
    text: "+2300 Kg Dana",
  },
];

const ProducstList = [
  "Dana Köfte",
  "Kuzu Köfte",
  "Karışık Köfte",
  "Kasap Köfte",
  "Kaşarlı Kuzu Köfte",
  "İnegöl Köfte",
  "Satır Köfte",
  "Et Döner",
  "Hamburger Köftesi",
];

const ContactInfo = {
  adress:
    "Ovaakça Çeşmebaşı Mahallesi, İstanbul Caddesi No 665/A, Osmangazi/Bursa",
  tel: "+90 224 322 01 23",
  mail: "info@kebabfactory.com.tr",
};

const FaqList = [
  {
    icon: StarIcon,
    text: "En Kaliteli Et Ürünleri",
  },
  {
    icon: StarIcon,
    text: "Gündelik Taze Ürünler",
  },
  {
    icon: StarIcon,
    text: "Hijyenik Üretim Alanı",
  },
];

export { MenuLinks, MeetItems, ProducstList, FaqList, ContactInfo };
