type Props = {
  label: string;
};

export function TagPill({ label }: Props) {
  return (
    <span className="inline-block rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-amber-400/30">
      {label}
    </span>
  );
}
