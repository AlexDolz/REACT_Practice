import styles from './Card.module.css';

function Card({ rus, eng, lang }) {
  const word = lang === 'eng' ? eng : rus;

  const cardStyles = {
    color: lang === 'rus' ? 'lightskyblue' : 'white',
    backgroundColor: lang === 'rus' ? 'white' : 'lightskyblue',
  };
  return (
    <div className={styles.word__card} style={cardStyles}>
      {word}
    </div>
  );
}

export default Card;
