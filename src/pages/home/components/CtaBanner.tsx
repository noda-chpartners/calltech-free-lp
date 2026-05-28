import { useScrollReveal } from '@/hooks/useScrollReveal';

const operatorImageUrl = '/images/CTA-picture.png';

export default function CtaBanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`cta-section transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <style>
        {`
          .cta-section {
            width: 100%;
            padding: 46px 20px 54px;
            background: linear-gradient(180deg, #fff 0%, #fff 62%, #f8fafc 100%);
          }

          .cta-banner {
            display: grid;
            grid-template-columns: 240px minmax(280px, 1fr) minmax(440px, 470px);
            gap: 20px;
            align-items: center;
            width: 100%;
            max-width: 1180px;
            min-height: 122px;
            margin: 0 auto;
            overflow: hidden;
            background: linear-gradient(135deg, #ffc400 0%, #ffb800 56%, #ffcf32 100%);
            border-radius: 18px;
            box-shadow:
              0 16px 36px rgba(180, 122, 0, 0.13),
              0 2px 8px rgba(15, 23, 42, 0.04);
          }

          .cta-image-frame {
            position: relative;
            align-self: stretch;
            height: 122px;
            min-height: 122px;
            overflow: hidden;
            background: #ffc400;
          }

          .cta-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 42%;
            transform: scaleX(-1);
          }

          .cta-copy {
            min-width: 0;
            padding: 24px 0;
          }

          .cta-title {
            margin: 0 0 10px;
            color: #111827;
            font-size: 25px;
            font-weight: 900;
            line-height: 1.45;
            letter-spacing: 0.02em;
            white-space: nowrap;
            word-break: keep-all;
          }

          .cta-title-keep {
            white-space: nowrap;
          }

          .cta-text {
            margin: 0;
            color: #111827;
            font-size: 13px;
            font-weight: 700;
            line-height: 1.8;
            word-break: keep-all;
          }

          .cta-actions {
            display: grid;
            grid-template-columns: 168px minmax(234px, 1fr);
            gap: 14px;
            align-items: center;
            padding: 22px 24px 22px 0;
          }

          .cta-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            min-height: 52px;
            padding: 0 20px;
            color: #fff;
            background: #0068b7;
            border-radius: 999px;
            box-shadow:
              0 9px 20px rgba(0, 104, 183, 0.18),
              inset 0 -2px 0 rgba(0, 0, 0, 0.07);
            font-size: 15px;
            font-weight: 900;
            text-decoration: none;
            white-space: nowrap;
            transition: background 180ms ease, transform 180ms ease;
          }

          .cta-button:hover {
            background: #005ca3;
            transform: translateY(-1px);
          }

          .cta-phone {
            min-width: max-content;
            padding-left: 20px;
            border-left: 1px solid rgba(17, 24, 39, 0.18);
          }

          .cta-phone-label {
            margin: 0 0 4px;
            color: #111827;
            font-size: 12px;
            font-weight: 900;
            line-height: 1.4;
          }

          .cta-phone-number {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0;
            color: #0068b7;
            font-size: clamp(22px, 2vw, 25px);
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: 0.02em;
            white-space: nowrap;
            overflow: visible;
          }

          .cta-phone-number i {
            font-size: 24px;
            line-height: 1;
          }

          .cta-hours {
            margin: 6px 0 0;
            color: #111827;
            font-size: 12px;
            font-weight: 800;
            line-height: 1.4;
          }

          @media (max-width: 1100px) {
            .cta-banner {
              grid-template-columns: 220px minmax(0, 1fr);
              gap: 26px;
            }

            .cta-image-frame {
              height: 150px;
            }

            .cta-actions {
              grid-column: 1 / -1;
              grid-template-columns: minmax(180px, 240px) 1fr;
              padding: 0 28px 28px;
            }
          }

          @media (max-width: 900px) {
            .cta-banner {
              grid-template-columns: 1fr;
              gap: 0;
            }

            .cta-image-frame {
              height: 172px;
              min-height: 0;
            }

            .cta-image {
              object-position: center 36%;
            }

            .cta-copy {
              padding: 24px 28px 12px;
              text-align: center;
            }

            .cta-title {
              white-space: normal;
            }

            .cta-actions {
              grid-template-columns: minmax(180px, 240px) minmax(260px, 1fr);
              padding: 0 28px 28px;
            }
          }

          @media (max-width: 767px) {
            .cta-section {
              padding: 38px 20px 38px;
            }

            .cta-banner {
              grid-template-columns: 1fr;
              gap: 0;
              border-radius: 18px;
            }

            .cta-image-frame {
              height: 156px;
              min-height: 0;
            }

            .cta-image {
              object-position: center 34%;
            }

            .cta-copy {
              padding: 24px 22px 12px;
              text-align: center;
            }

            .cta-title {
              font-size: 23px;
              line-height: 1.5;
              white-space: normal;
            }

            .cta-actions {
              grid-template-columns: 1fr;
              gap: 16px;
              padding: 0 22px 28px;
              text-align: center;
            }

            .cta-button {
              width: 100%;
              min-height: 50px;
            }

            .cta-phone {
              min-width: 0;
              padding: 16px 0 0;
              border-left: 0;
              border-top: 1px solid rgba(17, 24, 39, 0.16);
            }

            .cta-phone-number {
              justify-content: center;
              font-size: 25px;
            }

            .cta-hours {
              margin-top: 7px;
            }
          }
        `}
      </style>

      <div className="cta-banner">
        <div className="cta-image-frame">
          <img src={operatorImageUrl} alt="お問い合わせに対応するオペレーター" className="cta-image" />
        </div>

        <div className="cta-copy">
          <h3 className="cta-title">
            まずはお気軽に<wbr />
            <span className="cta-title-keep">ご相談ください</span>
          </h3>
          <p className="cta-text">ご相談・お見積りは無料です。お気軽にお問い合わせください。</p>
        </div>

        <div className="cta-actions">
          <a href="#" className="cta-button">
            無料で相談する
            <i className="ri-arrow-right-s-line text-xl leading-none" aria-hidden="true" />
          </a>

          <div className="cta-phone">
            <p className="cta-phone-label">お電話でのお問い合わせ</p>
            <p className="cta-phone-number">
              <i className="ri-phone-line" aria-hidden="true" />
              03-6384-7760
            </p>
            <p className="cta-hours">受付時間 10:00-19:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
