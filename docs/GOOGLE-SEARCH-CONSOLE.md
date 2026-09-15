# 4bros: Google Search Console setup

Prepared for **https://4bros-alpha.vercel.app/** on 15 September 2026.

Your supplied verification token has been added to the website. You must finish verification in your own Google account; no Search Console property has been created or verified by this work.

## 1. Add the website

Open [Google Search Console](https://search.google.com/search-console), sign in with the Google account that should own the restaurant's website, and choose **Add property → URL prefix**.

Paste this exact value:

```text
https://4bros-alpha.vercel.app/
```

Choose **URL prefix** for this Vercel subdomain. A Domain property requires DNS verification; you do not control the parent `vercel.app` domain. [Google: property types](https://support.google.com/webmasters/answer/10432366?hl=en).

## 2. Verify ownership using the HTML tag

**Your code is already installed.** The homepage now includes:

```html
<meta name="google-site-verification" content="f5qN6SgRS-ZEK2c4t9w-Bk1vDAHTxKnaCI8ZWaQD_Fw" />
```

Select **HTML tag**, compare its content value with the code above, and click **Verify** if they match. Keep the code after verification.

You supplied the code in `google-site-verification=...` form, which is also used for DNS verification. A Domain property still requires DNS verification; installing an HTML tag does not verify a Domain property. Use the **URL-prefix property** above. If its HTML-tag method supplies a different content token, replace the token using the steps below or send the new tag to your developer. [Google: supported verification methods](https://support.google.com/webmasters/answer/9008080?hl=en).

### Only if Google gives you a different HTML-tag token

1. Expand **HTML tag** under the alternative verification methods.
2. Google gives you a tag shaped like `<meta name="google-site-verification" content="YOUR_UNIQUE_TOKEN" />`. Google generates the real token; the example is not a usable verification code.
3. Copy **only the value inside `content="..."`**.
4. Open your **4bros project in Vercel → Settings → Environment Variables**. Add:

   | Name | Value | Environment |
   | --- | --- | --- |
   | `GOOGLE_SITE_VERIFICATION` | The real content token from Google | Production |
   | `NEXT_PUBLIC_SITE_URL` | `https://4bros-alpha.vercel.app` | Production |

   The site URL already defaults to this address. If the variable exists with an older address, replace that value.

5. Save, then create a new **Production deployment** from the latest `main` commit. You can use **Deployments → latest production deployment → Redeploy**. Existing deployments do not pick up environment changes. [Vercel: environment variables](https://vercel.com/docs/environment-variables).
6. Wait for deployment to finish. Open the public homepage's page source and find `google-site-verification`; check that the token matches Google's.
7. Return to Search Console and select **Verify**. Keep the environment variable permanently because Google can check ownership again. [Google: HTML-tag verification](https://support.google.com/webmasters/answer/9008080?hl=en).

You can also send the Google-provided meta tag to your developer to update it. No Google Cloud project or API key is needed for these steps.

## 3. Submit the sitemap

Once verified, select the property above and open **Indexing → Sitemaps**. Under **Add a new sitemap**, enter:

```text
sitemap.xml
```

The complete sitemap URL is:

```text
https://4bros-alpha.vercel.app/sitemap.xml
```

Select **Submit**, then check its status. The sitemap contains **one page**, because the menu sections are part of the homepage. A successful sitemap submission helps Google discover URLs; it does not guarantee indexing. [Google: Sitemaps report](https://support.google.com/webmasters/answer/7451001?hl=en).

## 4. Request indexing

Paste this in Search Console's top **URL Inspection** field:

```text
https://4bros-alpha.vercel.app/
```

Select **Test live URL**, review the result, then **Request indexing** if the page can be indexed. Check that the user-declared canonical is the public Vercel homepage. Google's selected canonical may take time to reflect changes; a live test does not mean a page is already indexed. [Google: inspect a page](https://support.google.com/webmasters/answer/12482179?hl=en).

Do not submit `localhost`, the former private Sites URL, or menu fragments such as `/#burgers` as separate pages. Use the HTML homepage for menu searches; the original menu JPEG remains a customer download and QR destination.

## 5. Check results and problems

| Search Console area | What to check |
| --- | --- |
| Sitemaps | The submitted sitemap can be fetched successfully. |
| Page indexing | Whether the homepage is indexed; inspect any exclusion reason. |
| URL Inspection | Crawl access and declared/Google-selected canonical. |
| Performance → Search results | Impressions, clicks, search queries and average position; filter Country to Pakistan when useful. |
| Core Web Vitals | Any available real-user performance findings. A new or small site may have insufficient data. |
| HTTPS | Any reported HTTPS issues. |
| Security issues / Manual actions | Investigate issues if Google reports any. |

Data may take time to appear. Do not repeatedly resubmit an unchanged page. After a meaningful menu, location or domain change, redeploy, inspect the URL and check the sitemap again. [Google: getting started with Search Console](https://support.google.com/webmasters/answer/6258314?hl=en).

There is **no keyword box** to fill in Search Console. Titles, descriptions, structured data, robots rules and menu text are already in the website's code. The homepage contains the named menu items naturally, including burgers, zinger burgers, shawarma, rolls and sandwiches in Hafizabad.

## 6. Complete Google Business Profile for local discovery

Search Console covers the website. For Google Maps and local restaurant results, claim or manage the restaurant at [Google Business Profile](https://business.google.com/).

Use these business details consistently with the website:

| Field | Value |
| --- | --- |
| Business name | 4bros — use the real name on your signage, without added search keywords |
| Business category | Choose the most specific accurate available category, such as Fast food restaurant |
| City / country | Hafizabad, Pakistan |
| Primary phone | +92 306 6259929 |
| Additional phone | +92 349 0854581 |
| Website | https://4bros-alpha.vercel.app/ |
| Menu link | https://4bros-alpha.vercel.app/#menu |
| Full address / map pin | Add the actual street, shop details and precise entrance location |
| Opening hours | Add actual weekly hours and holiday changes |
| Photos / menu | Upload current photos of the restaurant, signage, food and supplied menu |

Provide the exact address, hours and Google Maps link to your developer so the public contact section and Restaurant structured data can match the verified profile. Ask actual customers for honest reviews and reply to them.

Google says local results depend mainly on relevance, distance and prominence; complete information helps but no one can guarantee first place. [Google: improve local ranking](https://support.google.com/business/answer/7091?hl=en).

## SEO and AI search checks

- [Robots file](https://4bros-alpha.vercel.app/robots.txt)
- [Sitemap](https://4bros-alpha.vercel.app/sitemap.xml)
- [Google Rich Results Test](https://search.google.com/test/rich-results): paste the homepage URL. Incomplete street address/hours still need real business details; not every Schema.org type produces a Google enhancement.
- [Schema Markup Validator](https://validator.schema.org/): inspect the linked Restaurant and Menu data.
- [PageSpeed Insights](https://pagespeed.web.dev/): paste the homepage URL to measure performance; no score is claimed until measured.

The site provides crawlable HTML menu text, matching prices and structured data, clear local business facts and useful customer answers. Google's AI search uses ordinary search foundations; special AI markup or an `llms.txt` file is not required. There is no guaranteed placement in Google AI answers or other AI search tools. [Google: AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## If you later connect a custom domain

Choose the permanent domain, redirect the former website to it, update `NEXT_PUBLIC_SITE_URL`, and redeploy. Verify the new Search Console property and submit its sitemap. Recheck the printed QR destinations before retiring the current Vercel URL.
