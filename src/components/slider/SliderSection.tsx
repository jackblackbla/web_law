import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/slider.module.scss';

const services = [
  {
    id: 1,
    title: "AI 법률 분석",
    description: "인공지능이 판례와 법령을 분석하여 최적의 법률 솔루션을 제시합니다.",
    image: "/images/services/service1.jpg"
  },
  {
    id: 2,
    title: "전문가 상담",
    description: "경험이 풍부한 변호사와 1:1 온라인 상담을 진행할 수 있습니다.",
    image: "/images/services/service2.jpg"
  },
  {
    id: 3,
    title: "문서 자동화",
    description: "계약서, 고소장 등 법률 문서를 AI가 자동으로 작성해드립니다.",
    image: "/images/services/service3.jpg"
  },
  {
    id: 4,
    title: "법률 정보 검색",
    description: "방대한 법률 데이터베이스에서 필요한 정보를 쉽고 빠르게 찾아보세요.",
    image: "/images/services/service1.jpg"
  },
  {
    id: 5,
    title: "온라인 법률 교육",
    description: "전문가가 제공하는 온라인 법률 교육 프로그램을 강해보세요.",
    image: "/images/services/service2.jpg"
  },
  {
    id: 6,
    title: "법률 상담 예약",
    description: "원하는 시간에 편리하게 법률 상담을 예약할 수 있습니다.",
    image: "/images/services/service3.jpg"
  }
];

const SliderSection = () => {
  return (
    <div className={styles.sliderWrap}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>주요 서비스</h2>
        <p className={styles.sectionDesc}>
          LegalMind는 AI 기술을 활용하여 더 스마트하고 효율적인 법률 서비스를 제공합니다.<br />
          다양한 법률 서비스를 경험해보세요.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.cardList}>
          {[...services, ...services].map((service, index) => (
            <div key={`${service.id}-${index}`} className={styles.card}>
              <div className={styles.cardThumb}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sectionFooter}>
        <p className={styles.notice}>* 서비스 이용 관련 문의사항은 고객센터를 통해 안내받으실 수 있습니다.</p>
      </div>
    </div>
  );
};

export default SliderSection; 