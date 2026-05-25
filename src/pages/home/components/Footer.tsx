const navItems = ['COMPANY', 'SERVICE', 'NEWS', 'RECRUIT', 'CONTACT', 'PRIVACYPOLICY', 'PRIVACYMARK'];

export default function Footer() {
  return (
    <footer className="footer-section">
      <style>
        {`
          .footer-section {
            width: 100%;
            color: #fff;
            background:
              radial-gradient(circle at 16% 0%, rgba(255, 255, 255, 0.08), transparent 30%),
              linear-gradient(135deg, #2f3333 0%, #202322 100%);
            box-shadow: 0 -8px 18px rgba(15, 23, 42, 0.035);
          }

          .footer-inner {
            display: grid;
            grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.65fr);
            gap: 88px;
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
            padding: 46px 20px 30px;
          }

          .footer-logo {
            display: block;
            width: 178px;
            height: auto;
            margin-bottom: 18px;
          }

          .footer-description {
            margin: 0 0 22px;
            max-width: 360px;
            color: rgba(255, 255, 255, 0.78);
            font-size: 13px;
            font-weight: 700;
            line-height: 1.85;
          }

          .footer-company {
            display: grid;
            gap: 4px;
            margin: 0;
            color: rgba(255, 255, 255, 0.78);
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.65;
          }

          .footer-company-name {
            color: #fff;
            font-size: 16px;
            font-weight: 900;
          }

          .footer-social {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-top: 24px;
          }

          .footer-privacy-mark {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            color: rgba(255, 255, 255, 0.88);
            border: 2px solid rgba(255, 255, 255, 0.72);
            border-radius: 999px;
            font-size: 17px;
            font-weight: 900;
            letter-spacing: -0.05em;
          }

          .footer-social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            color: #fff;
            text-decoration: none;
            transition: opacity 180ms ease;
          }

          .footer-social-link:hover {
            opacity: 0.72;
          }

          .footer-social-link i {
            font-size: 31px;
            line-height: 1;
          }

          .footer-nav {
            align-self: start;
            padding-top: 6px;
          }

          .footer-nav-list {
            display: grid;
            gap: 13px;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .footer-nav-link {
            color: rgba(255, 255, 255, 0.9);
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.18em;
            text-decoration: none;
            transition: color 180ms ease;
          }

          .footer-nav-link:hover {
            color: #ffc400;
          }

          .footer-copyright {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 20px 18px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 12px;
            font-weight: 700;
            line-height: 1.6;
            text-align: center;
          }

          @media (max-width: 767px) {
            .footer-inner {
              grid-template-columns: 1fr;
              gap: 38px;
              padding: 42px 20px 26px;
            }

            .footer-logo {
              width: 164px;
              margin-bottom: 20px;
            }

            .footer-description {
              margin-bottom: 24px;
              line-height: 1.9;
            }

            .footer-company {
              gap: 6px;
              line-height: 1.75;
            }

            .footer-social {
              gap: 18px;
              margin-top: 26px;
            }

            .footer-nav {
              padding-top: 0;
            }

            .footer-nav-list {
              gap: 16px;
            }

            .footer-nav-link {
              line-height: 1.35;
            }

            .footer-copyright {
              padding-bottom: 22px;
            }
          }
        `}
      </style>

      <div className="footer-inner">
        <div>
          <img src="/images/calltech-logo-white.png" alt="Calltech" className="footer-logo" />
          <p className="footer-description">
            株式会社Calltechは、コールセンターから
            <br />
            テクノロジーと笑顔を届ける会社です。
          </p>

          <address className="footer-company">
            <span className="footer-company-name">株式会社Calltech</span>
            <span>〒170-0013</span>
            <span>東京都豊島区東池袋1-27-8　池袋原ビル10階</span>
            <span>03-6384-7760</span>
          </address>

          <div className="footer-social" aria-label="SNSとプライバシーマーク">
            <span className="footer-privacy-mark" aria-label="プライバシーマーク">
              P
            </span>
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <i className="ri-instagram-line" aria-hidden="true" />
            </a>
            <a href="#" className="footer-social-link" aria-label="Facebook">
              <i className="ri-facebook-fill" aria-hidden="true" />
            </a>
            <a href="#" className="footer-social-link" aria-label="X">
              <i className="ri-twitter-x-line" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <ul className="footer-nav-list">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="footer-nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="footer-copyright">Copyright © 株式会社Calltech All Rights Reserved.</p>
    </footer>
  );
}
