import { useScrollReveal } from '@/hooks/useScrollReveal';

const heroImageUrl =
  'https://readdy.ai/api/search-image?query=A%20young%20Asian%20man%20and%20woman%20wearing%20aprons%20sitting%20at%20a%20wooden%20table%20in%20a%20cozy%20cafe%20restaurant%20interior%20looking%20at%20a%20laptop%20computer%20together%20and%20smiling%20warmly%20soft%20natural%20lighting%20from%20large%20windows%20warm%20orange%20beige%20color%20tones%20professional%20photography%20style%20shallow%20depth%20of%20field%20modern%20casual%20business%20atmosphere&width=1200&height=700&seq=1&orientation=landscape';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`relative min-h-[640px] overflow-hidden bg-white pt-[68px] transition-all duration-1000 md:min-h-[690px] md:pt-[76px] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 top-[68px] md:top-[76px]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <img
            src={heroImageUrl}
            alt="カフェ経営者がパソコンでホームページを確認している様子"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[42%] to-white/10" />
        <div className="absolute inset-y-0 right-[34%] hidden w-[28%] bg-gradient-to-r from-white via-white/90 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-[572px] w-full max-w-[1280px] items-center px-5 py-12 md:min-h-[614px] md:px-8 lg:py-0 xl:px-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,650px)_1fr]">
          <div className="max-w-[650px]">
            <p className="mb-7 inline-flex rounded-full bg-[#ffc400] px-7 py-2 text-sm font-black tracking-wide text-gray-950 shadow-[0_6px_14px_rgba(255,196,0,0.2)]">
              店舗・中小法人向け
            </p>

            <h1 className="mb-7 text-[42px] font-black leading-[1.18] tracking-normal text-gray-950 md:text-[56px] lg:whitespace-nowrap xl:text-[60px]">
              ホームページ無料制作
            </h1>

            <p className="mb-5 text-xl font-black leading-[1.75] text-gray-950 md:text-[25px]">
              店舗・中小法人向けに、
              <br />
              はじめやすいホームページ制作を。
            </p>

            <p className="mb-9 text-[15px] font-bold leading-[1.9] text-gray-900 md:text-base">
              初期費用・月額費用・サーバー費用すべて0円。
              <br />
              必要な機能をそろえたホームページを、
              <br />
              無料でご提供します。（対応範囲内の場合）
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-[58px] min-w-[236px] items-center justify-center gap-3 rounded-full bg-[#ffc400] px-8 text-base font-black text-gray-950 shadow-[0_12px_26px_rgba(255,196,0,0.28)] transition-transform hover:-translate-y-0.5"
              >
                無料で相談する
                <i className="ri-arrow-right-s-line text-xl leading-none" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-[58px] min-w-[236px] items-center justify-center gap-3 rounded-full border border-gray-900 bg-white px-8 text-base font-black text-gray-950 transition-colors hover:bg-gray-50"
              >
                デモサイトを見る
                <i className="ri-arrow-right-s-line text-xl leading-none" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(15,23,42,0.16)] lg:hidden">
            <img
              src={heroImageUrl}
              alt="カフェ経営者がパソコンでホームページを確認している様子"
              className="aspect-[16/10] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
