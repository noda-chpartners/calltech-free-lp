import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'サービス', href: '#services' },
  { label: '導入事例', href: '#demo' },
  { label: 'お役立ち情報', href: '#' },
  { label: 'ニュース', href: '#' },
  { label: '会社情報', href: '#' },
  { label: '採用情報', href: '#' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center" aria-label="Calltech トップページ">
      <img src="/images/calltech-logo.png" alt="Calltech" className="h-[30px] w-auto md:h-[34px]" />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_rgba(15,23,42,0.12)]' : 'shadow-[0_3px_14px_rgba(15,23,42,0.05)]'
      }`}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1280px] items-center justify-between px-5 md:h-[76px] md:px-8 xl:px-0">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-bold tracking-wide text-gray-900 transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="inline-flex h-10 min-w-[132px] items-center justify-center rounded-full border border-gray-900 bg-white px-5 text-[13px] font-bold text-gray-900 shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition-colors hover:bg-gray-50"
          >
            お問い合わせ
          </a>
          <a
            href="#"
            className="inline-flex h-10 min-w-[154px] items-center justify-center gap-1 rounded-full bg-brand-blue px-5 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(0,104,183,0.32)] transition-colors hover:bg-blue-700"
          >
            資料ダウンロード
            <i className="ri-arrow-right-s-line text-base leading-none" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-900 md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="メニューを開閉"
          aria-expanded={mobileMenuOpen}
        >
          <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} aria-hidden="true" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="grid gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-gray-900 text-sm font-bold text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center gap-1 rounded-full bg-brand-blue text-sm font-bold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                資料ダウンロード
                <i className="ri-arrow-right-s-line text-base leading-none" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
