import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/components/GlobalNav.module.scss';

// 메뉴 데이터 정의
const MENU_ITEMS = [
  {
    label: '솔루션',
    href: '/solutions',
    subMenu: [
      { label: '기업법무', href: '/solutions/corporate' },
      { label: '소송/중재', href: '/solutions/litigation' },
      { label: '규제/컴플라이언스', href: '/solutions/compliance' },
      { label: '국제통상', href: '/solutions/trade' },
    ],
  },
  {
    label: '인사이트',
    href: '/insights',
    subMenu: [
      { label: '최신 법률 동향', href: '/insights/trends' },
      { label: '판례 분석', href: '/insights/cases' },
      { label: '법률 뉴스레터', href: '/insights/newsletter' },
    ],
  },
  { label: '팀원 소개', href: '/professionals' },
  { label: '커리어', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const GlobalNav: React.FC = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 현재 경로와 메뉴 항목 비교하여 활성 상태 확인
  const isActive = (href: string) => router.pathname.startsWith(href);

  // 화면 크기가 변경될 때 모바일 메뉴 상태 초기화
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* 모바일 햄버거 버튼 */}
      <button
        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="globalNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 글로벌 내비게이션 */}
      <nav 
        id="globalNav" 
        className={`${styles.globalNav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
        aria-label="메인 메뉴"
      >
        <ul>
          {MENU_ITEMS.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
              className={isActive(item.href) ? styles.active : ''}
            >
              <Link href={item.href}>
                {item.label}
              </Link>
              
              {/* 서브메뉴 (드롭다운) */}
              {item.subMenu && (openMenu === item.label || isMobileMenuOpen) && (
                <ul className={styles.dropDown}>
                  {item.subMenu.map((sub) => (
                    <li key={sub.label} className={isActive(sub.href) ? styles.active : ''}>
                      <Link href={sub.href}>
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default GlobalNav; 