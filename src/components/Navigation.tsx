"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitch";

export default function Navigation() {
 const t = useTranslations("Navigation");
 const pathname = usePathname();

 const isActive = (path: string) => pathname.startsWith(`/${path}`);

 return (
  <nav className="bg-gray-800 text-white p-4">
   <div className="container mx-auto flex justify-between items-center">
    <div className="space-x-4">
     <Link
      href="/"
      className={`hover:text-gray-300 ${isActive("") ? "font-bold" : ""}`}
     >
      {t("home")}
     </Link>
     <Link
      href="/about"
      className={`hover:text-gray-300 ${isActive("about") ? "font-bold" : ""}`}
     >
      {t("about")}
     </Link>
     <Link
      href="/contact"
      className={`hover:text-gray-300 ${
       isActive("contact") ? "font-bold" : ""
      }`}
     >
      {t("contact")}
     </Link>
    </div>
    <LanguageSwitcher />
   </div>
  </nav>
 );
}
