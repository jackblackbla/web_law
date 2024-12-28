import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from './SliderSection.module.scss';

const highlights = [
  {
    menu: 'PRESS',
    thumbnail: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800',
    type: '테크뉴스',
    title: 'LegalMind, AI 법률 상담 서비스로 리걸테크 시장 선도',
    link: '/news/article/1'
  },
  {
    menu: 'RECRUITMENT',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    type: '채용공고',
    title: 'AI 법률 전문가 및 개발자 채용',
    link: '/careers'
  },
  {
    menu: 'ACHIEVEMENT',
    thumbnail: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800',
    type: '수상소식',
    title: 'LegalMind, 2024 대한민국 AI 이노베이션 대상 수상',
    link: '/news/article/2'
  },
  {
    menu: 'SERVICE',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    type: '서비스',
    title: 'LegalMind, 24시간 AI 법률 상담 서비스 출시',
    link: '/news/article/3'
  }
];

export default function SliderSection() {
  return (
    <div className={styles.innerWrap}>
      <h3 className={`${styles.title} typo-heading-01 tit-dot`} 
          data-aos="fade-right" 
          data-aos-duration="1000">
        HIGHLIGHTS
      </h3>
      
      <div className={styles.sliderWrap} 
           data-aos="fade-left" 
           data-aos-duration="1000" 
           data-aos-delay="300">
        <div className={styles.highlightSlider}>
          <Swiper
            modules={[Autoplay, Scrollbar]}
            spaceBetween={144}
            slidesPerView={2}
            loop={true}
            scrollbar={{
              el: '.swiper-scrollbar',
              draggable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              enabled: false
            }}
          >
            <SwiperSlide>
              <ul className={styles.highlightList}>
                <li>
                  <a href="/news/1" target="_blank">
                    <em className={styles.menu}>PRESS</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=1" alt="AI 법률 검색 서비스 뉴스" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>법률신문</em>
                      <strong className={styles.tit}>LegalMind, AI 법률 검색 서비스로 리걸테크 시장 선도</strong>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/careers" target="_blank">
                    <em className={styles.menu}>RECRUITMENT</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=2" alt="개발자 채용 공고" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>채용공고</em>
                      <strong className={styles.tit}>2024 LegalMind 신입/경력 개발자 채용</strong>
                    </div>
                  </a>
                </li>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className={styles.highlightList}>
                <li>
                  <a href="/news/2" target="_blank">
                    <em className={styles.menu}>ACHIEVEMENT</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=3" alt="리걸테크 대상 수상" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>수상소식</em>
                      <strong className={styles.tit}>2024 대한민국 리걸테크 대상 'AI 법률서비스 부문' 수상</strong>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/news/3" target="_blank">
                    <em className={styles.menu}>UPDATE</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=4" alt="AI 판례 요약 서비스" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>서비스 소식</em>
                      <strong className={styles.tit}>LegalMind 판례 요약 AI 베타 서비스 출시</strong>
                    </div>
                  </a>
                </li>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className={styles.highlightList}>
                <li>
                  <a href="/news/4" target="_blank">
                    <em className={styles.menu}>PARTNERSHIP</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=5" alt="업무협약 체결식" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>협력소식</em>
                      <strong className={styles.tit}>LegalMind-대한변호사협회 AI 법률정보 제공 업무협약 체결</strong>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/news/5" target="_blank">
                    <em className={styles.menu}>RESEARCH</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=6" alt="AI 연구소" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>연구개발</em>
                      <strong className={styles.tit}>LegalMind, 법률 AI 고도화 위한 연구소 설립</strong>
                    </div>
                  </a>
                </li>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className={styles.highlightList}>
                <li>
                  <a href="/news/6" target="_blank">
                    <em className={styles.menu}>SEMINAR</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=7" alt="법률 세미나" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>세미나</em>
                      <strong className={styles.tit}>2024 LegalMind AI 법률 세미나 개최 안내</strong>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/news/7" target="_blank">
                    <em className={styles.menu}>COMMUNITY</em>
                    <div className={styles.thumbnail}>
                      <img src="https://picsum.photos/800/600?random=8" alt="사용자 포럼" />
                    </div>
                    <div className={styles.info}>
                      <em className={styles.type}>커뮤니티</em>
                      <strong className={styles.tit}>LegalMind 사용자 포럼 오픈</strong>
                    </div>
                  </a>
                </li>
              </ul>
            </SwiperSlide>
          </Swiper>
          
          <div className="swiper-drag-scroll active">
            <div className="swiper-scrollbar">
              <div className="swiper-scrollbar-drag"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 