export function TitleLine({ className = "" }: { className?: string }) {
  return (
    <div className={`title-line my-5 flex items-center justify-center gap-[15px] ${className}`}>
      <span className="big-line" />
      <span className="small-line" />
      <span className="big-line" />
    </div>
  );
}
