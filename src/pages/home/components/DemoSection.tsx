import { useRef, useState } from 'react';
import { demoSites } from '@/mocks/demoSites';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function DemoSection() {
  const { ref, isVisible } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    const target = track?.querySelector<HTMLElement>(`[data-demo-index="${index}"]`);
    if (!track || !target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(index);
  };

  const moveSlide = (direction: -1 | 1) => {
    const nextIndex = (currentIndex + direction + demoSites.length) % demoSites.length;
    scrollToCard(nextIndex);
  };

  return (
    <section
      id="demo"
      ref={ref}
      className={`demo-section transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <style>
        {`
          .demo-section {
            width: 100%;
            padding: 64px 20px 72px;
            background: #fff;
          }

          .demo-inner {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
          }

          .demo-heading {
            margin: 0 0 34px;
            color: #0f172a;
            font-size: 26px;
            font-weight: 900;
            line-height: 1.45;
            text-align: center;
            letter-spacing: 0.03em;
          }

          .demo-carousel {
            position: relative;
          }

          .demo-track-wrap {
            overflow: visible;
          }

          .demo-track {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 28px;
          }

          .demo-card {
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: 12px;
            box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
            transition: transform 180ms ease, box-shadow 180ms ease;
          }

          .demo-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 42px rgba(15, 23, 42, 0.12);
          }

          .demo-image-frame {
            aspect-ratio: 16 / 9;
            overflow: hidden;
            background: #f8fafc;
          }

          .demo-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
          }

          .demo-card-body {
            padding: 14px 16px 16px;
          }

          .demo-tag {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 58px;
            min-height: 24px;
            margin-bottom: 10px;
            padding: 4px 10px;
            color: #fff;
            background: #0068b7;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 900;
            line-height: 1;
          }

          .demo-card:nth-child(2) .demo-tag {
            background: #38aeea;
          }

          .demo-card:nth-child(3) .demo-tag {
            background: #74b958;
          }

          .demo-card:nth-child(4) .demo-tag {
            background: #7c6ad6;
          }

          .demo-title {
            margin: 0 0 14px;
            color: #111827;
            font-size: 15px;
            font-weight: 900;
            line-height: 1.4;
          }

          .demo-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 34px;
            color: #111827;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.34);
            border-radius: 999px;
            font-size: 12px;
            font-weight: 900;
            text-decoration: none;
            transition: background 180ms ease, border-color 180ms ease;
          }

          .demo-button:hover {
            background: #f8fafc;
            border-color: #0068b7;
          }

          .demo-arrow {
            position: absolute;
            top: 50%;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            color: #0068b7;
            background: #fff;
            border: 1px solid rgba(0, 104, 183, 0.16);
            border-radius: 999px;
            box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
            transform: translateY(-50%);
            cursor: pointer;
          }

          .demo-arrow-left {
            left: -56px;
          }

          .demo-arrow-right {
            right: -56px;
          }

          .demo-arrow i {
            font-size: 22px;
            line-height: 1;
          }

          .demo-dots {
            display: flex;
            justify-content: center;
            gap: 9px;
            margin-top: 24px;
          }

          .demo-dot {
            width: 9px;
            height: 9px;
            padding: 0;
            background: #d7dde6;
            border: 0;
            border-radius: 999px;
            cursor: pointer;
          }

          .demo-dot.is-active {
            background: #ffc400;
          }

          @media (max-width: 1299px) {
            .demo-arrow-left {
              left: -14px;
            }

            .demo-arrow-right {
              right: -14px;
            }
          }

          @media (max-width: 767px) {
            .demo-section {
              padding: 54px 20px 62px;
            }

            .demo-heading {
              margin-bottom: 26px;
              font-size: 24px;
            }

            .demo-track-wrap {
              overflow-x: auto;
              margin: 0 -20px;
              padding: 0 20px 8px;
              scroll-snap-type: x mandatory;
              scrollbar-width: none;
            }

            .demo-track-wrap::-webkit-scrollbar {
              display: none;
            }

            .demo-track {
              display: flex;
              gap: 18px;
            }

            .demo-card {
              flex: 0 0 min(82vw, 320px);
              scroll-snap-align: start;
            }

            .demo-arrow {
              top: 42%;
              width: 38px;
              height: 38px;
            }

            .demo-arrow-left {
              left: -4px;
            }

            .demo-arrow-right {
              right: -4px;
            }
          }
        `}
      </style>

      <div className="demo-inner">
        <h3 className="demo-heading">デモサイト</h3>

        <div className="demo-carousel">
          <button
            type="button"
            className="demo-arrow demo-arrow-left"
            onClick={() => moveSlide(-1)}
            aria-label="前のデモサイトを見る"
          >
            <i className="ri-arrow-left-s-line" aria-hidden="true" />
          </button>

          <div className="demo-track-wrap">
            <div ref={trackRef} className="demo-track">
              {demoSites.map((site, index) => (
                <article key={site.id} className="demo-card" data-demo-index={index}>
                  <div className="demo-image-frame">
                    <img src={site.image} alt={site.name} className="demo-image" />
                  </div>
                  <div className="demo-card-body">
                    <span className="demo-tag">{site.category}</span>
                    <h4 className="demo-title">{site.name}</h4>
                    <a href={site.link} className="demo-button">
                      デモを見る
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="demo-arrow demo-arrow-right"
            onClick={() => moveSlide(1)}
            aria-label="次のデモサイトを見る"
          >
            <i className="ri-arrow-right-s-line" aria-hidden="true" />
          </button>
        </div>

        <div className="demo-dots" aria-hidden="true">
          {demoSites.map((site, index) => (
            <button
              key={site.id}
              type="button"
              className={`demo-dot ${index === currentIndex ? 'is-active' : ''}`}
              onClick={() => scrollToCard(index)}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
