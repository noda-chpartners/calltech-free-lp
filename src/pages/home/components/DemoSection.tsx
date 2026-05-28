import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type DemoCategory = '飲食系' | '店舗・生活サービス' | '美容・健康' | '専門業種';
type DemoFilter = 'すべて' | DemoCategory;

type DemoSite = {
  category: DemoCategory;
  title: string;
  url: string;
  image: string;
  tagColor: 'blue' | 'sky' | 'green' | 'purple';
};

const demoSites: DemoSite[] = [
  {
    category: '飲食系',
    title: 'アジアンキッチン',
    url: 'https://asian-kitchen-balen.pages.dev/',
    image: '/images/demo/asian-kitchen-balen.png',
    tagColor: 'blue',
  },
  {
    category: '飲食系',
    title: 'バー',
    url: 'https://bar-lumine.pages.dev/',
    image: '/images/demo/bar-lumine.png',
    tagColor: 'blue',
  },
  {
    category: '店舗・生活サービス',
    title: 'ペットサロン・トリミング',
    url: 'https://paws-bloom.pages.dev/',
    image: '/images/demo/paws-bloom.png',
    tagColor: 'sky',
  },
  {
    category: '美容・健康',
    title: 'サロン',
    url: 'https://private-beauty.pages.dev/',
    image: '/images/demo/private-beauty.png',
    tagColor: 'green',
  },
  {
    category: '美容・健康',
    title: 'メンズエステ',
    url: 'https://mens-salon2.pages.dev/',
    image: '/images/demo/mens-salon2.png',
    tagColor: 'green',
  },
  {
    category: '専門業種',
    title: '自動車整備・板金',
    url: 'https://tanaka-car-service.pages.dev/',
    image: '/images/demo/tanaka-car-service.png',
    tagColor: 'purple',
  },
  {
    category: '専門業種',
    title: '工業',
    url: 'https://technoworks.pages.dev/',
    image: '/images/demo/technoworks.png',
    tagColor: 'purple',
  },
];

const filters: DemoFilter[] = ['すべて', '飲食系', '店舗・生活サービス', '美容・健康', '専門業種'];

const placeholderIconMap: Record<DemoCategory, string> = {
  飲食系: 'ri-restaurant-2-line',
  '店舗・生活サービス': 'ri-store-2-line',
  '美容・健康': 'ri-sparkling-line',
  専門業種: 'ri-tools-line',
};

const visualToneMap: Record<DemoCategory, string> = {
  飲食系: 'demo-visual-food',
  '店舗・生活サービス': 'demo-visual-service',
  '美容・健康': 'demo-visual-beauty',
  専門業種: 'demo-visual-specialty',
};

const getCardsPerPage = () => {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth <= 767) return 1;
  if (window.innerWidth <= 1023) return 2;
  return 4;
};

export default function DemoSection() {
  const { ref, isVisible } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<DemoFilter>('すべて');
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const filteredSites =
    activeFilter === 'すべて' ? demoSites : demoSites.filter((site) => site.category === activeFilter);
  const pageCount = Math.max(1, Math.ceil(filteredSites.length / cardsPerPage));
  const shouldShowControls = pageCount > 1;

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(getCardsPerPage());
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);

    return () => {
      window.removeEventListener('resize', updateCardsPerPage);
    };
  }, []);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const targetIndex = Math.min(currentPage * cardsPerPage, Math.max(filteredSites.length - 1, 0));
    const target = track.querySelector<HTMLElement>(`[data-demo-index="${targetIndex}"]`);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    } else {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [cardsPerPage, currentPage, filteredSites.length]);

  const scrollToPage = (page: number) => {
    const nextPage = Math.max(0, Math.min(page, pageCount - 1));
    setCurrentPage(nextPage);
  };

  const moveSlide = (direction: -1 | 1) => {
    scrollToPage(currentPage + direction);
  };

  const changeFilter = (filter: DemoFilter) => {
    setActiveFilter(filter);
    setCurrentPage(0);
    requestAnimationFrame(() => {
      trackRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    });
  };

  const markImageFailed = (image: string) => {
    setFailedImages((current) => (current.includes(image) ? current : [...current, image]));
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
            padding: 64px 20px 76px;
            background: #fff;
          }

          .demo-inner {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
          }

          .demo-heading {
            margin: 0 0 12px;
            color: #0f172a;
            font-size: 28px;
            font-weight: 900;
            line-height: 1.45;
            text-align: center;
            letter-spacing: 0.03em;
          }

          .demo-lead {
            margin: 0 auto 28px;
            max-width: 640px;
            color: #475569;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.8;
            text-align: center;
          }

          .demo-category-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin: 0 0 30px;
          }

          .demo-category-tab {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 36px;
            padding: 9px 16px;
            color: #0068b7;
            background: #fff;
            border: 1px solid rgba(0, 104, 183, 0.22);
            border-radius: 999px;
            font-size: 12px;
            font-weight: 900;
            line-height: 1;
            box-shadow: 0 7px 16px rgba(15, 23, 42, 0.04);
            transition: color 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
            cursor: pointer;
          }

          .demo-category-tab.is-active {
            color: #fff;
            background: #0068b7;
            border-color: #0068b7;
            box-shadow: 0 9px 18px rgba(0, 104, 183, 0.14);
          }

          .demo-carousel {
            position: relative;
          }

          .demo-track-wrap {
            overflow: hidden;
          }

          .demo-track {
            display: flex;
            gap: 24px;
            overflow-x: auto;
            padding: 2px 2px 14px;
            scroll-behavior: smooth;
            scroll-padding-left: 2px;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }

          .demo-track::-webkit-scrollbar {
            display: none;
          }

          .demo-card {
            display: flex;
            flex: 0 0 calc((100% - 72px) / 4);
            min-width: 0;
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: 12px;
            box-shadow:
              0 12px 28px rgba(15, 23, 42, 0.07),
              0 2px 8px rgba(15, 23, 42, 0.03);
            flex-direction: column;
            scroll-snap-align: start;
            transition: transform 180ms ease, box-shadow 180ms ease;
          }

          .demo-card:hover {
            transform: translateY(-2px);
            box-shadow:
              0 18px 34px rgba(15, 23, 42, 0.1),
              0 3px 10px rgba(15, 23, 42, 0.04);
          }

          .demo-visual {
            position: relative;
            display: flex;
            aspect-ratio: 16 / 9;
            overflow: hidden;
            align-items: center;
            justify-content: center;
            isolation: isolate;
          }

          .demo-visual::before,
          .demo-visual::after {
            content: '';
            position: absolute;
            border-radius: 999px;
            z-index: -1;
          }

          .demo-visual::before {
            width: 180px;
            height: 180px;
            right: -54px;
            top: -78px;
            background: rgba(255, 255, 255, 0.55);
          }

          .demo-visual::after {
            width: 116px;
            height: 116px;
            left: -32px;
            bottom: -52px;
            background: rgba(255, 255, 255, 0.42);
          }

          .demo-visual-food {
            background:
              linear-gradient(135deg, rgba(255, 196, 0, 0.28), rgba(255, 247, 220, 0.95)),
              #fff7df;
          }

          .demo-visual-service {
            background:
              linear-gradient(135deg, rgba(56, 174, 234, 0.24), rgba(231, 246, 255, 0.98)),
              #eaf7ff;
          }

          .demo-visual-beauty {
            background:
              linear-gradient(135deg, rgba(116, 185, 88, 0.22), rgba(240, 250, 236, 0.98)),
              #f0faec;
          }

          .demo-visual-specialty {
            background:
              linear-gradient(135deg, rgba(0, 104, 183, 0.18), rgba(241, 245, 249, 0.98)),
              #f1f5f9;
          }

          .demo-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            transition: transform 220ms ease;
          }

          .demo-card:hover .demo-image {
            transform: scale(1.025);
          }

          .demo-placeholder {
            position: relative;
            display: flex;
            width: calc(100% - 36px);
            min-height: 82px;
            padding: 16px 18px;
            align-items: center;
            justify-content: space-between;
            background: rgba(255, 255, 255, 0.72);
            border: 1px solid rgba(255, 255, 255, 0.74);
            border-radius: 10px;
            box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
            backdrop-filter: blur(4px);
          }

          .demo-placeholder-text {
            color: #0f172a;
            font-size: 13px;
            font-weight: 900;
            line-height: 1.5;
          }

          .demo-placeholder-text span {
            display: block;
            margin-top: 4px;
            color: #64748b;
            font-size: 11px;
            letter-spacing: 0;
          }

          .demo-placeholder-icon {
            display: flex;
            width: 46px;
            height: 46px;
            align-items: center;
            justify-content: center;
            color: #0068b7;
            background: #fff;
            border-radius: 999px;
            box-shadow: 0 7px 16px rgba(15, 23, 42, 0.06);
          }

          .demo-placeholder-icon i {
            font-size: 24px;
            line-height: 1;
          }

          .demo-card-body {
            display: flex;
            flex: 1;
            padding: 15px 16px 16px;
            flex-direction: column;
          }

          .demo-tag {
            display: inline-flex;
            width: fit-content;
            min-height: 24px;
            margin-bottom: 10px;
            padding: 5px 10px;
            align-items: center;
            justify-content: center;
            color: #fff;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 900;
            line-height: 1;
          }

          .demo-tag-blue {
            background: #0068b7;
          }

          .demo-tag-sky {
            background: #38aeea;
          }

          .demo-tag-green {
            background: #74b958;
          }

          .demo-tag-purple {
            background: #7c6ad6;
          }

          .demo-title {
            min-height: 46px;
            margin: 0 0 13px;
            color: #111827;
            font-size: 15px;
            font-weight: 900;
            line-height: 1.45;
          }

          .demo-button {
            display: inline-flex;
            width: 100%;
            min-height: 36px;
            margin-top: auto;
            align-items: center;
            justify-content: center;
            gap: 6px;
            color: #111827;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.34);
            border-radius: 999px;
            font-size: 12px;
            font-weight: 900;
            text-decoration: none;
            transition: color 180ms ease, background 180ms ease, border-color 180ms ease;
          }

          .demo-button:hover {
            color: #0068b7;
            background: #f8fafc;
            border-color: #0068b7;
          }

          .demo-button i {
            font-size: 16px;
            line-height: 1;
          }

          .demo-arrow {
            position: absolute;
            top: 42%;
            z-index: 2;
            display: flex;
            width: 42px;
            height: 42px;
            align-items: center;
            justify-content: center;
            color: #0068b7;
            background: #fff;
            border: 1px solid rgba(0, 104, 183, 0.16);
            border-radius: 999px;
            box-shadow:
              0 8px 18px rgba(15, 23, 42, 0.09),
              0 2px 5px rgba(0, 104, 183, 0.06);
            cursor: pointer;
            transform: translateY(-50%);
            transition: color 180ms ease, background 180ms ease, transform 180ms ease;
          }

          .demo-arrow:hover {
            color: #fff;
            background: #0068b7;
            transform: translateY(-50%) translateY(-1px);
          }

          .demo-arrow:disabled {
            opacity: 0.42;
            cursor: default;
            pointer-events: none;
          }

          .demo-arrow-left {
            left: -52px;
          }

          .demo-arrow-right {
            right: -52px;
          }

          .demo-arrow i {
            font-size: 22px;
            line-height: 1;
          }

          .demo-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 18px;
          }

          .demo-dot {
            width: 8px;
            height: 8px;
            padding: 0;
            background: #d7dde6;
            border: 0;
            border-radius: 999px;
            cursor: pointer;
          }

          .demo-dot.is-active {
            width: 18px;
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

          @media (max-width: 1023px) {
            .demo-card {
              flex-basis: calc((100% - 20px) / 2);
            }

            .demo-track {
              gap: 20px;
            }
          }

          @media (max-width: 767px) {
            .demo-section {
              padding: 54px 20px 62px;
            }

            .demo-heading {
              font-size: 24px;
            }

            .demo-lead {
              margin-bottom: 22px;
              font-size: 13px;
              text-align: left;
            }

            .demo-category-tabs {
              flex-wrap: nowrap;
              justify-content: flex-start;
              overflow-x: auto;
              margin: 0 -20px 22px;
              padding: 0 20px 6px;
              scrollbar-width: none;
            }

            .demo-category-tabs::-webkit-scrollbar {
              display: none;
            }

            .demo-category-tab {
              flex: 0 0 auto;
            }

            .demo-track-wrap {
              margin: 0 -20px;
              overflow: visible;
            }

            .demo-track {
              gap: 16px;
              padding: 2px 28px 12px;
              scroll-padding-left: 28px;
            }

            .demo-card {
              flex: 0 0 min(82vw, 320px);
            }

            .demo-title {
              min-height: 0;
            }

            .demo-arrow {
              top: 43%;
              width: 38px;
              height: 38px;
              box-shadow: 0 5px 14px rgba(15, 23, 42, 0.09);
            }

            .demo-arrow-left {
              left: 2px;
            }

            .demo-arrow-right {
              right: 2px;
            }
          }
        `}
      </style>

      <div className="demo-inner">
        <h3 className="demo-heading">デモサイト</h3>
        <p className="demo-lead">実際の業種を想定したデモサイトをご覧いただけます。</p>

        <div className="demo-category-tabs" aria-label="デモサイトのカテゴリ">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`demo-category-tab ${activeFilter === filter ? 'is-active' : ''}`}
              onClick={() => changeFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="demo-carousel">
          {shouldShowControls && (
            <button
              type="button"
              className="demo-arrow demo-arrow-left"
              onClick={() => moveSlide(-1)}
              disabled={currentPage === 0}
              aria-label="前のデモサイトを見る"
            >
              <i className="ri-arrow-left-s-line" aria-hidden="true" />
            </button>
          )}

          <div className="demo-track-wrap">
            <div ref={trackRef} className="demo-track">
              {filteredSites.map((site, index) => {
                const hasImage = Boolean(site.image) && !failedImages.includes(site.image);

                return (
                  <article key={`${site.category}-${site.title}`} className="demo-card" data-demo-index={index}>
                    <div className={`demo-visual ${visualToneMap[site.category]}`}>
                      {hasImage ? (
                        <img
                          src={site.image}
                          alt={`${site.title}のデモサイトのファーストビュー`}
                          className="demo-image"
                          loading="lazy"
                          onError={() => markImageFailed(site.image)}
                        />
                      ) : (
                        <div className="demo-placeholder" aria-hidden="true">
                          <p className="demo-placeholder-text">
                            {site.title}
                            <span>{site.category}デモ</span>
                          </p>
                          <span className="demo-placeholder-icon">
                            <i className={placeholderIconMap[site.category]} aria-hidden="true" />
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="demo-card-body">
                      <span className={`demo-tag demo-tag-${site.tagColor}`}>{site.category}</span>
                      <h4 className="demo-title">{site.title}</h4>
                      <a href={site.url} className="demo-button" target="_blank" rel="noopener noreferrer">
                        デモを見る
                        <i className="ri-external-link-line" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {shouldShowControls && (
            <button
              type="button"
              className="demo-arrow demo-arrow-right"
              onClick={() => moveSlide(1)}
              disabled={currentPage >= pageCount - 1}
              aria-label="次のデモサイトを見る"
            >
              <i className="ri-arrow-right-s-line" aria-hidden="true" />
            </button>
          )}
        </div>

        {shouldShowControls && (
          <div className="demo-dots" aria-hidden="true">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={`demo-page-${index}`}
                type="button"
                className={`demo-dot ${index === currentPage ? 'is-active' : ''}`}
                onClick={() => scrollToPage(index)}
                tabIndex={-1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
