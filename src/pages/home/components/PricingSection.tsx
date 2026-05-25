import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  const items = [
    {
      icon: 'ri-computer-line',
      title: '制作費',
      price: '0',
      desc: 'デザイン制作からコーディングまで\nすべて0円でご提供します。',
    },
    {
      icon: 'ri-calendar-line',
      title: '月額費用',
      price: '0',
      desc: '月額利用料は一切かかりません。\n維持費の心配なくご活用いただけます。',
    },
    {
      icon: 'ri-server-line',
      title: 'サーバー費用',
      price: '0',
      desc: 'サーバー費用も0円。\n安全・安定した環境で運用できます。\n※対応範囲内の場合',
    },
  ];

  return (
    <section ref={ref} className={`w-full py-16 md:py-24 bg-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          ホームページ制作にかかる費用を、まとめて<span className="text-brand-yellow text-4xl md:text-5xl font-black mx-1">0</span>円に
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <i className={`${item.icon} text-4xl text-brand-yellow w-10 h-10 flex items-center justify-center`} />
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-sm font-medium text-gray-700">{item.title}</span>
              </div>
              <div className="flex items-baseline gap-0.5 mb-4">
                <span className="text-5xl md:text-6xl font-black text-brand-yellow">{item.price}</span>
                <span className="text-xl font-bold text-gray-900">円</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}