import { useScrollReveal } from '@/hooks/useScrollReveal';

const items = [
  {
    icon: 'ri-computer-line',
    title: '制作費',
    description: 'デザイン制作からコーディングまで\nすべて0円でご提供します。',
  },
  {
    icon: 'ri-calendar-line',
    title: '月額費用',
    description: '月額利用料は一切かかりません。\n維持費の心配なく運用いただけます。',
  },
  {
    icon: 'ri-server-line',
    title: 'サーバー費用',
    description: 'サーバー費用も0円。\n安全・安定した環境で運用できます。\n※対応範囲内の場合',
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="pricing"
      ref={ref}
      className={`pricing-section w-full bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <style>
        {`
          .pricing-section {
            padding: 56px 20px 64px;
          }

          .pricing-inner {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
          }

          .pricing-heading {
            margin: 0 0 42px;
            color: #0f172a;
            font-size: 30px;
            font-weight: 900;
            line-height: 1.55;
            letter-spacing: 0.02em;
            text-align: center;
          }

          .pricing-heading-zero {
            margin: 0 4px;
            color: #ffc400;
            font-size: 50px;
            line-height: 1;
            vertical-align: -0.06em;
          }

          .pricing-card-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 28px;
          }

          .pricing-card {
            min-height: 178px;
            padding: 34px 34px 30px;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 24px;
            box-shadow:
              0 14px 34px rgba(15, 23, 42, 0.06),
              0 2px 8px rgba(15, 23, 42, 0.03);
          }

          .pricing-card-body {
            display: flex;
            align-items: flex-start;
            gap: 26px;
          }

          .pricing-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 72px;
            width: 72px;
            height: 72px;
            color: #ffc400;
            background: #fff8dd;
            border-radius: 18px;
            box-shadow: inset 0 -2px 0 rgba(255, 196, 0, 0.1), 0 6px 14px rgba(180, 122, 0, 0.05);
          }

          .pricing-icon i {
            font-size: 44px;
            line-height: 1;
          }

          .pricing-content {
            flex: 1;
            min-width: 0;
          }

          .pricing-title-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 10px;
          }

          .pricing-title {
            margin: 7px 0 0;
            color: #0f172a;
            font-size: 17px;
            font-weight: 900;
            line-height: 1.4;
          }

          .pricing-price {
            display: flex;
            align-items: baseline;
            flex: 0 0 auto;
            margin: 0;
            color: #0068b7;
          }

          .pricing-price-number {
            font-size: 64px;
            font-weight: 900;
            line-height: 0.9;
            letter-spacing: -0.04em;
          }

          .pricing-price-unit {
            margin-left: 4px;
            font-size: 22px;
            font-weight: 900;
          }

          .pricing-description {
            margin: 20px 0 0;
            color: #1f2937;
            font-size: 12px;
            font-weight: 700;
            line-height: 1.9;
            text-align: center;
            white-space: pre-line;
          }

          @media (max-width: 1023px) {
            .pricing-card-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 767px) {
            .pricing-section {
              padding: 48px 20px 56px;
            }

            .pricing-heading {
              margin-bottom: 30px;
              font-size: 24px;
            }

            .pricing-heading-zero {
              font-size: 42px;
            }

            .pricing-card-grid {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .pricing-card {
              padding: 28px 24px;
            }

            .pricing-card-body {
              gap: 18px;
            }

            .pricing-icon {
              flex-basis: 58px;
              width: 58px;
              height: 58px;
              border-radius: 16px;
            }

            .pricing-icon i {
              font-size: 34px;
            }

            .pricing-title-row {
              gap: 12px;
            }

            .pricing-price-number {
              font-size: 54px;
            }
          }
        `}
      </style>

      <div className="pricing-inner">
        <h2 className="pricing-heading">
          ホームページ制作にかかる費用を、まとめて
          <span className="pricing-heading-zero">0</span>
          円に
        </h2>

        <div className="pricing-card-grid">
          {items.map((item) => (
            <article key={item.title} className="pricing-card">
              <div className="pricing-card-body">
                <div className="pricing-icon">
                  <i className={item.icon} aria-hidden="true" />
                </div>

                <div className="pricing-content">
                  <div className="pricing-title-row">
                    <h3 className="pricing-title">{item.title}</h3>
                    <p className="pricing-price">
                      <span className="pricing-price-number">0</span>
                      <span className="pricing-price-unit">円</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="pricing-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
