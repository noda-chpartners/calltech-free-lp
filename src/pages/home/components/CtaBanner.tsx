import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CtaBanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" ref={ref} className={`w-full py-12 md:py-16 bg-brand-yellow transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Left Image */}
          <div className="w-full md:w-1/3 max-w-[300px]">
            <div className="w-full aspect-[5/4] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://readdy.ai/api/search-image?query=A%20friendly%20young%20Asian%20female%20customer%20support%20representative%20wearing%20a%20headset%20microphone%20smiling%20warmly%20while%20looking%20at%20camera%20professional%20call%20center%20office%20background%20with%20soft%20bokeh%20corporate%20communication%20service%20concept%20warm%20inviting%20lighting%20and%20natural%20makeup&width=500&height=400&seq=7&orientation=landscape"
                alt="カスタマーサポート担当者"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              まずはお気軽にご相談ください
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              ご質問・お見積りは無料です。お気軽にお問い合わせください。
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              無料で相談する
              <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center" />
            </a>
          </div>

          {/* Right Contact */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
              <i className="ri-phone-line text-brand-blue text-xl w-5 h-5 flex items-center justify-center" />
              <span className="text-2xl md:text-3xl font-black text-gray-900">03-6384-7760</span>
            </div>
            <p className="text-xs text-gray-700">受付時間 10:00〜19:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}