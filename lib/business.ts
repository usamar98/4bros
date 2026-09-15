export const business = {
  name: "4bros",
  city: "Hafizabad",
  country: "Pakistan",
  phones: [
    { display: "0306-6259929", international: "+923066259929", whatsapp: "923066259929" },
    { display: "0349-0854581", international: "+923490854581", whatsapp: "923490854581" },
  ],
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://fourbros-hafizabad.salmanonchain.chatgpt.site").replace(/\/$/, ""),
};

export const whatsappUrl = `https://wa.me/${business.phones[0].whatsapp}?text=${encodeURIComponent("Hi 4bros! I'd like to order from your menu.")}`;
