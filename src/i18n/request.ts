import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import {
  defaultLocale,
  detectLocaleFromAcceptLanguage,
  LOCALE_COOKIE,
  resolveLocale,
} from "./config";

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get(LOCALE_COOKIE)?.value;
  const locale = cookieLocale
    ? resolveLocale(cookieLocale)
    : detectLocaleFromAcceptLanguage((await headers()).get("accept-language")) ||
      defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
