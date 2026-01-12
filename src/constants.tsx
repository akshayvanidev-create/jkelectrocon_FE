
import { Product, Brand, Partner } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Home Automation Systems",
    description: "Complete smart home control. Orchestrate your entire environment—lighting, climate, and media—through a single, unified interface that learns your patterns.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Centralised Vacuum Systems",
    description: "Invisible cleaning power. A silent, high-performance cleaning infrastructure integrated into your walls, removing dust and allergens without the noise of portable units.",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Ventilation & Fresh Air",
    description: "Pure air, always. Advanced ERV technology by Panasonic ensures constant oxygen flow and humidity control, creating a pristine indoor micro-climate.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Video Door Phones",
    description: "See who's there, instantly. Hikvision's elite door entry systems provide high-definition visual confirmation and remote access control from anywhere in the world.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 6,
    title: "WiFi & Networking",
    description: "Lightning-fast, everywhere. Enterprise-grade networking solutions that eliminate dead zones, ensuring your smart ecosystem stays connected at peak performance.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 7,
    title: "Home Theatre & Audio",
    description: "Cinema-quality sound. Custom-engineered private theaters and multi-room audio zones featuring KEF and Sonos for unparalleled acoustic fidelity.",
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200"
  }
];

export interface BrandWithImage extends Brand {
  imageUrl: string;
}

export const BRANDS: BrandWithImage[] = [
  { 
    name: "Zemote", 
    tagline: "Touch Switches",
    description: "Experience the tactile elegance of glass-finish touch interfaces. Zemote combines minimalist aesthetics with rapid responsiveness, turning every interaction with your home into a moment of pure luxury.",
    imageUrl: "/assets/zemote/zemote-switches.png" 
  },
  { 
    name: "KEF", 
    tagline: "Wireless Hi-Fi Speakers",
    description: "The pinnacle of British audio engineering. KEF's Uni-Q technology delivers a soundstage so precise and immersive that it disappears, leaving only the artist's performance in your living space.",
    imageUrl: "/assets/kef/kef.png" 
  },
  { 
    name: "TIS Control", 
    tagline: "Smart Building IT Services",
    description: "Robust infrastructure meets intelligent automation. TIS provides the sophisticated backbone required for modern smart buildings, ensuring 100% uptime and seamless communication across all subsystems.",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    name: "Panasonic", 
    tagline: "ERV Fresh Air Tech",
    description: "Superior air quality is the ultimate luxury. Panasonic's Energy Recovery Ventilators (ERV) continuously exchange stale indoor air with purified, temperature-tempered outdoor air for a healthier home.",
    imageUrl: "/assets/panasonic/panasonic.png" 
  },
  { 
    name: "Cleair", 
    tagline: "Renson Louvred Solutions",
    description: "Expanding the boundaries of your home. Cleair's motorized louvred roofs offer architectural sophistication and climate-controlled comfort for your outdoor terraces, regardless of the season.",
    imageUrl: "/assets/cleair/renson.png" 
  }
];

export const PARTNERS: Partner[] = [
  { name: "Hikvision", logo: "https://picsum.photos/seed/hik/200/100" },
  { name: "Securico", logo: "https://picsum.photos/seed/sec/200/100" },
  { name: "Sonos", logo: "https://picsum.photos/seed/son/200/100" },
  { name: "Control4", logo: "https://picsum.photos/seed/con/200/100" },
  { name: "Savant", logo: "https://picsum.photos/seed/sav/200/100" },
  { name: "Lutron", logo: "https://picsum.photos/seed/lut/200/100" },
];
