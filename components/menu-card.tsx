import { Flame, Hamburger, Sandwich, Utensils } from "lucide-react";
import { MenuPhoto } from "@/components/brand";
import { formatPrice, menuItemId, type MenuCategory } from "@/lib/menu";

export function MenuCard({ category, index }: { category: MenuCategory; index: number }) {
  const Icon = { burger: Hamburger, flame: Flame, roll: Utensils, sandwich: Sandwich }[category.icon];
  return <article className="menu-card" id={category.id} aria-labelledby={`${category.id}-title`}>
    <div className="menu-card-top"><span className="category-icon"><Icon size={27} strokeWidth={1.7} /></span><div><span className="eyebrow">THE 4BROS MENU / 0{index + 1}</span><h3 id={`${category.id}-title`}>{category.name}</h3></div><span className="currency-label">PKR</span></div>
    <div className="menu-card-content"><p className="category-note">{category.note}</p><ul className="menu-list">{category.items.map(item => <li key={item.name} id={menuItemId(item)}><span className="item-name">{item.name}</span><span className="price-leader" aria-hidden="true" /><span className="item-price"><span className="sr-only">PKR </span>{formatPrice(item)}</span></li>)}</ul></div>
    {category.id !== "shawarma-rolls" && <MenuPhoto {...category.photo} label={`${category.name} pictured on the original 4bros menu`} />}
  </article>;
}
