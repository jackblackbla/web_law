import styles from '@/styles/components/CardList.module.scss';
import Card from './Card';

interface CardListProps {
  items: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    // ... 기타 필요한 속성들
  }>;
}

const CardList = ({ items }: CardListProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardList}>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardList; 