"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand";
import { business, whatsappUrl } from "@/lib/business";

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="announcement"><span><MapPin size={13} /> HAFIZABAD, PAKISTAN</span><span>REAL TASTE. REAL BROTHERS.</span><a href={`tel:${business.phones[0].international}`}><Phone size={13} /> {business.phones[0].display}</a></div>
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand-link" aria-label="4bros home" onClick={() => setOpen(false)}><Logo /><span>4BROS<span className="brand-sub">FAST FOOD · BIG FLAVOR</span></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#menu">Our menu</a><a href="#sauces">The sauces</a><a href="#contact">Find your bros</a></nav>
        <a className="button button-red header-order" href={whatsappUrl} target="_blank" rel="noreferrer">Let’s order <ArrowUpRight size={18} /></a>
        <button className="mobile-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><a href="#menu" onClick={() => setOpen(false)}>Our menu</a><a href="#sauces" onClick={() => setOpen(false)}>The sauces</a><a href="#contact" onClick={() => setOpen(false)}>Find your bros</a><a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Order on WhatsApp <ArrowUpRight size={18} /></a></nav>}
    </header>
  </>;
}
