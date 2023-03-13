// import { useState } from 'react';

// function App() {
//   // let likes = 0;

//   let [likes, setLikes] = useState(0);

//   const decrement = () => {
//     setLikes(--likes);
//   };
//   const increment = () => {
//     setLikes(++likes);
//   };
//   return (
//     <div>
//       <p>{likes}</p>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

// ***********************************************************************

import Square from '../Square/Square';
import Texts from '../Texts/Texts';

function App() {
  return <Square />;
}

export default App;
