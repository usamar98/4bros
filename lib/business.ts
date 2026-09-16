export const business = {
  name: "4bros",
  city: "Hafizabad",
  country: "Pakistan",
  phones: [
    { display: "0306-6259929", international: "+923066259929", whatsapp: "923066259929" },
    { display: "0349-0854581", international: "+923490854581", whatsapp: "923490854581" },
  ],
  // Keep the permanent public domain independent of preview URLs or stale deployment variables.
  siteUrl: "https://www.4bros.website",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION?.trim() || "f5qN6SgRS-ZEK2c4t9w-Bk1vDAHTxKnaCI8ZWaQD_Fw",
};

export const whatsappUrl = `https://wa.me/${business.phones[0].whatsapp}?text=${encodeURIComponent("Hi 4bros! I'd like to order from your menu.")}`;
