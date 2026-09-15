import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">4BROS / 404</p><h1>WRONG TURN.<br/><span>RIGHT CRAVING.</span></h1><p>This page isn’t on the menu.</p><Link href="/" className="button button-red">Back to the menu →</Link></main>;
}
