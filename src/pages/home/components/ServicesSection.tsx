import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    { icon: 'ri-smartphone-line', label: 'レスポンシブ対応' },
    { icon: 'ri-palette-line', label: 'オリジナルデザイン' },
    { icon: 'ri-search-line', label: '基本SEO設定' },
    { icon: 'ri-mail-line', label: 'お問い合わせ機能' },
    { icon: 'ri-map-pin-line', label: 'Googleマップ連携' },
    { icon: 'ri-lock-line', label: 'SSL対応' },
  ];

  const recommendations = [
    'ホームページを持っていない、これから作りたい',
    'コストを抑えてWebで集客を始めたい',
    '名刺やチラシだけでは情報を伝えきれない',
    '店舗情報やサービス内容をWeb上でわかりやすく伝えたい',
  ];

  return (
    <section id="services" ref={ref} className={`w-full py-16 md:py-24 bg-gray-50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left: Services */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              サービスに含まれる内容
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm flex-shrink-0">
                    <i className={`${f.icon} text-lg text-brand-blue w-5 h-5 flex items-center justify-center`} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700 pt-2">{f.label}</span>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 mt-8 text-sm font-medium text-brand-blue hover:underline cursor-pointer">
              機能の詳細を見る <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center" />
            </a>
          </div>

          {/* Right: Recommendations */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              こんな方におすすめ
            </h3>
            <ul className="space-y-4 mb-8">
              {recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-xs w-3 h-3 flex items-center justify-center" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
            <div className="w-full max-w-[280px] mx-auto lg:mx-0">
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20friendly%20young%20Asian%20couple%20illustration%20wearing%20shop%20aprons%20standing%20together%20simple%20flat%20cartoon%20anime%20style%20character%20design%20warm%20orange%20and%20yellow%20color%20palette%20cheerful%20welcoming%20expressions%20clean%20white%20background%20professional%20business%20service%20mascot%20illustration&width=400&height=500&seq=6&orientation=portrait"
                  alt="店舗経営者のイラスト"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}