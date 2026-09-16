import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("out/index.html", "utf8");
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || "null");
assert(schema, "Restaurant JSON-LD must be present in the initial HTML");
const restaurant = schema["@graph"].find(node => node["@type"] === "Restaurant");
const menu = schema["@graph"].find(node => node["@type"] === "Menu");
const items = menu.hasMenuSection.flatMap(section => section.hasMenuItem);
const main = html.match(/<main id="main">([\s\S]*?)<\/main>/)?.[1];
const expectedSiteUrl = "https://www.4bros.website/";
assert(main, "Server-rendered main content must be present");
assert.equal(restaurant.url, expectedSiteUrl, "Canonical identity must use the public production address");
assert.equal(menu.hasMenuSection.length, 4);
assert.equal(items.length, 34);
for (const item of items) {
  assert(main.includes(item.name), `${item.name} must be visible without JavaScript`);
  assert.equal(new URL(item.url).origin, new URL(expectedSiteUrl).origin);
  const id = new URL(item.url).hash.slice(1);
  const row = main.match(new RegExp(`<li id="${id}">([\\s\\S]*?)<\\/li>`))?.[1];
  assert(row?.includes(item.name), `${item.name} needs a working link to its visible menu entry`);
  const price = item.offers.priceSpecification
    ? `${item.offers.priceSpecification.minPrice}–${item.offers.priceSpecification.maxPrice}`
    : String(item.offers.price);
  assert(row.includes(`${price}</span>`), `${item.name}: visible price and structured price must agree`);
}
assert.equal(items.find(item => item.name === "Single Anda Burger").offers.price, 170);
assert.equal(items.find(item => item.name === "Shapata Roll").offers.price, 450);
assert.equal(items.find(item => item.name === "Dip Sauce").offers.price, 50);
assert.deepEqual(items.find(item => item.name === "Petty Burger").offers.priceSpecification, {
  "@type": "PriceSpecification", priceCurrency: "PKR", minPrice: 280, maxPrice: 320,
});
assert.equal(restaurant.address.addressLocality, "Hafizabad");
assert.equal(restaurant.address.addressCountry, "PK");
assert.equal(restaurant.telephone, "+923066259929");
assert(main.includes("tel:+923490854581"));
assert(!restaurant.aggregateRating, "Do not add invented reviews");
assert(!restaurant.openingHoursSpecification, "Do not invent opening hours");
for (const sauce of ["Mayo Garlic", "Chilli Sauce", "Chipotle", "Bar-B-Q", "Dragon Sauce", "Tangy Sauce", "Imli", "Green Herb", "Peri Peri"]) assert(main.includes(sauce));
for (const [, anchor] of main.matchAll(/href="#([^\"]+)"/g)) assert(html.includes(`id="${anchor}"`), `Missing anchor: ${anchor}`);
assert(html.includes(`<link rel="canonical" href="${restaurant.url}"`));
assert(!html.includes("http://localhost"));
assert(!html.includes("salmanonchain.chatgpt.site"), "Remove the previous private host from public metadata");
assert(!html.includes("4bros-alpha.vercel.app"), "The previous Vercel address must not appear in page metadata or schema");
assert(html.includes(`<meta property="og:url" content="${expectedSiteUrl}"`));
assert(html.includes('<meta name="robots" content="index, follow"'));
assert(html.includes('<html lang="en-PK"'));
assert(main.includes("4bros is a fast-food restaurant in Hafizabad, Pakistan."));
assert(main.includes('id="questions"'));
assert.equal((main.match(/<details>/g) || []).length, 3);
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, "Every HTML anchor must be unique");
const webPage = schema["@graph"].find(node => node["@type"] === "WebPage");
assert.equal(webPage.mainEntity["@id"], menu["@id"]);
assert.equal(webPage.about["@id"], restaurant["@id"]);
const verification = process.env.GOOGLE_SITE_VERIFICATION?.trim() || "f5qN6SgRS-ZEK2c4t9w-Bk1vDAHTxKnaCI8ZWaQD_Fw";
assert(html.includes(`<meta name="google-site-verification" content="${verification}"`), "Publish the owner-supplied Google verification token");
assert(readFileSync("out/robots.txt", "utf8").includes(`${restaurant.url}sitemap.xml`));
assert(readFileSync("out/sitemap.xml", "utf8").includes(`<loc>${restaurant.url}</loc>`));
const sitemap = readFileSync("out/sitemap.xml", "utf8");
assert.equal((sitemap.match(/<loc>/g) || []).length, 1, "Only the single canonical HTML page belongs in the sitemap");
const redirects = JSON.parse(readFileSync("vercel.json", "utf8")).redirects;
assert(redirects.some(rule => rule.source === "/" && rule.destination === expectedSiteUrl && rule.permanent && rule.has?.some(condition => condition.type === "host" && condition.value === "4bros-alpha.vercel.app")), "The legacy homepage needs an explicit root redirect");
assert(redirects.some(rule => rule.source === "/:path*" && rule.destination === `${expectedSiteUrl}:path*` && rule.permanent && rule.has?.some(condition => condition.type === "host" && condition.value === "4bros-alpha.vercel.app")), "Preserve old website and menu QR destinations with a host-scoped permanent redirect");
for (const asset of ["out/images/menu-original.jpeg", "out/favicon.svg", "out/404.html"]) assert(existsSync(asset), `Missing asset ${asset}`);
console.log("PASS: 34 menu entries with matching visible/schema prices and working links; four categories, nine sauces, phones, Hafizabad facts, linked Restaurant/Menu/WebPage schema, public canonical, sitemap, robots, Google verification handling, unique anchors and assets.");
