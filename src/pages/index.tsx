import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Layout from '@/components/common/Layout';
import SearchBar from '@/components/ui/SearchBar';
import Button from '@/components/ui/Button';
import SliderSection from '@/components/home/SliderSection';
import HeroSection from '@/components/home/HeroSection';
import styles from '@/styles/pages/home.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const handleSearch = async (keyword: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('검색어:', keyword);
    } finally {
      setIsLoading(false);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    variableWidth: true,
    centerMode: false,
    initialSlide: 2,
  };

  return (
    <Layout>
      <Head>
        <title>LegalMind - AI 기반 법률 서비스</title>
        <meta name="description" content="AI 기술을 활용한 혁신적인 법률 서비스 플랫폼" />
      </Head>

      <HeroSection />

      {/* 서비스 소개 슬라이더 */}
      <section data-aos="fade-up">
        <SliderSection />
      </section>

      {/* 인사이트 섹션 */}
      <section className={styles.insightSection} data-aos="fade-up">
        <span className={styles.bg}></span>
        <div className={styles.innerWrap}>
          <h2 className={`${styles.sectionTitle} typo-heading-01 tit-dot`} data-aos="fade-right">
            INSIGHTS
          </h2>
          <Slider {...settings} className={styles.slickSlider} ref={sliderRef}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className={styles.slideItem}>
                <a href={`/insights/${item}`}>
                  <div className={styles.imageWrap}>
                    <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800" alt="" />
                  </div>
                  <div className={styles.contentBox}>
                    <strong className={styles.title}>
                      AI 법률 서비스의 현재와 미래 전망
                    </strong>
                    <p className={styles.desc}>
                      인공지능 기술의 발전으로 법률 서비스는 어떻게 변화하고 있을까요?
                    </p>
                    <span className={styles.date}>2024.01.{item}</span>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
          <div className={styles.boxBoardMore} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <a href="/insights" className={styles.btnCircleAni}>
              <i></i>VIEW ALL
            </a>
            <div className={styles.sliderButtons}>
              <button type="button" className={styles.sliderPrev} onClick={() => sliderRef.current?.slickPrev()}>
                이전
              </button>
              <button type="button" className={styles.sliderNext} onClick={() => sliderRef.current?.slickNext()}>
                다음
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className={styles.ctaSection} data-aos="fade-up">
        <div className={styles.innerWrap}>
          <h2>지금 바로 시작하세요</h2>
          <p>LegalMind와 함께 더 스마트한 법률 서비스를 경험해보세요.</p>
          <Button variant="accent" size="lg">무료 체험하기</Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
