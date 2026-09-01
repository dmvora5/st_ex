import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Eccelso Capital LTD collects, uses, and protects personal data on start.exclusio.io.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title={privacyPolicy.title} sections={privacyPolicy.sections} />;
}
