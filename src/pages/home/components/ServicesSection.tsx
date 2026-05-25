import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: 'ri-smartphone-line', label: 'レスポンシブ対応' },
  { icon: 'ri-palette-line', label: 'オリジナルデザイン' },
  { icon: 'ri-search-line', label: '基本SEO設定' },
  { icon: 'ri-mail-send-line', label: 'お問い合わせ導線' },
  { icon: 'ri-map-pin-line', label: 'Googleマップ連携' },
  { icon: 'ri-lock-line', label: 'SSL対応' },
];

const recommendations = [
  'ホームページを持っていない、これから作りたい',
  'コストを抑えてWebで集客を始めたい',
  '名刺やチラシだけでは情報が伝えきれない',
  '店舗情報やサービス内容をWeb上でわかりやすく伝えたい',
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref}
      className={`services-section transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <style>
        {`
          .services-section {
            width: 100%;
            padding: 68px 20px 76px;
            background: #fff;
          }

          .services-inner {
            display: grid;
            grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
            gap: 64px;
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
            align-items: start;
          }

          .services-panel,
          .recommend-panel {
            min-width: 0;
          }

          .services-title {
            margin: 0 0 22px;
            color: #0f172a;
            font-size: 24px;
            font-weight: 900;
            line-height: 1.45;
            letter-spacing: 0.02em;
            text-decoration-line: underline;
            text-decoration-color: rgba(0, 104, 183, 0.26);
            text-decoration-thickness: 0.28em;
            text-underline-offset: -0.1em;
            text-decoration-skip-ink: none;
          }

          .feature-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0;
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.12);
            border-radius: 14px;
            box-shadow:
              0 20px 44px rgba(15, 23, 42, 0.1),
              0 4px 12px rgba(15, 23, 42, 0.05);
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 14px;
            min-height: 82px;
            padding: 20px 22px;
            border-right: 1px solid rgba(15, 23, 42, 0.08);
            border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          }

          .feature-item:nth-child(3n) {
            border-right: 0;
          }

          .feature-item:nth-child(n + 4) {
            border-bottom: 0;
          }

          .feature-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 34px;
            width: 34px;
            height: 34px;
            color: #0068b7;
          }

          .feature-icon i {
            font-size: 30px;
            line-height: 1;
          }

          .feature-label {
            color: #111827;
            font-size: 13px;
            font-weight: 800;
            line-height: 1.5;
          }

          .services-detail-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 24px;
            color: #0068b7;
            font-size: 14px;
            font-weight: 900;
            text-decoration: none;
          }

          .recommend-list {
            display: grid;
            gap: 18px;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .recommend-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            color: #111827;
            font-size: 14px;
            font-weight: 800;
            line-height: 1.75;
          }

          .recommend-check {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 22px;
            width: 22px;
            height: 22px;
            margin-top: 2px;
            color: #fff;
            background: #0068b7;
            border-radius: 999px;
            box-shadow: 0 9px 18px rgba(0, 104, 183, 0.28);
          }

          .recommend-check i {
            font-size: 14px;
            line-height: 1;
          }

          @media (max-width: 1023px) {
            .services-inner {
              grid-template-columns: 1fr;
              gap: 42px;
            }
          }

          @media (max-width: 767px) {
            .services-section {
              padding: 54px 20px 62px;
            }

            .services-title {
              margin-bottom: 18px;
              font-size: 22px;
            }

            .feature-grid {
              grid-template-columns: 1fr;
              border-radius: 18px;
            }

            .feature-item {
              min-height: 72px;
              border-right: 0;
              border-bottom: 1px solid rgba(15, 23, 42, 0.08);
            }

            .feature-item:nth-child(n + 4) {
              border-bottom: 1px solid rgba(15, 23, 42, 0.08);
            }

            .feature-item:last-child {
              border-bottom: 0;
            }

            .recommend-list {
              gap: 16px;
            }
          }
        `}
      </style>

      <div className="services-inner">
        <div className="services-panel">
          <h3 className="services-title">サービスに含まれる内容</h3>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.label} className="feature-item">
                <span className="feature-icon" aria-hidden="true">
                  <i className={feature.icon} />
                </span>
                <span className="feature-label">{feature.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="services-detail-link">
            機能の詳細を見る
            <i className="ri-arrow-right-s-line text-lg leading-none" aria-hidden="true" />
          </a>
        </div>

        <div className="recommend-panel">
          <h3 className="services-title">こんな方におすすめ</h3>
          <ul className="recommend-list">
            {recommendations.map((recommendation) => (
              <li key={recommendation} className="recommend-item">
                <span className="recommend-check" aria-hidden="true">
                  <i className="ri-check-line" />
                </span>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
