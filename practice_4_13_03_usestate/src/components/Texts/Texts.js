import { useState } from 'react';

function Texts() {
  // let colored = true;
  let [colored, setColored] = useState(true);

  const textStyle = {
    color: colored ? 'red' : 'black',
  };

  const changeColor = () => {
    setColored((colored = !colored));
  };

  return (
    <div>
      <p style={textStyle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia atque
        distinctio vel possimus voluptatem qui illo ea aliquam iusto voluptates
        labore rerum error, placeat harum ex quo eius quod dicta.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia atque
        distinctio vel possimus voluptatem qui illo ea aliquam iusto voluptates
        labore rerum error, placeat harum ex quo eius quod dicta.
      </p>

      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Texts;
