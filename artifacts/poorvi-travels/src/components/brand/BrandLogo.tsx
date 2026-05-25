import { BRAND_LOGO, BRAND_NAME } from "@/config/brand";
import { cn } from "@/lib/utils";

export type BrandLogoContext = "dark" | "light";
export type BrandLogoSize = "navbar" | "footer" | "hero";

export interface BrandLogoProps {
  /** Dark = hero/footer/navy glass; light = scrolled cream navbar (glass stays navy) */
  context?: BrandLogoContext;
  size?: BrandLogoSize;
  className?: string;
  /** Hover glow + scale */
  interactive?: boolean;
  /** Page-load / splash entrance */
  entrance?: boolean;
  /** High priority decode for LCP (hero, navbar) */
  priority?: boolean;
}

/**
 * Premium presentation layer for the brand image.
 * Does not alter the source asset — only CSS integration (blend, glow, glass).
 */
export default function BrandLogo({
  context = "dark",
  size = "navbar",
  className,
  interactive = true,
  entrance = false,
  priority = false,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "brand-logo",
        `brand-logo--${size}`,
        `brand-logo--${context}`,
        interactive && "brand-logo--interactive",
        entrance && "brand-logo--entrance",
        className,
      )}
    >
      <div className="brand-logo__glow" aria-hidden="true" />
      <div className="brand-logo__glass">
        <div className="brand-logo__img-wrap">
          <img
            src={BRAND_LOGO}
            alt={BRAND_NAME}
            className="brand-logo__img"
            width={size === "hero" ? 620 : size === "footer" ? 164 : 104}
            height={size === "hero" ? 360 : size === "footer" ? 96 : 64}
            decoding="async"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
