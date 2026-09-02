"use client";

import { useId } from "react";

export type FeatureIconName =
  | "earnings"
  | "scale"
  | "monetize"
  | "protection"
  | "support";

export function FeatureIcon({
  name,
  className = "",
}: {
  name: FeatureIconName;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `${uid}-grad`;
  const stroke = `url(#${gradId})`;
  const fill = `url(#${gradId})`;

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="4"
          y1="4"
          x2="36"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#97c7e2" />
          <stop offset="100%" stopColor="#f4bdd3" />
        </linearGradient>
      </defs>
      {name === "earnings" ? <EarningsPaths stroke={stroke} /> : null}
      {name === "scale" ? <ScalePaths stroke={stroke} /> : null}
      {name === "monetize" ? <MonetizePaths stroke={stroke} fill={fill} /> : null}
      {name === "protection" ? <ProtectionPaths stroke={stroke} /> : null}
      {name === "support" ? <SupportPaths stroke={stroke} fill={fill} /> : null}
    </svg>
  );
}

function EarningsPaths({ stroke }: { stroke: string }) {
  return (
    <>
      <rect x="7" y="12" width="26" height="18" rx="3" stroke={stroke} strokeWidth="2" />
      <path d="M7 17.5h26" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="27" cy="24.5" r="2.2" stroke={stroke} strokeWidth="2" />
      <path
        d="M11 9.5h10.5a2 2 0 0 1 2 2V12"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  );
}

function MonetizePaths({ stroke, fill }: { stroke: string; fill: string }) {
  return (
    <>
      <rect x="8" y="8" width="10" height="10" rx="2" stroke={stroke} strokeWidth="2" />
      <rect x="22" y="8" width="10" height="10" rx="2" stroke={stroke} strokeWidth="2" />
      <rect x="8" y="22" width="10" height="10" rx="2" stroke={stroke} strokeWidth="2" />
      <rect x="22" y="22" width="10" height="10" rx="2" stroke={stroke} strokeWidth="2" />
      <circle cx="13" cy="13" r="1.6" fill={fill} />
      <circle cx="27" cy="13" r="1.6" fill={fill} />
      <circle cx="13" cy="27" r="1.6" fill={fill} />
      <circle cx="27" cy="27" r="1.6" fill={fill} />
    </>
  );
}

function ScalePaths({ stroke }: { stroke: string }) {
  return (
    <>
      <path d="M8 30.5V22" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 30.5V16" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 30.5V11.5" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M32 30.5V8" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M8.5 14.5l7.2-4.2 6.3 2.8 9.2-7.6"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 5.5h5.5v5.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function ProtectionPaths({ stroke }: { stroke: string }) {
  return (
    <>
      <path
        d="M20 5.5L8.5 10.2v8.1c0 7.1 4.7 13.2 11.5 15.2 6.8-2 11.5-8.1 11.5-15.2v-8.1L20 5.5z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="15.5"
        y="17.5"
        width="9"
        height="7.5"
        rx="1.5"
        stroke={stroke}
        strokeWidth="1.8"
      />
      <path
        d="M17.5 17.5v-2a2.5 2.5 0 0 1 5 0v2"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  );
}

function SupportPaths({ stroke, fill }: { stroke: string; fill: string }) {
  return (
    <>
      <path
        d="M10 22.5v-3a10 10 0 0 1 20 0v3"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="7.5" y="21" width="5.5" height="8" rx="2.2" stroke={stroke} strokeWidth="2" />
      <rect x="27" y="21" width="5.5" height="8" rx="2.2" stroke={stroke} strokeWidth="2" />
      <path
        d="M32.5 26.5c0 3.4-2.9 5.5-6.5 5.5h-2.2"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="22.5" cy="32" r="1.4" fill={fill} />
    </>
  );
}
