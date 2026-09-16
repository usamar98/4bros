# 4bros — Hafizabad

Responsive restaurant website built with Next.js App Router, React, TypeScript, and Tailwind CSS. The supplied menu image is preserved unchanged and reused for the original logo and photography. All 34 menu entries and nine sauce names are transcribed into accessible HTML.

## Development

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

The build generates a static website in `out/`. The public website is [4bros](https://www.4bros.website/), hosted on Vercel and deployed from the GitHub `main` branch. `next start` does not serve static exports.

## Editing

- `lib/menu.ts`: all menu names and PKR prices. Petty Burger retains the source's 280–320 range without invented variants.
- `lib/business.ts`: phones, city, and canonical site URL.
- `lib/seo.ts`: linked Restaurant, Menu, MenuSection, MenuItem, Offer, WebSite and WebPage structured data, generated from the same menu data used on the page.
- `app/globals.css`: brand palette and responsive layout.
- `public/images/menu-original.jpeg`: original menu and logo source.

## Local search launch

Known location: Hafizabad, Pakistan. Exact street address, map pin, hours, business profile URL, and delivery coverage have not been provided. The site does not invent these facts. Add verified details to both visible content and Restaurant schema when supplied.

The site includes crawlable menu text, canonical and social metadata, sitemap, robots directives, structured menu prices, accessible navigation, local fonts, reduced-motion support, and direct call/WhatsApp links. There are no fabricated reviews or ranking claims.

The permanent canonical URL is `https://www.4bros.website`, set in `lib/business.ts`. The sitemap, robots sitemap reference, structured data and social URL all use this value. `NEXT_PUBLIC_SITE_URL` is no longer read, so an old deployment variable cannot override the public domain.

The owner reports that Google Search Console verification is complete. Use the verified **Domain property** `4bros.website` or **URL-prefix property** `https://www.4bros.website/` to submit `https://www.4bros.website/sitemap.xml`. The owner-supplied verification token remains configured in `lib/business.ts`; `GOOGLE_SITE_VERIFICATION` can override it. Keep the existing verification configuration.

`vercel.json` permanently redirects the former `4bros-alpha.vercel.app` address to the same path on the custom domain. This preserves the existing website and original-menu QR destinations. The apex domain already redirects to `www` through Vercel's domain configuration.

Follow the [complete Google Search Console and local search setup guide](docs/GOOGLE-SEARCH-CONSOLE.md) for exact values and steps. See the [SEO and GEO implementation notes](docs/SEO-GEO-STATUS.md) for completed work and remaining business details.

After building, run `node scripts/verify-build.mjs` to verify prices, anchors, schema, canonical, sitemap, robots and verification metadata in the exported HTML.

No website can guarantee first place in Google or AI answers. SEO helps make accurate information accessible. Useful references:

- [Google: Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Next.js: Static exports](https://nextjs.org/docs/app/guides/static-exports)

WhatsApp buttons open a prefilled draft for the customer to send; the website does not submit an order or process a payment.
