import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'ヒアリング', desc: 'ご要望や事業内容をお伺いします。' },
  { num: '02', title: '情報確認', desc: '掲載する文章・画像などの必要情報をご提出いただきます。' },
  { num: '03', title: '制作', desc: '内容をもとにホームページを制作します。' },
  { num: '04', title: '確認', desc: '完成したサイトをご確認いただき、修正対応します。' },
  { num: '05', title: '公開', desc: 'ご確認後、Web上に公開し運用開始します。' },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`w-full py-16 md:py-24 bg-gray-50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10 md:mb-14">
          制作の流れ
        </h3>
        <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-y-8 md:gap-2 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start md:items-center w-full md:w-auto">
              <div className="flex flex-col items-center w-[140px] md:w-[160px] mx-auto">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-blue flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm md:text-base">{step.num}</span>
                </div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-xs text-gray-500 text-center leading-relaxed px-2">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 h-12 flex-shrink-0">
                  <i className="ri-arrow-right-s-line text-2xl text-gray-400 w-6 h-6 flex items-center justify-center" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}