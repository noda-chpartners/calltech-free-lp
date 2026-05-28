import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: 'ri-smartphone-line', label: 'レスポンシブ対応' },
  { icon: 'ri-palette-line', label: 'オリジナルデザイン' },
  { icon: 'ri-search-line', label: '基本SEO設定' },
  { icon: 'ri-mail-send-line', label: 'お問い合わせ導線' },
  { icon: 'ri-map-pin-line', label: 'Googleマップ連携' },
  { icon: 'ri-lock-line', label: 'SSL対応' },
];

const modalFeatures = [
  ...features,
  { icon: 'ri-file-list-3-line', label: '1ページ構成' },
  { icon: 'ri-device-line', label: 'スマホ最適化' },
  { icon: 'ri-store-2-line', label: '店舗情報掲載' },
  { icon: 'ri-layout-4-line', label: 'サービス内容掲載' },
  { icon: 'ri-image-edit-line', label: '画像・テキスト配置' },
  { icon: 'ri-upload-cloud-2-line', label: '公開作業' },
  { icon: 'ri-edit-2-line', label: '公開後1回修正' },
];

const recommendations = [
  'ホームページを持っていない、これから作りたい',
  'コストを抑えてWebで集客を始めたい',
  '名刺やチラシだけでは情報が伝えきれない',
  '店舗情報やサービス内容をWeb上でわかりやすく伝えたい',
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const modal = (
    <div className="services-modal-backdrop" onClick={() => setIsModalOpen(false)}>
      <div
        className="services-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="services-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="services-modal-close"
          aria-label="閉じる"
          onClick={() => setIsModalOpen(false)}
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>

        <h3 id="services-modal-title" className="services-modal-title">
          機能一覧
        </h3>
        <p className="services-modal-lead">
          無料範囲で対応できる機能をまとめています。内容により対応範囲が異なる場合があります。
        </p>

        <div className="modal-feature-grid">
          {modalFeatures.map((feature) => (
            <div key={feature.label} className="modal-feature-card">
              <span className="feature-icon" aria-hidden="true">
                <i className={feature.icon} />
              </span>
              <span className="feature-label">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
              0 12px 30px rgba(15, 23, 42, 0.055),
              0 2px 8px rgba(15, 23, 42, 0.03);
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
            padding: 0;
            color: #0068b7;
            background: transparent;
            border: 0;
            font-size: 14px;
            font-weight: 900;
            font-family: inherit;
            text-decoration: none;
            cursor: pointer;
            transition: color 180ms ease;
          }

          .services-detail-link i {
            transition: transform 180ms ease;
          }

          .services-detail-link:hover {
            color: #005ca3;
          }

          .services-detail-link:hover i {
            transform: translateX(3px);
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
            box-shadow: 0 5px 12px rgba(0, 104, 183, 0.16);
          }

          .recommend-check i {
            font-size: 14px;
            line-height: 1;
          }

          .services-modal-backdrop {
            position: fixed;
            inset: 0;
            z-index: 80;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 28px;
            background: rgba(15, 23, 42, 0.58);
            backdrop-filter: blur(4px);
          }

          .services-modal {
            position: relative;
            width: min(920px, 100%);
            max-height: min(82vh, 760px);
            overflow-y: auto;
            padding: 36px;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 22px;
            box-shadow:
              0 24px 60px rgba(15, 23, 42, 0.2),
              0 8px 22px rgba(15, 23, 42, 0.1);
          }

          .services-modal-close {
            position: absolute;
            top: 18px;
            right: 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            color: #0f172a;
            background: #f8fafc;
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: 999px;
            cursor: pointer;
            transition:
              background 180ms ease,
              color 180ms ease,
              transform 180ms ease;
          }

          .services-modal-close:hover {
            color: #0068b7;
            background: #eef6fc;
            transform: translateY(-1px);
          }

          .services-modal-close i {
            font-size: 22px;
            line-height: 1;
          }

          .services-modal-title {
            margin: 0 48px 12px 0;
            color: #0f172a;
            font-size: 26px;
            font-weight: 900;
            line-height: 1.35;
          }

          .services-modal-lead {
            max-width: 690px;
            margin: 0 0 26px;
            color: #475569;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.8;
          }

          .modal-feature-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }

          .modal-feature-card {
            display: flex;
            align-items: center;
            gap: 14px;
            min-height: 70px;
            padding: 18px 20px;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: 14px;
            box-shadow: 0 8px 20px rgba(15, 23, 42, 0.045);
          }

          .modal-feature-card .feature-icon {
            color: #0068b7;
            background: rgba(0, 104, 183, 0.06);
            border-radius: 12px;
          }

          @media (max-width: 1023px) {
            .services-inner {
              grid-template-columns: 1fr;
              gap: 42px;
            }

            .modal-feature-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
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

            .services-modal-backdrop {
              align-items: flex-start;
              padding: 18px;
              overflow-y: auto;
            }

            .services-modal {
              max-height: none;
              padding: 30px 20px 22px;
              border-radius: 18px;
            }

            .services-modal-title {
              margin-right: 44px;
              font-size: 23px;
            }

            .services-modal-lead {
              margin-bottom: 22px;
              font-size: 13px;
            }

            .modal-feature-grid {
              grid-template-columns: 1fr;
              gap: 10px;
            }

            .modal-feature-card {
              min-height: 64px;
              padding: 16px;
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

          <button type="button" className="services-detail-link" onClick={() => setIsModalOpen(true)}>
            機能の詳細を見る
            <i className="ri-arrow-right-s-line text-lg leading-none" aria-hidden="true" />
          </button>
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

      {isModalOpen && createPortal(modal, document.body)}
    </section>
  );
}
