// 1. Создать компонент square - квадрат зеленого цвета с размерами 300х300 px
// 2. При клике на кнопку меня у квадрата цвет на синий, а размер на 400х400 px

import { useState } from 'react';

function Square() {
  // const squareStyle = {
  //   background: 'green',
  //   size: 300,
  // };

  // let [squareStyles, setSquareStyles] = useState(squareStyle);
  // const styles = {
  //   backgroundColor: squareStyles.background,
  //   width: squareStyles.size + 'px',
  //   height: squareStyles.size + 'px',
  // };

  // const changeStyles = () => {
  //   setSquareStyles(
  //     (squareStyles = {
  //       background: 'blue',
  //       size: 400,
  //     })
  //   );
  // };

  let [squareStyles, setSquareStyles] = useState(false);

  const styles = {
    backgroundColor: squareStyles ? 'blue' : 'green',
    width: squareStyles ? '400px' : '300px',
    height: squareStyles ? '400px' : '300px',
  };

  const changeStyles = () => {
    setSquareStyles((squareStyles = !squareStyles));
  };

  return (
    <div>
      <div style={styles}></div>
      <button onClick={changeStyles}>Change square</button>
    </div>
  );
}

export default Square;
