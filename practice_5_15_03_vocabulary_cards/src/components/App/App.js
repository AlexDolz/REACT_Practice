import { useState } from 'react';
import AddCardForm from '../AddCardForm/AddCardForm';
import CardsContainer from '../CardsContainer/CardsContainer';
import { words } from '../../data/words';
import Triggers from '../Triggers/Triggers';

// 6. Создать компонент формы (два инпута и кнопка), которая собирает рус и англ слово, формирует из этих данных объект и выводит объект в консоль

function App() {
  let [cards, setCards] = useState(words);

  const addCard = newCard => setCards([...cards, newCard]);

  //   9. Создать компонент Triggers с двумя кнопками ENG и RUS, добавить этот компонент в App
  // 10. Стилизовать кнопки

  // 11. *Реализовать переворот карточек на рус и англ при нажатии на кнопки

  const changeToEng = () => {
    setCards(
      cards.map(elem => {
        elem.lang = 'eng';
        return elem;
      })
    );
  };
  const changeToRus = () => {
    setCards(
      cards.map(elem => {
        elem.lang = 'rus';
        return elem;
      })
    );
  };

  // 12. Реализовать переворот карточек на противоположную строну при клике на нее

  const changeCardsLang = id => {
    setCards(
      cards.map(elem => {
        if (elem.id === id) {
          elem.lang = elem.lang === 'eng' ? 'rus' : 'eng';
        }
        return elem;
      })
    );
  };

  // 13. Реализовать удаление карточки при двойной клике на нее

  const removeCard = id => {
    setCards(cards.filter(elem => elem.id !== id));
  };

  return (
    <div>
      <AddCardForm addCard={addCard} />
      <CardsContainer
        cards={cards}
        changeCardsLang={changeCardsLang}
        removeCard={removeCard}
      />
      <Triggers changeToEng={changeToEng} changeToRus={changeToRus} />
    </div>
  );
}

export default App;
