import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'ヒアリング', desc: 'ご要望や事業内容をお伺いします。' },
  { num: '02', title: '情報確認', desc: '掲載する文章・画像など必要情報をご提出いただきます。' },
  { num: '03', title: '制作', desc: '内容をもとにホームページを制作します。' },
  { num: '04', title: 'ご確認', desc: '完成したサイトをご確認いただき、修正対応します。' },
  { num: '05', title: '公開', desc: 'ご確認後、Web上に公開して運用開始！' },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`process-section transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <style>
        {`
          .process-section {
            width: 100%;
            padding: 70px 20px 78px;
            background: #f8fafc;
          }

          .process-inner {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
          }

          .process-heading {
            margin: 0 0 36px;
            color: #0f172a;
            font-size: 26px;
            font-weight: 900;
            line-height: 1.45;
            text-align: center;
            letter-spacing: 0.03em;
          }

          .process-list {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 18px;
            align-items: stretch;
          }

          .process-item {
            position: relative;
            min-width: 0;
          }

          .process-card {
            height: 100%;
            min-height: 154px;
            padding: 24px 20px 22px;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 14px;
            box-shadow:
              0 12px 30px rgba(15, 23, 42, 0.055),
              0 2px 8px rgba(15, 23, 42, 0.03);
          }

          .process-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            margin-bottom: 14px;
            color: #fff;
            background: #0068b7;
            border-radius: 999px;
            font-size: 15px;
            font-weight: 900;
            line-height: 1;
            box-shadow:
              0 7px 16px rgba(0, 104, 183, 0.18),
              inset 0 -2px 0 rgba(0, 0, 0, 0.06);
          }

          .process-title {
            margin: 0 0 8px;
            color: #111827;
            font-size: 16px;
            font-weight: 900;
            line-height: 1.45;
          }

          .process-description {
            margin: 0;
            color: #374151;
            font-size: 12px;
            font-weight: 700;
            line-height: 1.75;
          }

          .process-arrow {
            position: absolute;
            top: 50%;
            right: -23px;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            color: #111827;
            transform: translateY(-50%);
          }

          .process-arrow i {
            font-size: 24px;
            line-height: 1;
          }

          @media (max-width: 1023px) {
            .process-list {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 18px 22px;
            }

            .process-arrow {
              display: none;
            }
          }

          @media (max-width: 767px) {
            .process-section {
              padding: 56px 20px 64px;
            }

            .process-heading {
              margin-bottom: 28px;
              font-size: 24px;
            }

            .process-list {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            .process-card {
              min-height: 0;
              padding: 22px 22px 20px;
            }
          }
        `}
      </style>

      <div className="process-inner">
        <h3 className="process-heading">制作の流れ</h3>
        <div className="process-list">
          {steps.map((step, index) => (
            <div key={step.num} className="process-item">
              <article className="process-card">
                <span className="process-number">{step.num}</span>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-description">{step.desc}</p>
              </article>

              {index < steps.length - 1 && (
                <span className="process-arrow" aria-hidden="true">
                  <i className="ri-arrow-right-s-line" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
