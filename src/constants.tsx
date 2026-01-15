import { Product, Brand, Partner } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Home Automation Systems",
    description:
      "Complete smart home control. Orchestrate your entire environment—lighting, climate, and media—through a single, unified interface that learns your patterns.",
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Centralised Vacuum Systems",
    description:
      "Invisible cleaning power. A silent, high-performance cleaning infrastructure integrated into your walls, removing dust and allergens without the noise of portable units.",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Ventilation & Fresh Air",
    description:
      "Pure air, always. Advanced ERV technology by Panasonic ensures constant oxygen flow and humidity control, creating a pristine indoor micro-climate.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Video Door Phones",
    description:
      "See who's there, instantly. Hikvision's elite door entry systems provide high-definition visual confirmation and remote access control from anywhere in the world.",
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    title: "WiFi & Networking",
    description:
      "Lightning-fast, everywhere. Enterprise-grade networking solutions that eliminate dead zones, ensuring your smart ecosystem stays connected at peak performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 7,
    title: "Home Theatre & Audio",
    description:
      "Cinema-quality sound. Custom-engineered private theaters and multi-room audio zones featuring KEF and Sonos for unparalleled acoustic fidelity.",
    imageUrl:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200",
  },
];

export interface BrandWithImage extends Brand {
  imageUrl: string;
}

export const BRANDS: BrandWithImage[] = [
  {
    name: "Zemote",
    tagline: "Touch Switches",
    description:
      "Zemote is a Pune-based IoT home automation manufacturer delivering smart touch switches and complete solutions, built in-house with customer-centric design, innovation, affordability, and seven-plus years of industry expertise, nationwide impact.",
    imageUrl: "/assets/zemote/zemote-switches.png",
    url: "https://www.zemote.in/",
    brandLogo: "/assets/zemote/zemote-logo.png",
  },
  {
    name: "KEF",
    tagline: "Wireless Hi-Fi Speakers",
    description:
      "KEF is a British high-fidelity audio brand renowned for award-winning speakers, innovative Uni-Q technology, and immersive sound systems that deliver authentic, premium listening experiences worldwide.",
    imageUrl: "/assets/kef/kef.png",
    url: "https://international.kef.com/",
    brandLogo: "/assets/kef/kef-logo.png",
  },
  {
    name: "TIS Control",
    tagline: "Smart Building IT Services",
    description:
      "TIS Control is a global smart home and building automation brand offering wired and wireless solutions for lighting, HVAC, security, energy management, and hotel systems with elegant, affordable products sold via international distributors.",
    imageUrl: "/assets/tis/tis.png",
    url: "https://www.tiscontrol.com/",
    brandLogo: "/assets/tis/tis-logo.png",
  },
  {
    name: "Panasonic",
    tagline: "ERV Fresh Air Tech",
    description:
      "Panasonic North America is a leading technology provider delivering consumer electronics, business solutions, smart mobility, sustainable energy, and industrial innovations that enrich lives and build a brighter future.",
    imageUrl: "/assets/panasonic/panasonic.png",
    url: "https://na.panasonic.com/",
  },
  {
    name: "Renson",
    tagline: "Renson Louvred Solutions",
    description:
      "Renson is a Belgian pioneer in healthy indoor climates and outdoor living, offering innovative ventilation, solar shading, pergolas, façades, and comfort solutions with over a century of design-led sustainability and quality.",
    imageUrl: "/assets/cleair/renson.png",
    url: "https://renson.net/en-in",
    brandLogo: "/assets/renson/renson-logo.png",
  },
];

export const PARTNERS: Partner[] = [
  { name: "Hikvision", logo: "https://picsum.photos/seed/hik/200/100" },
  { name: "Securico", logo: "https://picsum.photos/seed/sec/200/100" },
  { name: "Sonos", logo: "https://picsum.photos/seed/son/200/100" },
  { name: "Control4", logo: "https://picsum.photos/seed/con/200/100" },
  { name: "Savant", logo: "https://picsum.photos/seed/sav/200/100" },
  { name: "Lutron", logo: "https://picsum.photos/seed/lut/200/100" },
];
