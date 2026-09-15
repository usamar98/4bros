import { business } from "@/lib/business";
import { categories, menuItemId, sauces } from "@/lib/menu";

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${business.siteUrl}/#restaurant`,
        name: "4bros",
        alternateName: "4 Bros",
        url: `${business.siteUrl}/`,
        description: "4bros in Hafizabad, Pakistan serves burgers, zinger burgers, shawarma, rolls, sandwiches and dip sauces. View the full menu with prices in Pakistani Rupees.",
        image: `${business.siteUrl}/images/menu-original.jpeg`,
        telephone: business.phones[0].international,
        contactPoint: business.phones.map(phone => ({ "@type": "ContactPoint", telephone: phone.international, contactType: "orders" })),
        address: { "@type": "PostalAddress", addressLocality: business.city, addressCountry: "PK" },
        servesCuisine: ["Fast food", "Burgers", "Shawarma", "Sandwiches"],
        currenciesAccepted: "PKR",
        priceRange: "PKR 50–600",
        hasMenu: { "@id": `${business.siteUrl}/#menu` },
        mainEntityOfPage: { "@id": `${business.siteUrl}/#webpage` },
      },
      {
        "@type": "Menu", "@id": `${business.siteUrl}/#menu`,
        name: "4bros Hafizabad Menu", inLanguage: "en-PK", url: `${business.siteUrl}/#menu`,
        hasMenuSection: categories.map(category => ({
          "@type": "MenuSection", "@id": `${business.siteUrl}/#${category.id}`, name: category.name, url: `${business.siteUrl}/#${category.id}`,
          hasMenuItem: category.items.map(item => ({
            "@type": "MenuItem", "@id": `${business.siteUrl}/#${menuItemId(item)}`, name: item.name,
            url: `${business.siteUrl}/#${menuItemId(item)}`,
            ...(item.name === "Dip Sauce" ? { description: `Sauce options: ${sauces.join(", ")}.` } : {}),
            offers: item.maxPrice
              ? { "@type": "Offer", priceCurrency: "PKR", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "PKR", minPrice: item.price, maxPrice: item.maxPrice } }
              : { "@type": "Offer", priceCurrency: "PKR", price: item.price },
          })),
        })),
      },
      {
        "@type": "WebSite", "@id": `${business.siteUrl}/#website`, name: "4bros Hafizabad",
        url: `${business.siteUrl}/`, inLanguage: "en-PK", publisher: { "@id": `${business.siteUrl}/#restaurant` },
      },
      {
        "@type": "WebPage", "@id": `${business.siteUrl}/#webpage`,
        name: "4bros Hafizabad | Burgers, Shawarma, Rolls & Sandwiches",
        url: `${business.siteUrl}/`, inLanguage: "en-PK",
        isPartOf: { "@id": `${business.siteUrl}/#website` },
        about: { "@id": `${business.siteUrl}/#restaurant` },
        mainEntity: { "@id": `${business.siteUrl}/#menu` },
        description: "The 4bros menu in Hafizabad, Pakistan, with 34 menu entries, prices in PKR, nine dip sauce options, and phone and WhatsApp ordering details.",
      },
    ],
  };
}
