export type MenuItem = { name: string; price: number; maxPrice?: number };
export type MenuCategory = { id: string; name: string; note: string; icon: "burger" | "flame" | "roll" | "sandwich"; items: MenuItem[]; photo: { x: number; y: number; width: number; height: number } };

export const categories: MenuCategory[] = [
  {
    id: "burgers", name: "Burgers", note: "The classics. The cravings. The good stuff.", icon: "burger",
    photo: { x: 28, y: 727, width: 525, height: 200 },
    items: [
      { name: "Single Anda Burger", price: 170 },
      { name: "Double Anda Burger", price: 200 },
      { name: "Achari Burger", price: 220 },
      { name: "Chicken Burger", price: 350 },
      { name: "Half Fry Anda Burger", price: 200 },
      { name: "Chicken Masala Burger", price: 250 },
      { name: "4 Bros Special Burger", price: 250 },
    ],
  },
  {
    id: "zinger-burgers", name: "Zinger Burgers", note: "Bring a bigger appetite.", icon: "flame",
    photo: { x: 580, y: 750, width: 522, height: 178 },
    items: [
      { name: "Zest Burger", price: 360 },
      { name: "Petty Burger", price: 280, maxPrice: 320 },
      { name: "Mighty Burger", price: 600 },
      { name: "Tower Burger", price: 520 },
      { name: "Double Decker Burger", price: 550 },
      { name: "Grill Italian Burger", price: 330 },
      { name: "4 Bros Injected Burger", price: 350 },
      { name: "Regular Burger", price: 280 },
    ],
  },
  {
    id: "shawarma-rolls", name: "Shawarma & Rolls", note: "All wrapped up. All-out flavor.", icon: "roll",
    photo: { x: 165, y: 1321, width: 367, height: 45 },
    items: [
      { name: "Chicken Shawarma", price: 200 },
      { name: "Achari Shawarma", price: 220 },
      { name: "Cheese Shawarma", price: 280 },
      { name: "Platter Shawarma", price: 380 },
      { name: "Beef Shawarma", price: 420 },
      { name: "Chipotle Sauce Shawarma", price: 270 },
      { name: "4 Bros Special Shawarma", price: 350 },
      { name: "Smoky Shawarma", price: 250 },
      { name: "Paratha Roll", price: 320 },
      { name: "Zinger Paratha Roll", price: 350 },
      { name: "Shapata Roll", price: 450 },
      { name: "Dip Sauce", price: 50 },
    ],
  },
  {
    id: "sandwiches", name: "Sandwiches", note: "Good things come between two slices.", icon: "sandwich",
    photo: { x: 603, y: 1256, width: 491, height: 110 },
    items: [
      { name: "Spanish Sandwich", price: 250 },
      { name: "Club Sandwich", price: 300 },
      { name: "Grill Italian Sandwich", price: 350 },
      { name: "Panini Sandwich", price: 420 },
      { name: "Cheesy Sandwich", price: 450 },
      { name: "4 Bros Special Sandwich", price: 450 },
      { name: "Sandoz", price: 450 },
    ],
  },
];

export const sauces = ["Mayo Garlic", "Chilli Sauce", "Chipotle", "Bar-B-Q", "Dragon Sauce", "Tangy Sauce", "Imli", "Green Herb", "Peri Peri"];

export function formatPrice(item: MenuItem) {
  return item.maxPrice ? `${item.price}–${item.maxPrice}` : String(item.price);
}

export function menuItemId(item: MenuItem) {
  return `item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}
