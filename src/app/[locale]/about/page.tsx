import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
 const t = useTranslations("Index");
 return <div>{t("title")}</div>;
};

export default About;
