import { useState } from 'react';
import AddCardForm from '../AddCardForm/AddCardForm';
import CardsContainer from '../CardsContainer/CardsContainer';
import { words } from '../../data/words';
import Triggers from '../Triggers/Triggers';

// 6. Создать компонент формы (два инпута и кнопка), которая собирает рус и англ слово, формирует из этих данных объект и выводит объект в консоль

function App() {
  let [cards, setCards] = useState(words);

  const addCard = newCard => {
    setCards([...cards, newCard]);
  };

  //   9. Создать компонент Triggers с двумя кнопками ENG и RUS, добавить этот компонент в App
  // 10. Стилизовать кнопки

  // 11. *Реализовать переворот карточек на рус и англ при нажатии на кнопки

  return (
    <div>
      <AddCardForm addCard={addCard} />
      <CardsContainer cards={cards} />
      <Triggers />
    </div>
  );
}

export default App;
