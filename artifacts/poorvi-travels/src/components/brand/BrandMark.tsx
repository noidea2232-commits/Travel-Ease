import BrandLogo, { type BrandLogoContext } from "@/components/brand/BrandLogo";
import { BRAND_NAME } from "@/config/brand";
import { cn } from "@/lib/utils";

export type BrandMarkVariant = "navbar-hero" | "navbar-scrolled" | "footer";

export interface BrandMarkProps {
  variant?: BrandMarkVariant;
  className?: string;
  logoEntrance?: boolean;
}

function logoContext(variant: BrandMarkVariant): BrandLogoContext {
  return variant === "navbar-scrolled" ? "light" : "dark";
}

function titleClass(variant: BrandMarkVariant): string {
  if (variant === "footer") return "brand-title brand-title--footer";
  if (variant === "navbar-hero") return "brand-title brand-title--hero brand-title--navbar";
  return "brand-title brand-title--scrolled brand-title--navbar";
}

export default function BrandMark({
  variant = "navbar-hero",
  className,
  logoEntrance = false,
}: BrandMarkProps) {
  const isFooter = variant === "footer";

  if (isFooter) {
    return (
      <div className={cn("brand-mark brand-mark--footer min-w-0", className)}>
        <BrandLogo
          size="footer"
          context="dark"
          interactive
          entrance={logoEntrance}
          priority
        />
        <span className={titleClass(variant)}>{BRAND_NAME}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "brand-mark brand-mark--navbar flex items-center gap-2 sm:gap-3 min-w-0 w-full",
        className,
      )}
    >
      <BrandLogo
        size="navbar"
        context={logoContext(variant)}
        interactive
        entrance={logoEntrance}
        priority
      />
      <span className={cn(titleClass(variant), "brand-mark__title min-w-0")}>
        {BRAND_NAME}
      </span>
    </div>
  );
}
