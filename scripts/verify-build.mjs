import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("out/index.html", "utf8");
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || "null");
assert(schema, "Restaurant JSON-LD must be present in the initial HTML");
const restaurant = schema["@graph"].find(node => node["@type"] === "Restaurant");
const menu = schema["@graph"].find(node => node["@type"] === "Menu");
const items = menu.hasMenuSection.flatMap(section => section.hasMenuItem);
const main = html.match(/<main id="main">([\s\S]*?)<\/main>/)?.[1];
assert(main, "Server-rendered main content must be present");
assert.equal(menu.hasMenuSection.length, 4);
assert.equal(items.length, 34);
for (const item of items) assert(main.includes(item.name), `${item.name} must be visible without JavaScript`);
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
assert(readFileSync("out/robots.txt", "utf8").includes(`${restaurant.url}sitemap.xml`));
assert(readFileSync("out/sitemap.xml", "utf8").includes(`<loc>${restaurant.url}</loc>`));
for (const asset of ["out/images/menu-original.jpeg", "out/favicon.svg", "out/404.html"]) assert(existsSync(asset), `Missing asset ${asset}`);
console.log("PASS: 34 visible menu entries, four categories, nine sauces, price range, phones, Hafizabad schema, canonical, sitemap, robots, anchors and assets.");
