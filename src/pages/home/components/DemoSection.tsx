import { useState, useEffect } from 'react';
import { demoSites } from '@/mocks/demoSites';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function DemoSection() {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % demoSites.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + demoSites.length) % demoSites.length);
  };

  const itemWidth = isMobile ? 100 : 25;

  return (
    <section id="demo" ref={ref} className={`w-full py-16 md:py-24 bg-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10 md:mb-14">
          デモサイト
        </h3>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-xl text-gray-600 w-6 h-6 flex items-center justify-center" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-xl text-gray-600 w-6 h-6 flex items-center justify-center" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-8 md:px-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
              style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
            >
              {demoSites.map((site) => (
                <div
                  key={site.id}
                  className="min-w-[calc(100%-0px)] md:min-w-[calc(25%-18px)] flex-shrink-0 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-full aspect-[3/2] overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <div className="inline-block px-2 py-0.5 bg-brand-blue text-white text-xs font-bold rounded mb-2">
                      {site.category}
                    </div>
                    <p className="text-sm font-bold text-gray-900 mb-3">{site.name}</p>
                    <a
                      href={site.link}
                      className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      デモを見る
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {demoSites.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${i === currentIndex ? 'bg-brand-yellow' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}