import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Footer.module.scss';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.innerWrap}>
        {/* 상단 섹션 */}
        <div className={styles.top}>
          <ul className={styles.cityList}>
            <li><Link href="/">SEOUL</Link></li>
            <li><Link href="/">NEW YORK</Link></li>
            <li><Link href="/">TOKYO</Link></li>
            <li><Link href="/">LONDON</Link></li>
          </ul>
        </div>

        {/* 하단 섹션 */}
        <div className={styles.bottom}>
          <div className={styles.left}>
            {/* 브랜드명 */}
            <div className={styles.brandName}>
              <Link href="/">LegalMind</Link>
            </div>
            
            {/* 주소 정보 */}
            <address className={styles.address}>
              <p>서울특별시 강남구 테헤란로 123 리걸마인드빌딩 4층</p>
              <p>Tel: 02-123-4567</p>
              <p>Email: contact@legalmind.com</p>
            </address>

            {/* SNS 링크 */}
            <div className={styles.sns}>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            {/* 패밀리 사이트 */}
            <dl className={styles.familyList}>
              <dt>Family Sites</dt>
              <dd><Link href="/">LegalMind Research</Link></dd>
              <dd><Link href="/">LegalMind Academy</Link></dd>
              <dd><Link href="/">LegalMind Global</Link></dd>
            </dl>

            {/* 정책 링크 */}
            <ul className={styles.policyList}>
              <li><Link href="/terms">이용약관</Link></li>
              <li><Link href="/privacy">개인정보처리방침</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className={styles.copyright}>
          © 2024 LegalMind. All rights reserved.
        </div>
      </div>

      {/* 맨 위로 가기 버튼 */}
      <button 
        className={styles.btnTopMove}
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer; 