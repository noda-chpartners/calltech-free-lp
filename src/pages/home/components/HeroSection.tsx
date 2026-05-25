import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`relative w-full min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12 pt-24 md:pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block px-4 py-1.5 bg-brand-yellow text-white text-sm font-bold rounded-full mb-6">
              店舗・中小法人向け
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              ホームページ<br />無料制作
            </h1>
            <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              店舗・中小法人向けに、<br className="hidden md:block" />
              はじめやすいホームページ制作を。
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              初期費用・月額費用・サーバー費用すべて0円。<br />
              必要な機能をそろえたホームページを、<br />
              無料でご提供します。（対応範囲内の場合）
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-gray-900 font-bold rounded-full hover:bg-orange-400 transition-colors whitespace-nowrap cursor-pointer"
              >
                無料で相談する
                <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-gray-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                デモサイトを見る
                <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://readdy.ai/api/search-image?query=A%20young%20Asian%20man%20and%20woman%20wearing%20aprons%20sitting%20at%20a%20wooden%20table%20in%20a%20cozy%20cafe%20restaurant%20interior%20looking%20at%20a%20laptop%20computer%20together%20and%20smiling%20warmly%20soft%20natural%20lighting%20from%20large%20windows%20warm%20orange%20beige%20color%20tones%20professional%20photography%20style%20shallow%20depth%20of%20field%20modern%20casual%20business%20atmosphere&width=1200&height=700&seq=1&orientation=landscape"
                alt="カフェ経営者がホームページを確認している様子"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}