import s from './Triggers.module.css';

const Triggers = ({ changeToEng, changeToRus }) => {
  return (
    <div className={s.triggers}>
      <button className={s.triggers__button} onClick={changeToEng}>
        ENG
      </button>
      <button className={s.triggers__button} onClick={changeToRus}>
        RUS
      </button>
    </div>
  );
};

export default Triggers;
