export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 max-w-6xl mx-auto">
          {/* Left: Logo & Info */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <span className="text-xl font-bold">Calitech</span>
            </div>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              株式会社Calitechは、コワーキングカフェからテクノロジーで実現する新たな働き方を提供しています。
            </p>
            <div className="space-y-1 text-xs text-gray-400">
              <p className="font-bold text-white">株式会社Calitech</p>
              <p>〒170-0013</p>
              <p>東京都豊島区東池袋1-27-8 池袋ビル10階</p>
              <p>03-6384-7760</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                <i className="ri-pinterest-fill text-sm w-4 h-4 flex items-center justify-center" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-sm w-4 h-4 flex items-center justify-center" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-sm w-4 h-4 flex items-center justify-center" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                <i className="ri-twitter-x-fill text-sm w-4 h-4 flex items-center justify-center" />
              </a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-bold mb-4 text-gray-300">COMPANY</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors cursor-pointer">SERVICE</a></li>
                  <li><a href="#" className="hover:text-white transition-colors cursor-pointer">NEWS</a></li>
                  <li><a href="#" className="hover:text-white transition-colors cursor-pointer">RECRUIT</a></li>
                  <li><a href="#" className="hover:text-white transition-colors cursor-pointer">CONTACT</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-4 text-gray-300">PRIVACYPOLICY</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors cursor-pointer">PRIVACYMARK</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-700 py-4">
        <p className="text-center text-xs text-gray-500">
          Copyright &copy; 株式会社Calitech All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}