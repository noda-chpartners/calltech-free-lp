import { useScrollReveal } from '@/hooks/useScrollReveal';

type DemoSite = {
  category: string;
  title: string;
  url: string;
  image: string;
  tagColor: 'blue' | 'sky' | 'green' | 'purple' | 'yellow';
};

const demoSites: DemoSite[] = [
  {
    category: '飲食系',
    title: '和食',
    url: 'https://hisui-ginza.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=high%20quality%20Japanese%20washoku%20restaurant%20website%20thumbnail%20elegant%20sashimi%20and%20seasonal%20Japanese%20course%20meal%20warm%20wood%20counter%20premium%20corporate%20web%20design%20mockup&width=720&height=460&seq=demo-washoku&orientation=landscape',
    tagColor: 'blue',
  },
  {
    category: '飲食系',
    title: 'アジアンキッチン',
    url: 'https://asian-kitchen-balen.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=modern%20asian%20kitchen%20restaurant%20website%20thumbnail%20colorful%20asian%20food%20plates%20warm%20restaurant%20interior%20clean%20professional%20web%20design%20mockup&width=720&height=460&seq=demo-asian&orientation=landscape',
    tagColor: 'blue',
  },
  {
    category: '飲食系',
    title: 'バー',
    url: 'https://bar-lumine.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20bar%20lounge%20website%20thumbnail%20cocktail%20glass%20dark%20wood%20counter%20warm%20lighting%20premium%20hospitality%20web%20design%20mockup&width=720&height=460&seq=demo-bar&orientation=landscape',
    tagColor: 'blue',
  },
  {
    category: '飲食系',
    title: 'イタリアン',
    url: 'https://italian-restaurant.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=Italian%20restaurant%20website%20thumbnail%20fresh%20pasta%20and%20wine%20bright%20dining%20interior%20clean%20modern%20corporate%20web%20design%20mockup&width=720&height=460&seq=demo-italian&orientation=landscape',
    tagColor: 'blue',
  },
  {
    category: '店舗・生活サービス',
    title: 'ペットサロン・トリミング',
    url: 'https://paws-bloom.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=pet%20grooming%20salon%20website%20thumbnail%20clean%20bright%20trimming%20salon%20small%20dog%20grooming%20table%20friendly%20service%20business%20web%20design%20mockup&width=720&height=460&seq=demo-pet&orientation=landscape',
    tagColor: 'sky',
  },
  {
    category: '美容・健康',
    title: 'サロン',
    url: 'https://private-beauty.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=private%20beauty%20salon%20website%20thumbnail%20soft%20clean%20treatment%20room%20cosmetic%20spa%20interior%20premium%20minimal%20web%20design%20mockup&width=720&height=460&seq=demo-beauty&orientation=landscape',
    tagColor: 'green',
  },
  {
    category: '美容・健康',
    title: 'メンズエステ',
    url: 'https://mens-salon2.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=mens%20esthetic%20salon%20website%20thumbnail%20modern%20luxury%20treatment%20room%20clean%20black%20and%20white%20premium%20beauty%20business%20web%20design%20mockup&width=720&height=460&seq=demo-mens&orientation=landscape',
    tagColor: 'green',
  },
  {
    category: '専門業種',
    title: '自動車整備・板金',
    url: 'https://tanaka-car-service.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=automotive%20repair%20and%20body%20shop%20website%20thumbnail%20clean%20garage%20mechanic%20tools%20car%20maintenance%20professional%20industrial%20web%20design%20mockup&width=720&height=460&seq=demo-car&orientation=landscape',
    tagColor: 'purple',
  },
  {
    category: '専門業種',
    title: '工業系',
    url: 'https://technoworks.pages.dev/',
    image:
      'https://readdy.ai/api/search-image?query=industrial%20manufacturing%20company%20website%20thumbnail%20factory%20technology%20machinery%20clean%20blue%20corporate%20B2B%20web%20design%20mockup&width=720&height=460&seq=demo-industrial&orientation=landscape',
    tagColor: 'purple',
  },
];

const categories = Array.from(new Set(demoSites.map((site) => site.category)));

export default function DemoSection() {
  const { ref, isVisible } = useScrollReveal();

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
            min-height: 34px;
            padding: 8px 15px;
            color: #0068b7;
            background: #fff;
            border: 1px solid rgba(0, 104, 183, 0.2);
            border-radius: 999px;
            font-size: 12px;
            font-weight: 900;
            line-height: 1;
            box-shadow: 0 7px 16px rgba(15, 23, 42, 0.04);
          }

          .demo-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
          }

          .demo-card {
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: 12px;
            box-shadow:
              0 12px 28px rgba(15, 23, 42, 0.07),
              0 2px 8px rgba(15, 23, 42, 0.03);
            transition: transform 180ms ease, box-shadow 180ms ease;
          }

          .demo-card:hover {
            transform: translateY(-2px);
            box-shadow:
              0 18px 34px rgba(15, 23, 42, 0.1),
              0 3px 10px rgba(15, 23, 42, 0.04);
          }

          .demo-image-frame {
            position: relative;
            aspect-ratio: 16 / 9;
            overflow: hidden;
            background:
              linear-gradient(135deg, rgba(255, 196, 0, 0.12), rgba(0, 104, 183, 0.12)),
              #f8fafc;
          }

          .demo-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 220ms ease;
          }

          .demo-card:hover .demo-image {
            transform: scale(1.025);
          }

          .demo-card-body {
            padding: 16px 18px 18px;
          }

          .demo-tag {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 24px;
            margin-bottom: 12px;
            padding: 5px 10px;
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

          .demo-tag-yellow {
            color: #111827;
            background: #ffc400;
          }

          .demo-title {
            margin: 0 0 15px;
            color: #111827;
            font-size: 17px;
            font-weight: 900;
            line-height: 1.45;
          }

          .demo-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            width: 100%;
            min-height: 38px;
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
          {categories.map((category) => (
            <span key={category} className="demo-category-tab">
              {category}
            </span>
          ))}
        </div>

        <div className="demo-grid">
          {demoSites.map((site) => (
            <article key={`${site.category}-${site.title}`} className="demo-card">
              <div className="demo-image-frame">
                <img src={site.image} alt={`${site.title}のデモサイト`} className="demo-image" loading="lazy" />
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
