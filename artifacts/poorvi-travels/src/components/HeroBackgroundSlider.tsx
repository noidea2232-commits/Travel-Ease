import { useCallback, useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/brand/BrandLogo";
import { HERO_LOGO_INTRO_MS } from "@/config/brand";
import { HERO_SLIDES, HERO_SLIDE_INTERVAL_MS } from "@/config/heroSlides";

const SWIPE_THRESHOLD_PX = 50;

export default function HeroBackgroundSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideCount = HERO_SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      if (slideCount === 0) return;
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (slideCount <= 1) return;
    const slide = HERO_SLIDES[activeIndex];
    const duration = slide?.isBrandLogo ? HERO_LOGO_INTRO_MS : HERO_SLIDE_INTERVAL_MS;
    const timer = setTimeout(next, duration);
    return () => clearTimeout(timer);
  }, [activeIndex, next, slideCount]);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY * 0.25;
      setParallax((p) => ({ ...p, y: offset }));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setParallax({ x, y });
  };

  const handleDoubleClick = () => next();

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  if (slideCount === 0) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden select-none"
      onDoubleClick={handleDoubleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onPointerMove={handlePointerMove}
      aria-hidden="true"
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={`${slide.src}-${index}`}
            className={`hero-slide absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-[-8%]"
              style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
            >
              {slide.isBrandLogo ? (
                <div className="hero-logo-splash w-full h-full min-h-full">
                  <BrandLogo
                    size="hero"
                    context="dark"
                    entrance
                    interactive={false}
                    priority
                  />
                </div>
              ) : (
                <div
                  className={`hero-slide-zoom w-full h-full ${
                    isActive ? "hero-slide-zoom-active" : ""
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center min-h-full min-w-full"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"}
                    draggable={false}
                    sizes="100vw"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/45 to-black/75" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />

      {/* Slide indicators */}
      {slideCount > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-[#f5e6b8] to-[#c9a227]"
                  : "w-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
