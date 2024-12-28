import React from 'react';
import styles from '@/styles/components/NavMenu.module.scss';

const menuData = [
  { title: '솔루션', href: '/solutions' },
  { title: '인사이트', href: '/insights' },
  { title: '팀원소개', href: '/professionals' },
  { title: '회사소개', href: '/about' },
  { title: '커리어', href: '/careers' },
  { title: '문의하기', href: '/contact' },
];

const NavMenu: React.FC = () => {
  return (
    <nav className={styles.navMenu}>
      <ul>
        {menuData.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu; 