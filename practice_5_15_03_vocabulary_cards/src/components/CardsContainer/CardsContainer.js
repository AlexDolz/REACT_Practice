import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

function CardsContainer({ cards }) {
  return (
    <div className={styles.cards__container}>
      {cards.map(el => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
}

export default CardsContainer;
