import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/components/common/layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤
        setIsHeaderVisible(false);
      } else {
        // 위로 스크롤
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={styles.layout}>
      <Header className={`${styles.header} ${isHeaderVisible ? '' : styles.hidden}`} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout; 