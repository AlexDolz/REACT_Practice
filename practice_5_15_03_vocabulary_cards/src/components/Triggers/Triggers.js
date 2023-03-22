import s from './Triggers.module.css';

const Triggers = () => {
  return (
    <div className={s.triggers}>
      <button className={s.triggers__button}>ENG</button>
      <button className={s.triggers__button}>RUS</button>
    </div>
  );
};

export default Triggers;
