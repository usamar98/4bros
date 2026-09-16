# 4bros: Search Console and sitemap

Updated 15 September 2026 for **https://www.4bros.website/**.

You have confirmed Google Search Console verification is complete. Keep your existing verification records and Vercel environment variable. You do not need to verify again to submit the sitemap.

## Exact URLs

| Use | URL |
| --- | --- |
| Main website / canonical URL | https://www.4bros.website/ |
| Sitemap to submit | https://www.4bros.website/sitemap.xml |
| Robots file | https://www.4bros.website/robots.txt |
| Online menu | https://www.4bros.website/#menu |
| Original menu image | https://www.4bros.website/images/menu-original.jpeg |

## 1. Select the right verified property

Open [Google Search Console](https://search.google.com/search-console). Select either:

- Your **Domain property** `4bros.website`, which covers the www subdomain; or
- Your **URL-prefix property** `https://www.4bros.website/`.

A URL-prefix property for only `https://4bros.website/` or the old Vercel hostname does not cover the www homepage. Use the property that includes the exact public URL. [Google: property types](https://support.google.com/webmasters/answer/10432366?hl=en).

## 2. Submit this sitemap

Open **Indexing → Sitemaps → Add a new sitemap**.

For a Domain property, paste the full URL:

```text
https://www.4bros.website/sitemap.xml
```

If the form already displays `https://www.4bros.website/` as a fixed prefix, enter only:

```text
sitemap.xml
```

Click **Submit**. Check for **Success**. If you previously submitted this same sitemap while it contained the old Vercel URL, resubmit it now that its contents are corrected. [Google: sitemap submission and status](https://support.google.com/webmasters/answer/7451001?hl=en).

The sitemap contains **one canonical page**. All four menu categories and all 34 menu entries are part of that homepage. Fragments such as `/#burgers` and `/#menu` are not separate pages and do not belong in the sitemap.

The expected XML is:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.4bros.website/</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
</urlset>
```

This file is generated and hosted by the website. You submit its URL; you do not upload the XML to Google. Its date records the last substantive website update and should change when the menu or page changes, rather than on every unrelated build.

## 3. Inspect the homepage and request indexing

Paste this exact URL into the top **URL Inspection** field:

```text
https://www.4bros.website/
```

Select **Test live URL**. Check that crawling is allowed, the page fetch succeeds, and indexing is allowed. Then select **Request indexing**. The user-declared canonical should be `https://www.4bros.website/`. Google's selected canonical and indexed version can take time to update. A successful live test does not mean the page is already indexed. [Google: inspect a page](https://support.google.com/webmasters/answer/12482179?hl=en).

Do not use Google's Removals tool to migrate from the old hostname. Permanent redirects, the canonical URL and the updated sitemap identify the preferred address. If the old Vercel property was verified and indexed, consider Google's Change of Address tool from that old property where supported; both old and new properties must be owned. [Google: site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## 4. Related files and reports

The robots file is already published as:

```text
User-Agent: *
Allow: /

Sitemap: https://www.4bros.website/sitemap.xml
```

You do not submit robots.txt separately. There is no keyword box, metadata upload, or structured-data upload in Search Console; that information belongs in the website's code.

| Report | What to check |
| --- | --- |
| Sitemaps | Sitemap status is Success. One page is expected. |
| Page indexing | Whether the homepage is indexed, or why it is excluded. |
| URL Inspection | Declared canonical is the www custom domain; review Google's selected canonical once processed. |
| Performance → Search results | Clicks, impressions, queries and average position. Filter to Pakistan when useful. |
| Core Web Vitals | Real-user performance findings when enough data is available. |
| HTTPS | Any HTTPS errors reported by Google. |
| Security issues / Manual actions | Investigate only if Google reports an issue. |

For additional checks, paste the homepage URL into [Google Rich Results Test](https://search.google.com/test/rich-results), [Schema Markup Validator](https://validator.schema.org/) or [PageSpeed Insights](https://pagespeed.web.dev/). No ranking or performance score is claimed without actual measurement.

## 5. Domain and verification configuration

- `lib/business.ts` sets the permanent website address to `https://www.4bros.website` for canonical, sitemap, robots and structured-data URLs.
- An old `NEXT_PUBLIC_SITE_URL` environment variable is no longer used; it cannot override this address and can be removed from Vercel when convenient.
- Keep your existing `GOOGLE_SITE_VERIFICATION` setting and any DNS verification TXT record. The website continues supporting the configured HTML verification token. Existing Google verification does not need to be repeated.
- `vercel.json` adds a permanent redirect from `https://4bros-alpha.vercel.app/` to the matching path on the custom domain. The menu-image path stays the same, so previously printed QR codes can reach the menu through the redirect.
- `https://4bros.website/` and HTTP requests already redirect to the HTTPS www domain through Vercel.

## 6. Google Maps and local business information

Update your [Google Business Profile](https://business.google.com/) website field to **https://www.4bros.website/** and its menu link to **https://www.4bros.website/#menu**.

| Field | Value |
| --- | --- |
| Business name | 4bros |
| City / country | Hafizabad, Pakistan |
| Primary phone | +92 306 6259929 |
| Additional phone | +92 349 0854581 |
| Full shop/street address | Still needed from the owner |
| Opening hours | Still needed from the owner |
| Google Maps link | Still needed from the owner |

Provide the remaining details so the site's visible contact information and Restaurant structured data can match the real location. Google local results depend mainly on relevance, distance and prominence. [Google: improve local ranking](https://support.google.com/business/answer/7091?hl=en).

The server-rendered menu, accurate prices, local facts and linked Restaurant/Menu data also make the site understandable to AI search. Special AI markup or `llms.txt` is not required for Google AI search. Indexing, rankings and AI citations remain decisions of the search platforms. [Google: AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
