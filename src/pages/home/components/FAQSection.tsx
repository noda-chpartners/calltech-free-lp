import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    question: '本当にホームページ制作費は0円ですか？',
    answer:
      '弊社取り扱いの対象サービスをご契約のお客様は、対応範囲内で初期費用・月額費用・サーバー費用すべて0円でご提供します。',
  },
  {
    question: 'どのような業種に対応していますか？',
    answer:
      '飲食店、美容サロン、店舗サービス、専門業種など、店舗・中小法人向けのホームページ制作に対応しています。',
  },
  {
    question: 'スマートフォン表示にも対応していますか？',
    answer: 'はい。スマートフォンやタブレットでも見やすいレスポンシブ対応のホームページとして制作します。',
  },
  {
    question: '相談や見積りだけでも可能ですか？',
    answer: '可能です。ご相談・お見積りは無料ですので、まずはお気軽にお問い合わせください。',
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="faq"
      ref={ref}
      className={`faq-section transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <style>
        {`
          .faq-section {
            width: 100%;
            padding: 66px 20px 76px;
            background: #fff;
          }

          .faq-inner {
            width: 100%;
            max-width: 960px;
            margin: 0 auto;
          }

          .faq-heading {
            margin: 0 0 30px;
            color: #0f172a;
            font-size: 28px;
            font-weight: 900;
            line-height: 1.45;
            text-align: center;
            letter-spacing: 0.03em;
          }

          .faq-list {
            display: grid;
            gap: 14px;
          }

          .faq-item {
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: 12px;
            box-shadow:
              0 10px 24px rgba(15, 23, 42, 0.06),
              0 2px 7px rgba(15, 23, 42, 0.03);
            padding: 20px 22px;
          }

          .faq-question {
            display: flex;
            gap: 12px;
            margin: 0 0 9px;
            align-items: flex-start;
            color: #111827;
            font-size: 16px;
            font-weight: 900;
            line-height: 1.55;
          }

          .faq-question::before {
            content: 'Q';
            display: inline-flex;
            flex: 0 0 auto;
            width: 28px;
            height: 28px;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: #0068b7;
            border-radius: 999px;
            font-size: 14px;
            line-height: 1;
          }

          .faq-answer {
            margin: 0;
            padding-left: 40px;
            color: #475569;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.85;
          }

          @media (max-width: 767px) {
            .faq-section {
              padding: 54px 20px 62px;
            }

            .faq-heading {
              font-size: 24px;
            }

            .faq-item {
              padding: 18px 16px;
            }

            .faq-answer {
              padding-left: 0;
            }
          }
        `}
      </style>

      <div className="faq-inner">
        <h3 className="faq-heading">よくある質問</h3>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h4 className="faq-question">{faq.question}</h4>
              <p className="faq-answer">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
