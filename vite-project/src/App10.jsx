import './App.css'

// function App() {
//   let drink = 0; // 일반 변수 사용

//   const drinkWater = () => {
//     drink += 1;
//     console.log(`버튼 클릭 횟수 ${drink}번`);
//   };

//   return (
//     <>
//       <div id='style1'>
//         <p>
//           오늘은 물을 <strong>{drink}</strong> 잔을 충전했습니다!!
//         </p>
//         <br/><br/><br/>
//         <button onClick={drinkWater}>물</button>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';

function App() {
  const [ drink, setDrink ] = useState(0);

  const drinkWater = () => {
    setDrink(drink + 1);
  };

  return (
    <>
      <div>
        <p>
          오늘은 물을 <strong>{drink}</strong> 잔을 충전했습니다!!
        </p>
        <br /><br /><br />
        <button onClick={drinkWater}>물</button>
      </div>
    </>
  );
}

export default App;