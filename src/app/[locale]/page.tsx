import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
 params: { locale },
}: {
 params: { locale: string };
}) {
 const t = await getTranslations({ locale, namespace: "Index" });

 return {
  title: t("title"),
  description: t("description"),
 };
}

export default function Home() {
 const t = useTranslations("Index");

 return (
  <div className="text-center">
   <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
   <p className="text-xl">{t("description")}</p>
  </div>
 );
}
