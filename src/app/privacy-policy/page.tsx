import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/LegalPage";
import type { LegalSection } from "@/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacyPolicy");
  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("privacyPolicy");
  const sections = t.raw("sections") as LegalSection[];

  return <LegalPage title={t("title")} sections={sections} />;
}
