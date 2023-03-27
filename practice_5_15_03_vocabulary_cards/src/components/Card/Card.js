import styles from './Card.module.css';

function Card({ rus, eng, lang, id, changeCardsLang, removeCard }) {
  const word = lang === 'eng' ? eng : rus;

  const cardStyles = {
    color: lang === 'rus' ? 'lightseagreen' : 'white',
    backgroundColor: lang === 'rus' ? 'white' : 'lightseagreen',
  };
  return (
    <div
      onClick={() => changeCardsLang(id)}
      onDoubleClick={() => removeCard(id)}
      className={styles.word__card}
      style={cardStyles}
    >
      {word}
    </div>
  );
}

export default Card;
