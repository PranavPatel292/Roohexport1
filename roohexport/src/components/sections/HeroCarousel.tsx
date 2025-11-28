import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const CAROUSEL_ITEMS: any = [
  {
    id: 1,
    title: "Urban Future",
    subtitle: "SS25 Collection",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "Midnight Tokyo",
    subtitle: "Limited Drops",
    image:
      "https://images.unsplash.com/photo-1617391157958-39659b9195d5?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Street Essentials",
    subtitle: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",
  },
];

const HeroCarousel = () => {
  // 1. Initialize Embla with loop:true and the Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  // 2. Button Handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full bg-gray-900 group">
      {/* Embla Viewport - This is the "window" that clips the slides */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {CAROUSEL_ITEMS.map((item: any) => (
            <div
              key={item.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent z-10 pointer-events-none" />

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover select-none"
              />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 pointer-events-none">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase mb-4">
                  {item.subtitle}
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter max-w-4xl drop-shadow-2xl">
                  {item.title.split(" ").map((word: any, i: any) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h2>
                <div className="pointer-events-auto">
                  <button className="bg-white text-black px-10 py-4 font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-all flex items-center gap-3">
                    Shop Collection
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 md:right-16 z-30 flex gap-4">
        <button
          onClick={scrollPrev}
          className="p-3 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all border border-white/20 rounded-full md:rounded-none"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all border border-white/20 rounded-full md:rounded-none"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
