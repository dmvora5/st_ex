"use client";

import Cookies from "js-cookie";
import { useEffect, useId, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { LOCALE_COOKIE, locales, type AppLocale } from "@/i18n/config";
import styles from "./languageSwitcher.module.css";

/**
 * Sets NEXT_LOCALE cookie and reloads so root layout picks up lang/dir + messages.
 */
export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const setLocale = (next: AppLocale) => {
    if (next === locale || !(locales as readonly string[]).includes(next) || saving) {
      return;
    }
    setSaving(true);
    Cookies.set(LOCALE_COOKIE, next, { expires: 365, path: "/", sameSite: "lax" });
    window.location.reload();
  };

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={styles.footer}
      role="group"
      aria-label={t("switchTo")}
    >
      <button
        type="button"
        className={styles.footerTrigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        disabled={saving}
      >
        <span className={styles.footerLabel}>{t("label")}</span>
        <span className={styles.footerValue}>{t(locale)}</span>
        <span
          className={`${styles.footerCaret}${open ? ` ${styles.footerCaretOpen}` : ""}`}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <div id={listId} className={styles.footerList} role="listbox">
          {locales.map((code) => {
            const active = locale === code;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={active}
                className={`${styles.footerOption}${active ? ` ${styles.footerOptionActive}` : ""}`}
                disabled={saving}
                onClick={() => {
                  setOpen(false);
                  setLocale(code);
                }}
              >
                {t(code)}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
