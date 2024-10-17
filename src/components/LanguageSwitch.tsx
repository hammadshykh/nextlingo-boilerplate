"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { locales } from "@/i18n/config";

export default function LanguageSwitcher() {
 const t = useTranslations("LanguageSwitcher");
 const pathname = usePathname();
 const router = useRouter();

 type Locales = "en" | "fr" | "es";

 const switchLanguage = (locale: Locales) => {
  router.replace(pathname, { locale });
 };

 return (
  <Select onValueChange={switchLanguage}>
   <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={t("label")} />
   </SelectTrigger>
   <SelectContent>
    {locales.map((locale: string) => (
     <SelectItem key={locale} value={locale}>
      {t(locale)}
     </SelectItem>
    ))}
   </SelectContent>
  </Select>
 );
}
