'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Header.module.scss';

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/" title="LegalMind CI" aria-label="LegalMind CI">
          LegalMind
        </Link>
      </h1>
      
      <div className={styles.util}>
        <ul id="menu">
          <li><Link href="/solutions" title="Solutions 메뉴 이동" aria-label="Solutions 메뉴 이동">Solutions</Link></li>
          <li><Link href="/professionals" title="Professionals 메뉴 이동" aria-label="Professionals 메뉴 이동">Professionals</Link></li>
          <li><Link href="/insights" title="Insights 메뉴 이동" aria-label="Insights 메뉴 이동">Insights</Link></li>
          <li><Link href="/firm" title="The Firm 메뉴 이동" aria-label="The Firm 메뉴 이동">The Firm</Link></li>
          <li><Link href="/careers" title="Careers 메뉴 이동" aria-label="Careers 메뉴 이동">Careers</Link></li>
        </ul>

        <div className="box-lang box-tooltip">
          <button className="btn-lang" title="국문 선택" aria-label="국문 선택">KOR</button>
          <ul className="view-tooltip">
            <li><Link href="#" title="국문" aria-label="국문" className="on">KOR</Link></li>
            <li><Link href="#" title="영문" aria-label="영문">ENG</Link></li>
            <li><Link href="#" title="중문" aria-label="중문">CHN</Link></li>
            <li><Link href="#" title="일문" aria-label="일문">JPN</Link></li>
          </ul>
        </div>

        <Link href="/contact" className="icon-map" title="찾아오시는 길 이동" aria-label="찾아오시는 길 이동">
          <span>찾아오시는 길 이동</span>
        </Link>

        <button 
          id="hd-btn-search" 
          className="icon-search" 
          type="button" 
          title="검색" 
          aria-label="검색"
        >
          <span>검색</span>
        </button>

        <button 
          className="btn-hamburger" 
          title="메뉴 열기" 
          aria-label="메뉴 열기"
          onClick={() => {/* 메뉴 열기 함수 */}}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
} 