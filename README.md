# 4bros — Hafizabad

Responsive restaurant website built with Next.js App Router, React, TypeScript, and Tailwind CSS. The supplied menu image is preserved unchanged and reused for the original logo and photography. All 34 menu entries and nine sauce names are transcribed into accessible HTML.

## Development

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

The build generates a static website in `out/`. Serve that folder with a static hosting provider; `next start` does not serve static exports. The Sites identity is saved in `.openai/hosting.json`.

## Editing

- `lib/menu.ts`: all menu names and PKR prices. Petty Burger retains the source's 280–320 range without invented variants.
- `lib/business.ts`: phones, city, and canonical site URL.
- `lib/seo.ts`: Restaurant, Menu, MenuSection, MenuItem, Offer and WebSite structured data, generated from the same menu data used on the page.
- `app/globals.css`: brand palette and responsive layout.
- `public/images/menu-original.jpeg`: original menu and logo source.

## Local search launch

Known location: Hafizabad, Pakistan. Exact street address, map pin, hours, business profile URL, and delivery coverage have not been provided. The site does not invent these facts. Add verified details to both visible content and Restaurant schema when supplied.

The site includes crawlable menu text, canonical and social metadata, sitemap, robots directives, structured menu prices, accessible navigation, local fonts, reduced-motion support, and direct call/WhatsApp links. There are no fabricated reviews or ranking claims.

Sites starts owner-private. Search engines cannot index an owner-private site. Public access is required before SEO can take effect. When a public domain is selected, set `NEXT_PUBLIC_SITE_URL` before the build, verify its canonical and sitemap URLs, and publish there. Claim/complete the restaurant's Google Business Profile with consistent business name, address, phone, hours and this website; verify the public domain in Google Search Console and submit its sitemap.

No website can guarantee first place in Google or AI answers. SEO helps make accurate information accessible. Useful references:

- [Google: Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Next.js: Static exports](https://nextjs.org/docs/app/guides/static-exports)

WhatsApp buttons open a prefilled draft for the customer to send; the website does not submit an order or process a payment.
