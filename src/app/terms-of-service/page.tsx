import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsOfService } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Exclusio marketing website operated by Eccelso Capital LTD.",
};

export default function TermsOfServicePage() {
  return <LegalPage title={termsOfService.title} sections={termsOfService.sections} />;
}
