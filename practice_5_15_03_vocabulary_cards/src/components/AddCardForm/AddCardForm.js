import s from './AddCardForm.module.css';

const AddCardForm = ({ addCard }) => {
  const submitForm = event => {
    event.preventDefault();
    const { rus, eng } = event.target;

    const card = {
      id: Date.now(),
      rus: rus.value,
      eng: eng.value,
      lang: 'eng',
    };

    addCard(card);

    rus.value = '';
    eng.value = '';
  };

  return (
    <form onSubmit={submitForm} className={s.card__form}>
      <input
        className={s.input}
        type='text'
        placeholder='RUS'
        name='rus'
        autoComplete='off'
      ></input>
      <input
        className={s.input}
        type='text'
        placeholder='ENG'
        name='eng'
        autoComplete='off'
      ></input>
      <button className={s.form__button}>Add new card</button>
    </form>
  );
};

export default AddCardForm;
