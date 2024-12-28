import Image from 'next/image';
import styles from '@/styles/components/Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  image: string;
  // ... 기타 필요한 속성들
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardThumb}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
};

export default Card; 