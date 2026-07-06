import { useEffect } from 'react';

import Navbar from './home/components/Navbar';
import Footer from './home/components/Footer';

type Article = {
  title: string;
  intro?: string;
  items?: string[];
};

const articles: Article[] = [
  {
    title: '第1条（適用）',
    items: [
      '本規約は、本サービスの利用に関する当社と利用者との間の一切の関係に適用されます。',
      '利用者は、本サービスをお申し込みいただいた時点で、本規約の内容に同意したものとみなされます。',
    ],
  },
  {
    title: '第2条（サービス内容）',
    items: [
      '本サービスは、当社所定の対象サービス（電気の供給契約等をいいます。以下「対象サービス」といいます）をご契約いただいたお客様に対し、ホームページの制作・公開・運用を無料で提供するものです。',
      '本サービスに含まれる内容および対応範囲は、当社が別途定める仕様の範囲内とします。',
    ],
  },
  {
    title: '第3条（提供条件）',
    items: [
      '本サービスによるホームページの公開は、利用者による対象サービスのお切り替え（供給開始）の完了を条件とします。お切り替えが完了しない場合、ホームページを公開することはできません。',
      '利用者が対象サービスの供給開始日から1年以内に対象サービスを解約された場合、当社はホームページの公開を停止することがあります。',
    ],
  },
  {
    title: '第4条（利用料金）',
    items: [
      '本サービスに含まれる制作費・月額費用・サーバー費用は無料とします。',
      '本規約および当社所定の仕様に定める対応範囲を超える作業・機能・オプション等をご希望の場合は、別途有料での対応となることがあります。',
    ],
  },
  {
    title: '第5条（制作および修正）',
    items: [
      'ホームページの制作は、利用者からご提出いただいた情報・素材にもとづいて行います。',
      '修正のお申し込みは、公開前は3回まで、公開後は本サービス（対象サービスを含む）を継続してご利用いただいている期間に限り年2回までとします。',
      '公開後の修正は、軽微なテキストの差し替えに限ります。掲載する文章・原稿は利用者にてご用意いただくものとし、当社が文案を作成・検討する対応は本サービスの範囲外とします。',
      'デザインの変更、ページの追加、機能の追加等は、本サービスの範囲外とします。',
      '修正のお申し込みは、メールまたはお電話にて承ります。反映までの目安は10営業日です。',
    ],
  },
  {
    title: '第6条（公開先・ドメイン）',
    items: [
      'ホームページの公開先は、当社が用意する無料のURL（〇〇.pages.dev）とします。',
      '利用者専用の独自ドメイン（〇〇.co.jp 等）の取得・設定は、本サービスの範囲外とします。',
    ],
  },
  {
    title: '第7条（利用者の責任）',
    items: [
      '掲載する文章・写真・ロゴ・その他の素材（以下「掲載素材」といいます）は、利用者にてご提供いただくものとします。ご提供がない場合、当社の判断によりフリー素材等で代替することがあります。',
      '掲載素材の著作権・肖像権・商標権その他の権利について、当社が権利者から必要な許諾を得ているものとし、これらに起因して第三者との間で紛争が生じた場合、利用者の責任と負担において解決するものとします。',
      '公開前の内容確認をもって、利用者が掲載内容に同意したものとみなします。公開後、掲載内容の誤記・事実誤り等に起因して生じた損害について、当社は責任を負いません。',
    ],
  },
  {
    title: '第8条（禁止事項）',
    intro:
      '利用者は、本サービスの利用にあたり、以下の行為を行ってはならないものとします。当該行為が判明した場合、当社は事前の通知なくホームページの公開を停止することができます。',
    items: [
      '法令または公序良俗に違反する行為',
      '第三者の著作権・肖像権・商標権その他の権利を侵害する行為',
      '第三者を誹謗中傷し、または名誉・信用を毀損する行為',
      '虚偽または誤解を招く情報を掲載する行為',
      'その他、当社が不適切と判断する行為',
    ],
  },
  {
    title: '第9条（効果の非保証）',
    intro:
      '当社は、本サービスにより提供するホームページについて、集客・検索順位・アクセス数・問い合わせ件数その他一切の成果を保証するものではありません。',
  },
  {
    title: '第10条（対応範囲外の機能）',
    intro:
      '予約機能、EC（オンライン販売）機能、ブログ等の更新機能その他の動的機能は、本サービスの対応範囲外とします。これらをご希望の場合は、別途ご相談ください。',
  },
  {
    title: '第11条（解約・公開停止およびデータの取り扱い）',
    items: [
      '第3条または第8条に定める事由その他当社所定の事由が生じた場合、当社はホームページの公開を停止することがあります。',
      '本サービスの終了またはホームページの公開停止に際し、当社が制作したホームページのデータ・ソースコード等を利用者または第三者のサーバーへ移管・引き渡すことはできません。',
    ],
  },
  {
    title: '第12条（免責事項）',
    items: [
      '当社は、本サービスに関して利用者に生じた損害について、当社の故意または重大な過失による場合を除き、責任を負わないものとします。',
      '通信回線やシステムの障害、天災地変その他当社の責によらない事由により本サービスの提供が遅延・中断した場合、当社は責任を負わないものとします。',
    ],
  },
  {
    title: '第13条（本規約の変更）',
    intro:
      '当社は、必要と判断した場合には、利用者に通知することなく本規約を変更することができるものとします。変更後の本規約は、当社が本サービスのページ上に掲示した時点から効力を生じるものとします。',
  },
  {
    title: '第14条（準拠法・管轄）',
    items: [
      '本規約の解釈にあたっては、日本法を準拠法とします。',
      '本サービスに関して当社と利用者との間で紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。',
    ],
  },
];

export default function Terms() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.title = '利用規約｜株式会社Calltech';
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      <section className="terms-section">
        <style>
          {`
            .terms-section {
              width: 100%;
              padding: 128px 20px 72px;
              background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            }

            .terms-inner {
              width: 100%;
              max-width: 880px;
              margin: 0 auto;
            }

            .terms-eyebrow {
              margin: 0 0 12px;
              color: #0068b7;
              font-size: 13px;
              font-weight: 900;
              letter-spacing: 0.22em;
              text-transform: uppercase;
            }

            .terms-title {
              margin: 0 0 14px;
              color: #111827;
              font-size: 34px;
              font-weight: 900;
              line-height: 1.35;
              letter-spacing: 0.02em;
            }

            .terms-subtitle {
              margin: 0 0 32px;
              color: #4b5563;
              font-size: 15px;
              font-weight: 700;
              line-height: 1.7;
            }

            .terms-intro {
              margin: 0 0 40px;
              padding: 22px 24px;
              background: #ffffff;
              border: 1px solid rgba(15, 23, 42, 0.08);
              border-radius: 14px;
              box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
              color: #1f2937;
              font-size: 14px;
              font-weight: 700;
              line-height: 1.9;
            }

            .terms-article {
              margin: 0 0 28px;
            }

            .terms-article-title {
              margin: 0 0 14px;
              padding: 0 0 10px;
              border-bottom: 2px solid #ffc400;
              color: #111827;
              font-size: 18px;
              font-weight: 900;
              line-height: 1.45;
              letter-spacing: 0.02em;
            }

            .terms-article-intro {
              margin: 0 0 12px;
              color: #1f2937;
              font-size: 14px;
              font-weight: 700;
              line-height: 1.9;
            }

            .terms-list {
              display: grid;
              gap: 10px;
              margin: 0;
              padding: 0;
              list-style: none;
            }

            .terms-list-item {
              position: relative;
              padding-left: 20px;
              color: #1f2937;
              font-size: 14px;
              font-weight: 700;
              line-height: 1.9;
            }

            .terms-list-item::before {
              content: '';
              position: absolute;
              top: 12px;
              left: 4px;
              width: 8px;
              height: 8px;
              background: #ffc400;
              border-radius: 999px;
            }

            .terms-meta {
              margin: 40px 0 0;
              padding: 24px 0 0;
              border-top: 1px solid rgba(15, 23, 42, 0.08);
              color: #4b5563;
              font-size: 13px;
              font-weight: 700;
              line-height: 1.85;
            }

            .terms-meta-date {
              margin: 0 0 14px;
              color: #111827;
              font-size: 14px;
              font-weight: 900;
            }

            .terms-meta-company {
              margin: 0;
              color: #111827;
              font-size: 15px;
              font-weight: 900;
            }

            @media (max-width: 767px) {
              .terms-section {
                padding: 108px 18px 56px;
              }

              .terms-title {
                font-size: 26px;
              }

              .terms-subtitle {
                font-size: 14px;
              }

              .terms-intro {
                padding: 18px 18px;
                font-size: 13px;
              }

              .terms-article-title {
                font-size: 16px;
              }

              .terms-article-intro,
              .terms-list-item {
                font-size: 13px;
              }
            }
          `}
        </style>

        <div className="terms-inner">
          <p className="terms-eyebrow">TERMS OF USE</p>
          <h1 className="terms-title">利用規約</h1>
          <p className="terms-subtitle">ホームページ無料作成サービス</p>

          <p className="terms-intro">
            本利用規約（以下「本規約」といいます）は、株式会社Calltech（以下「当社」といいます）が提供するホームページ無料作成サービス（以下「本サービス」といいます）の利用条件を定めるものです。本サービスをお申し込みいただいたお客様（以下「利用者」といいます）は、本規約に同意のうえご利用いただくものとします。
          </p>

          {articles.map((article) => (
            <article key={article.title} className="terms-article">
              <h2 className="terms-article-title">{article.title}</h2>
              {article.intro && <p className="terms-article-intro">{article.intro}</p>}
              {article.items && (
                <ul className="terms-list">
                  {article.items.map((item, index) => (
                    <li key={index} className="terms-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <div className="terms-meta">
            <p className="terms-meta-date">制定日：2026年4月1日</p>
            <p className="terms-meta-company">株式会社Calltech</p>
            <p>〒170-0013　東京都豊島区東池袋1-27-8　池袋原ビル10階</p>
            <p>電話：03-6384-7760</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
