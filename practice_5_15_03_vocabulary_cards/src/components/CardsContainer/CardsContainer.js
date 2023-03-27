import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

function CardsContainer({ cards, changeCardsLang, removeCard }) {
  return (
    <div className={styles.cards__container}>
      {cards.map(el => (
        <Card
          key={el.id}
          {...el}
          changeCardsLang={changeCardsLang}
          removeCard={removeCard}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
