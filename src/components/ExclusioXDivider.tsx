/**
 * Exclusio X divider — matches auth landing FAQ / featured-in-press separator.
 */
export function ExclusioXDivider() {
  return (
    <div className="x-divider" aria-hidden="true">
      <span className="x-divider-line" />
      <img
        className="x-divider-mark"
        src="/images/logo-f.svg"
        alt=""
        width={34}
        height={34}
      />
      <span className="x-divider-line" />
    </div>
  );
}
