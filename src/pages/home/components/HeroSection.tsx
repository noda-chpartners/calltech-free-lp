import { useScrollReveal } from '@/hooks/useScrollReveal';

const heroImageUrl = '/images/hero.png';

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
        <div className="absolute inset-0 lg:hidden">
          <img
            src={heroImageUrl}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/86 to-white/96" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/58" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <img
            src={heroImageUrl}
            alt="カフェ経営者がパソコンでホームページを確認している様子"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/95 via-[42%] to-white/10 lg:block" />
        <div className="absolute inset-y-0 right-[34%] hidden w-[28%] bg-gradient-to-r from-white via-white/90 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-[572px] w-full max-w-[1280px] items-center px-5 pb-8 pt-7 md:min-h-[614px] md:px-8 md:py-12 lg:py-0 xl:px-0">
        <div className="grid w-full items-center md:gap-10 lg:grid-cols-[minmax(0,650px)_1fr]">
          <div className="max-w-[650px]">
            <p className="mb-5 inline-flex rounded-full bg-[#ffc400] px-6 py-2 text-sm font-black tracking-wide text-gray-950 shadow-[0_9px_20px_rgba(255,196,0,0.28)] md:mb-7 md:px-7">
              店舗・中小法人向け
            </p>

            <h1 className="mb-5 text-[38px] font-black leading-[1.16] tracking-normal text-gray-950 sm:text-[42px] md:mb-7 md:text-[56px] lg:whitespace-nowrap xl:text-[60px]">
              <span className="whitespace-nowrap">ホームページ</span>
              <br className="sm:hidden" />
              <span className="whitespace-nowrap">無料制作</span>
            </h1>

            <p className="mb-4 text-[19px] font-black leading-[1.68] text-gray-950 md:mb-5 md:text-[25px]">
              店舗・中小法人向けに、
              <br />
              はじめやすいホームページ制作を。
            </p>

            <p className="mb-7 text-[14px] font-bold leading-[1.85] text-gray-900 md:mb-9 md:text-base">
              初期費用・月額費用・サーバー費用すべて0円。
              <br />
              必要な機能をそろえたホームページを、
              <br />
              無料でご提供します。（対応範囲内の場合）
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-[52px] min-w-[236px] items-center justify-center gap-3 rounded-full bg-[#ffc400] px-8 text-base font-black text-gray-950 shadow-[0_16px_34px_rgba(255,196,0,0.36)] transition-transform hover:-translate-y-0.5 md:h-[58px]"
              >
                無料で相談する
                <i className="ri-arrow-right-s-line text-xl leading-none" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-[52px] min-w-[236px] items-center justify-center gap-3 rounded-full border border-gray-900 bg-white px-8 text-base font-black text-gray-950 shadow-[0_12px_28px_rgba(15,23,42,0.1)] transition-colors hover:bg-gray-50 md:h-[58px]"
              >
                デモサイトを見る
                <i className="ri-arrow-right-s-line text-xl leading-none" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
