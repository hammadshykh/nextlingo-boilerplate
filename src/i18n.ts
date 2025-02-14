import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./i18n/config";

export default getRequestConfig(async ({ locale }) => ({
 messages: (await import(`./messages/${locale}.json`)).default,
}));

export const i18n = {
 defaultLocale,
 locales,
 localeDetection: false,
};
