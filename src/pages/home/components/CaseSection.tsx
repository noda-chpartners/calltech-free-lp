import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type DemoCategory =
  | '旅館'
  | '民泊'
  | '貸切宿・ゲストハウス'
  | '自動車販売・整備'
  | 'ジム・フィットネス'
  | '整体・マッサージ'
  | '法人・企業サイト'
  | 'ネイルサロン'
  | '雀荘';

type DemoFilter = 'すべて' | '宿泊' | '美容・健康' | '店舗・サービス' | '法人・専門業種';

type TagColor = 'blue' | 'sky' | 'green' | 'purple';

type DemoSite = {
  category: DemoCategory;
  title: string;
  url: string;
  image: string;
};

const demoSites: DemoSite[] = [
  {
    category: '旅館',
    title: '鶴峯館',
    url: 'https://kakuhoukan.pages.dev/',
    image: '/images/works/site01.png',
  },
  {
    category: '民泊',
    title: 'パルティーレ高砂',
    url: 'https://partire-takasago-hotel.pages.dev/',
    image: '/images/works/site02.png',
  },
  {
    category: '貸切宿・ゲストハウス',
    title: 'ICHI 縁',
    url: 'https://ichi-fuji.pages.dev/',
    image: '/images/works/site03.png',
  },
  {
    category: '自動車販売・整備',
    title: '中京トレーディング株式会社',
    url: 'https://chukyo-trading.pages.dev/',
    image: '/images/works/site04.png',
  },
  {
    category: 'ジム・フィットネス',
    title: 'フレックス湘南',
    url: 'https://flexshonan.pages.dev/',
    image: '/images/works/site05.png',
  },
  {
    category: '整体・マッサージ',
    title: 'ほぐし処らくっと',
    url: 'https://hogushi-rakutto.pages.dev/',
    image: '/images/works/site06.png',
  },
  {
    category: '法人・企業サイト',
    title: '合同会社N-ONE',
    url: 'https://n-one.pages.dev/',
    image: '/images/works/site07.png',
  },
  {
    category: 'ネイルサロン',
    title: 'La-Peache',
    url: 'https://la-peache.pages.dev/',
    image: '/images/works/site08.png',
  },
  {
    category: '雀荘',
    title: '麻雀スタジオMリーチ',
    url: 'https://m-reach.pages.dev/',
    image: '/images/works/site09.png',
  },
];

const filters: DemoFilter[] = ['すべて', '宿泊', '美容・健康', '店舗・サービス', '法人・専門業種'];

const filterGroupMap: Record<Exclude<DemoFilter, 'すべて'>, DemoCategory[]> = {
  宿泊: ['旅館', '民泊', '貸切宿・ゲストハウス'],
  '美容・健康': ['ジム・フィットネス', '整体・マッサージ', 'ネイルサロン'],
  '店舗・サービス': ['雀荘'],
  '法人・専門業種': ['自動車販売・整備', '法人・企業サイト'],
};

const groupTagColorMap: Record<Exclude<DemoFilter, 'すべて'>, TagColor> = {
  宿泊: 'blue',
  '美容・健康': 'green',
  '店舗・サービス': 'sky',
  '法人・専門業種': 'purple',
};

const getTagColor = (category: DemoCategory): TagColor => {
  const group = (Object.keys(filterGroupMap) as Exclude<DemoFilter, 'すべて'>[]).find((key) =>
    filterGroupMap[key].includes(category),
  );

  return group ? groupTagColorMap[group] : 'blue';
};

const visualToneMap: Record<DemoCategory, string> = {
  旅館: 'demo-visual-food',
  民泊: 'demo-visual-food',
  '貸切宿・ゲストハウス': 'demo-visual-service',
  '自動車販売・整備': 'demo-visual-specialty',
  'ジム・フィットネス': 'demo-visual-beauty',
  '整体・マッサージ': 'demo-visual-beauty',
  '法人・企業サイト': 'demo-visual-specialty',
  ネイルサロン: 'demo-visual-beauty',
  雀荘: 'demo-visual-service',
};

export default function CaseSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<DemoFilter>('すべて');
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const filteredSites =
    activeFilter === 'すべて'
      ? demoSites
      : demoSites.filter((site) => filterGroupMap[activeFilter].includes(site.category));

  const changeFilter = (filter: DemoFilter) => {
    setActiveFilter(filter);
  };

  const markImageFailed = (image: string) => {
    setFailedImages((current) => (current.includes(image) ? current : [...current, image]));
  };

  return (
    <section
      id="case"
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
            min-width: 0;
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

          @media (max-width: 1023px) {
            .demo-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .demo-title {
              min-height: 0;
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

            .demo-grid {
              gap: 16px;
            }
          }
        `}
      </style>

      <div className="demo-inner">
        <h3 className="demo-heading">制作事例</h3>
        <p className="demo-lead">実際に制作したホームページの一部をご紹介します。</p>

        <div className="demo-category-tabs" aria-label="サイトのカテゴリ">
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

        <div className="demo-grid">
          {filteredSites.map((site) => {
            const hasImage = Boolean(site.image) && !failedImages.includes(site.image);

            return (
              <article key={`${site.category}-${site.title}-${site.url}`} className="demo-card">
                <div className={`demo-visual ${visualToneMap[site.category]}`}>
                  {hasImage ? (
                    <img
                      src={site.image}
                      alt={`${site.title}のサイトのファーストビュー`}
                      className="demo-image"
                      loading="lazy"
                      onError={() => markImageFailed(site.image)}
                    />
                  ) : (
                    <div className="demo-placeholder" aria-hidden="true">
                      <p className="demo-placeholder-text">
                        {site.title}
                        <span>{site.category}サイト</span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="demo-card-body">
                  <span className={`demo-tag demo-tag-${getTagColor(site.category)}`}>{site.category}</span>
                  <h4 className="demo-title">{site.title}</h4>
                  <a href={site.url} className="demo-button" target="_blank" rel="noopener noreferrer">
                    サイトを見る
                    <i className="ri-external-link-line" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
