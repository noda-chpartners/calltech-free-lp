import { useState } from 'react';
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
    title: '和食',
    url: 'https://hisui-ginza.pages.dev/',
    image: '',
    tagColor: 'blue',
  },
  {
    category: '飲食系',
    title: 'アジアンキッチン',
    url: 'https://asian-kitchen-balen.pages.dev/',
    image: '',
    tagColor: 'blue',
  },
  {
    category: '飲食系',
    title: 'バー',
    url: 'https://bar-lumine.pages.dev/',
    image: '',
    tagColor: 'blue',
  },
  {
    category: '飲食系',
    title: 'イタリアン',
    url: 'https://italian-restaurant.pages.dev/',
    image: '',
    tagColor: 'blue',
  },
  {
    category: '店舗・生活サービス',
    title: 'ペットサロン・トリミング',
    url: 'https://paws-bloom.pages.dev/',
    image: '',
    tagColor: 'sky',
  },
  {
    category: '美容・健康',
    title: 'サロン',
    url: 'https://private-beauty.pages.dev/',
    image: '',
    tagColor: 'green',
  },
  {
    category: '美容・健康',
    title: 'メンズエステ',
    url: 'https://mens-salon2.pages.dev/',
    image: '',
    tagColor: 'green',
  },
  {
    category: '専門業種',
    title: '自動車整備・板金',
    url: 'https://tanaka-car-service.pages.dev/',
    image: '',
    tagColor: 'purple',
  },
  {
    category: '専門業種',
    title: '工業系',
    url: 'https://technoworks.pages.dev/',
    image: '',
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

export default function DemoSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<DemoFilter>('すべて');

  const filteredSites =
    activeFilter === 'すべて' ? demoSites : demoSites.filter((site) => site.category === activeFilter);

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

          .demo-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
          }

          .demo-card {
            display: flex;
            min-height: 100%;
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: 12px;
            box-shadow:
              0 12px 28px rgba(15, 23, 42, 0.07),
              0 2px 8px rgba(15, 23, 42, 0.03);
            flex-direction: column;
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
            min-height: 154px;
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
            object-position: center;
          }

          .demo-placeholder {
            position: relative;
            display: flex;
            width: calc(100% - 40px);
            min-height: 92px;
            padding: 18px 20px;
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
            width: 48px;
            height: 48px;
            align-items: center;
            justify-content: center;
            color: #0068b7;
            background: #fff;
            border-radius: 999px;
            box-shadow: 0 7px 16px rgba(15, 23, 42, 0.06);
          }

          .demo-placeholder-icon i {
            font-size: 25px;
            line-height: 1;
          }

          .demo-card-body {
            display: flex;
            flex: 1;
            padding: 16px 18px 18px;
            flex-direction: column;
          }

          .demo-tag {
            display: inline-flex;
            width: fit-content;
            min-height: 24px;
            margin-bottom: 12px;
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
            min-height: 50px;
            margin: 0 0 14px;
            color: #111827;
            font-size: 17px;
            font-weight: 900;
            line-height: 1.45;
          }

          .demo-button {
            display: inline-flex;
            width: 100%;
            min-height: 38px;
            margin-top: auto;
            align-items: center;
            justify-content: center;
            gap: 6px;
            color: #111827;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.34);
            border-radius: 999px;
            font-size: 13px;
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
            font-size: 17px;
            line-height: 1;
          }

          @media (max-width: 1023px) {
            .demo-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
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
              margin: 0 -20px 24px;
              padding: 0 20px 6px;
              scrollbar-width: none;
            }

            .demo-category-tabs::-webkit-scrollbar {
              display: none;
            }

            .demo-category-tab {
              flex: 0 0 auto;
            }

            .demo-grid {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .demo-title {
              min-height: 0;
            }

            .demo-card-body {
              padding: 15px 16px 17px;
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
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="demo-grid">
          {filteredSites.map((site) => (
            <article key={`${site.category}-${site.title}`} className="demo-card">
              <div
                className={`demo-visual ${
                  site.category === '飲食系'
                    ? 'demo-visual-food'
                    : site.category === '店舗・生活サービス'
                      ? 'demo-visual-service'
                      : site.category === '美容・健康'
                        ? 'demo-visual-beauty'
                        : 'demo-visual-specialty'
                }`}
              >
                {site.image ? (
                  <img src={site.image} alt={`${site.title}のデモサイト`} className="demo-image" loading="lazy" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
