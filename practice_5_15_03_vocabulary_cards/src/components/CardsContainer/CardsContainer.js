import Card from '../Card/Card';
import styles from './CardsContainer.module.css';
import { words } from '../../data/words';

function CardsContainer() {
  return (
    <div className={styles.cards__container}>
      {words.map(el => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
}

export default CardsContainer;
