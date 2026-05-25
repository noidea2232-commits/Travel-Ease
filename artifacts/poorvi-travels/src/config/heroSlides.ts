/**
 * Hero background slider images
 * ─────────────────────────────────────────────────────────────────
 * Replace images in `attached_assets/hero/` (hero-01.png … hero-10.png)
 */
import { BRAND_LOGO } from "@/config/brand";
import hero01 from "@assets/hero/hero-01.png";
import hero02 from "@assets/hero/hero-02.png";
import hero03 from "@assets/hero/hero-03.png";
import hero04 from "@assets/hero/hero-04.png";
import hero05 from "@assets/hero/hero-05.png";
import hero06 from "@assets/hero/hero-06.png";
import hero07 from "@assets/hero/hero-07.png";
import hero08 from "@assets/hero/hero-08.png";
import hero09 from "@assets/hero/hero-09.png";
import hero10 from "@assets/hero/hero-10.png";

export interface HeroSlide {
  src: string;
  alt: string;
  /** Brand logo splash — shown first for HERO_LOGO_INTRO_MS, then carousel continues */
  isBrandLogo?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  { src: BRAND_LOGO, alt: "Poorvi Best Travels — premium taxi and travel services", isBrandLogo: true },
  { src: hero01, alt: "Kerala backwaters houseboat — premium trip" },
  { src: hero02, alt: "Mysore Palace illuminated at night" },
  { src: hero03, alt: "Airport terminal and aircraft at dusk" },
  { src: hero04, alt: "Airport taxi fleet ready for pickup" },
  { src: hero05, alt: "Munnar tea plantations and hills" },
  { src: hero06, alt: "Gol Gumbaz heritage monument" },
  { src: hero07, alt: "Scenic waterfall in lush green hills" },
  { src: hero08, alt: "Rolling tea gardens under blue sky" },
  { src: hero09, alt: "Charminar landmark — city travel" },
  { src: hero10, alt: "Jog Falls — majestic Karnataka waterfall" },
];

/** Auto-advance interval in milliseconds */
export const HERO_SLIDE_INTERVAL_MS = 2000;
