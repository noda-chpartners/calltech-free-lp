import { useScrollReveal } from '@/hooks/useScrollReveal';

const operatorImageUrl =
  'https://readdy.ai/api/search-image?query=A%20friendly%20young%20Asian%20female%20customer%20support%20representative%20wearing%20a%20headset%20microphone%20smiling%20warmly%20while%20looking%20at%20camera%20professional%20call%20center%20office%20background%20with%20soft%20bokeh%20corporate%20communication%20service%20concept%20warm%20inviting%20lighting%20and%20natural%20makeup&width=500&height=400&seq=7&orientation=landscape';

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
            padding: 46px 20px 0;
            background: #fff;
          }

          .cta-banner {
            display: grid;
            grid-template-columns: 280px minmax(0, 1fr) 470px;
            gap: 28px;
            align-items: center;
            width: 100%;
            max-width: 1180px;
            min-height: 122px;
            margin: 0 auto;
            overflow: hidden;
            background: linear-gradient(135deg, #ffc400 0%, #ffb800 56%, #ffcf32 100%);
            border-radius: 18px;
            box-shadow: 0 18px 42px rgba(180, 122, 0, 0.18);
          }

          .cta-image-frame {
            align-self: stretch;
            height: 122px;
            min-height: 122px;
            overflow: hidden;
          }

          .cta-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
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
          }

          .cta-text {
            margin: 0;
            color: #111827;
            font-size: 13px;
            font-weight: 700;
            line-height: 1.8;
          }

          .cta-actions {
            display: grid;
            grid-template-columns: 200px minmax(0, 1fr);
            gap: 20px;
            align-items: center;
            padding: 22px 26px 22px 0;
          }

          .cta-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            min-height: 52px;
            padding: 0 24px;
            color: #fff;
            background: #0068b7;
            border-radius: 999px;
            box-shadow: 0 12px 24px rgba(0, 104, 183, 0.24);
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
            min-width: 0;
            padding-left: 26px;
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
            font-size: 25px;
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: 0.02em;
            white-space: nowrap;
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

          @media (max-width: 767px) {
            .cta-section {
              padding: 36px 20px 0;
            }

            .cta-banner {
              grid-template-columns: 1fr;
              gap: 0;
              border-radius: 18px;
            }

            .cta-image-frame {
              height: 170px;
              min-height: 0;
            }

            .cta-copy {
              padding: 24px 24px 14px;
              text-align: center;
            }

            .cta-title {
              font-size: 23px;
            }

            .cta-actions {
              grid-template-columns: 1fr;
              gap: 18px;
              padding: 0 24px 28px;
              text-align: center;
            }

            .cta-phone {
              padding-left: 0;
              border-left: 0;
            }

            .cta-phone-number {
              justify-content: center;
              font-size: 26px;
            }
          }
        `}
      </style>

      <div className="cta-banner">
        <div className="cta-image-frame">
          <img src={operatorImageUrl} alt="お問い合わせに対応するオペレーター" className="cta-image" />
        </div>

        <div className="cta-copy">
          <h3 className="cta-title">まずはお気軽にご相談ください</h3>
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
