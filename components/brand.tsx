import { useId } from "react";

export function Logo({ className = "" }: { className?: string }) {
  const id = useId();
  return <svg className={`brand-logo ${className}`} viewBox="0 0 182 182" role="img" aria-label="4bros — Real Taste, Real Brothers">
    <defs><clipPath id={id}><circle cx="91" cy="91" r="89" /></clipPath></defs>
    <image href="/images/menu-original.jpeg" x="-26" y="-69" width="1131" height="1600" clipPath={`url(#${id})`} />
  </svg>;
}

export function MenuPhoto({ x, y, width, height, className = "", label }: { x: number; y: number; width: number; height: number; className?: string; label: string }) {
  return <svg className={`menu-photo ${className}`} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
    <image href="/images/menu-original.jpeg" x={-x} y={-y} width="1131" height="1600" />
  </svg>;
}
