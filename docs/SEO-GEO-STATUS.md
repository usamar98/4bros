# 4bros SEO and GEO implementation

Updated: 15 September 2026. Production: **https://4bros-alpha.vercel.app/**.

## Implemented

- Corrected the public canonical address, sitemap location, robots sitemap directive, structured-data URLs and social URL. They previously pointed to the former private Sites host.
- Added the owner's supplied Google verification token to the homepage metadata. The `GOOGLE_SITE_VERIFICATION` build environment variable can override it when needed.
- Kept one indexable homepage with an XML sitemap and unrestricted robots crawl rules. Menu sections are anchors on this page.
- Added a concise visible explanation of 4bros' food offering and Hafizabad location, plus customer answers about currency, ordering, directions and hours.
- Preserved all 34 menu entries, the nine sauce names, exact source prices and the Petty Burger price range in server-rendered HTML.
- Added stable links to individual dishes. Restaurant, Menu, MenuSection, MenuItem, WebSite and WebPage data now share a linked identity on the production domain.
- Kept menu structured data generated from the same source as the displayed menu. Kept both real phone numbers and the original menu image.
- Extended the export checks to verify production canonical, all menu prices and anchors, linked schema, robots, sitemap and Google verification metadata.

## Needed from the owner

- Completion of Google account verification and sitemap submission. The supplied token is included; the owner must click Verify in Search Console. Follow [the setup guide](GOOGLE-SEARCH-CONSOLE.md).
- Exact street/shop address, opening hours and Google Maps/Business Profile URL. City and country are confirmed; these additional details are not invented in the website or schema.
- Ongoing confirmation of menu prices, business information and ordering availability.

## Scope of verification

Build and export checks establish that the website presents crawlable, internally consistent information. Public HTTP checks can establish that the deployed files are reachable and use the correct canonical. These checks do not establish Google's indexing decision, ranking, impressions, clicks, Core Web Vitals field performance, or citation by an AI engine.

No Search Console credentials or field-performance API credentials are configured in this workspace. No invented ratings, reviews, opening hours, precise coordinates or awards have been added.

GEO here means making the real business and menu understandable and accessible to AI search. Google does not require special AI schema or an `llms.txt` file. [Google's AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
