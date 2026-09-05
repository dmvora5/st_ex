"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { contactChannels } from "@/content/site";
import styles from "./ContactUsModal.module.css";

type ContactUsModalProps = {
  open: boolean;
  onClose: () => void;
};

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect
        x="5.25"
        y="5.25"
        width="8.5"
        height="8.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4.75 10.75H3.75C2.92 10.75 2.25 10.08 2.25 9.25V3.75C2.25 2.92 2.92 2.25 3.75 2.25H9.25C10.08 2.25 10.75 2.92 10.75 3.75V4.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactUsModal({ open, onClose }: ContactUsModalProps) {
  const t = useTranslations("contactModal");
  const titleId = useId();
  const scrollYRef = useRef(0);
  const [status, setStatus] = useState<{ message: string; error: boolean } | null>(
    null,
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    scrollYRef.current = window.scrollY || document.documentElement.scrollTop || 0;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.scrollTo(0, scrollYRef.current);
      setStatus(null);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const copyValue = async (value: string, label: string) => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(value);
      setStatus({ message: t("copied", { label }), error: false });
    } catch {
      setStatus({ message: t("copyFailed"), error: true });
    }
  };

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className={styles.shellBody}>
          <div className={styles.topGradient} aria-hidden="true" />
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label={t("close")}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path
                d="M1 1L10 10M10 1L1 10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h2 id={titleId} className={styles.title}>
            {t("title")}
          </h2>
          <p className={styles.intro}>{t("intro")}</p>
          <p className={styles.introSecondary}>{t("introSecondary")}</p>

          <div className={styles.contactCard}>
            <div className={styles.contactRow}>
              <div
                className={`${styles.rowIcon} ${styles.rowIconBlue}`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 7.5L12 12.75L20 7.5M5.5 18H18.5C19.33 18 20 17.33 20 16.5V7.5C20 6.67 19.33 6 18.5 6H5.5C4.67 6 4 6.67 4 7.5V16.5C4 17.33 4.67 18 5.5 18Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.rowContent}>
                <span className={styles.rowLabel}>{t("emailLabel")}</span>
                <a
                  className={styles.rowValue}
                  href={`mailto:${contactChannels.email}`}
                >
                  {contactChannels.email}
                </a>
              </div>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={() => copyValue(contactChannels.email, t("labelEmail"))}
                aria-label={t("copyEmailAria")}
              >
                <CopyIcon />
              </button>
            </div>

            <div className={styles.contactRow}>
              <div
                className={`${styles.rowIcon} ${styles.rowIconPink}`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.5 4.5L3.5 11.5C2.5 11.9 2.5 12.6 3.3 12.9L8.5 14.5L18.5 7.5C18.9 7.2 19.3 7.4 19 7.7L10.5 15.5V19.5L13.2 17.1C13.5 16.9 13.8 16.9 14.1 17.1L19.8 20.5C20.6 21 21.3 20.6 21.5 19.7L23.5 6.2C23.7 5.2 22.8 4.4 21.5 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.rowContent}>
                <span className={styles.rowLabel}>{t("telegramLabel")}</span>
                <a
                  className={styles.rowValue}
                  href={contactChannels.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactChannels.telegramDisplay}
                </a>
              </div>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={() =>
                  copyValue(contactChannels.telegramDisplay, t("labelTelegram"))
                }
                aria-label={t("copyTelegramAria")}
              >
                <CopyIcon />
              </button>
            </div>

            <div className={styles.contactRow}>
              <div
                className={`${styles.rowIcon} ${styles.rowIconBlue}`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.5 4.5H17.5C18.33 4.5 19 5.17 19 6V18C19 18.83 18.33 19.5 17.5 19.5H6.5C5.67 19.5 5 18.83 5 18V6C5 5.17 5.67 4.5 6.5 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 16.5H14.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className={styles.rowContent}>
                <span className={styles.rowLabel}>{t("whatsappLabel")}</span>
                <a
                  className={styles.rowValue}
                  href={contactChannels.phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactChannels.phoneDisplay}
                </a>
              </div>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={() =>
                  copyValue(contactChannels.phoneDisplay, t("labelPhone"))
                }
                aria-label={t("copyPhoneAria")}
              >
                <CopyIcon />
              </button>
            </div>
          </div>

          <p
            className={`${styles.status}${status?.error ? ` ${styles.statusError}` : ""}`}
            aria-live="polite"
          >
            {status?.message ?? ""}
          </p>

          <button type="button" className={styles.primaryBtn} onClick={onClose}>
            {t("close")}
          </button>
        </div>
      </div>
    </div>
  );
}
