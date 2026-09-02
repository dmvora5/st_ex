import { Fragment, type ReactNode } from "react";

const EXCLUSIO_LOGO = "/images/logo.svg";
const EXCLUSIO_ADS_LOGO = "/images/exclusio-ads-logo.svg";

export function InlineExclusioLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={EXCLUSIO_LOGO}
      alt="Exclusio"
      className={`inline-exclusio-logo${className ? ` ${className}` : ""}`}
    />
  );
}

export function InlineExclusioAdsLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={EXCLUSIO_ADS_LOGO}
      alt="Exclusio Ads"
      className={`inline-exclusio-ads-logo${className ? ` ${className}` : ""}`}
    />
  );
}

/** Replace "Exclusio Ads" / "Exclusio" in copy with inline wordmarks (Exclusio frontend style). */
export function renderBrandText(text: string): ReactNode {
  const parts = text.split(/(Exclusio Ads|Exclusio)/g);

  return parts.map((part, index) => {
    if (part === "Exclusio Ads") {
      return <InlineExclusioAdsLogo key={`ads-${index}`} />;
    }
    if (part === "Exclusio") {
      return <InlineExclusioLogo key={`ex-${index}`} />;
    }
    return <Fragment key={`t-${index}`}>{part}</Fragment>;
  });
}
