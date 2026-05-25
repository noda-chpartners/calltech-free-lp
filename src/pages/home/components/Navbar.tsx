import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'サービス', href: '#services' },
    { label: '導入事例', href: '#demo' },
    { label: 'お役立ち情報', href: '#' },
    { label: 'ニュース', href: '#' },
    { label: '会社情報', href: '#' },
    { label: '採用情報', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Calitech
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:border-gray-500 transition-colors whitespace-nowrap cursor-pointer"
            >
              お問い合わせ
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium bg-brand-blue text-white rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              資料ダウンロード
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="ri-menu-line text-2xl text-gray-900 w-6 h-6 flex items-center justify-center" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-gray-700 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a href="#contact" className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md text-center whitespace-nowrap cursor-pointer">
                お問い合わせ
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium bg-brand-blue text-white rounded-md text-center whitespace-nowrap cursor-pointer">
                資料ダウンロード
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}