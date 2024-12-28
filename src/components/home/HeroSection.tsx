import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 200px 이상 되면 효과 적용
      const scrolled = window.scrollY > 200;
      setIsScrolled(scrolled);
      
      // 부드러운 스크롤 효과
      if (scrolled) {
        document.body.style.scrollBehavior = 'smooth';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`${styles.heroSection} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          LegalMind: <br />
          더 스마트한 법률 서비스
        </h1>
        <p className={styles.subtitle}>
          AI 기술과 로펌의 전문성이 만나면, <br />
          새로운 법률 패러다임이 열립니다.
        </p>
        <button className={styles.ctaBtn}>지금 시작하기</button>
      </div>
      <div className={styles.scroll} onClick={() => {
        // 스크롤 버튼 클릭 시 다음 섹션으로 부드럽게 이동
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }}>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection; 