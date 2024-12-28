import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Card.module.scss';
import cx from 'classnames';

interface CardProps {
  imageSrc: string;
  title: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'horizontal';
  tags?: string[];
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  href,
  onClick,
  variant = 'default',
  tags,
  className
}) => {
  const cardContent = (
    <div className={cx(styles.card, styles[`card--${variant}`], className)}>
      <div className={styles.thumbnail}>
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.content}>
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={styles.cardLink}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div onClick={onClick} role={onClick ? "button" : undefined}>
      {cardContent}
    </div>
  );
};

export default Card; 