import useTitle from "./script/useTitle.js";
import {useState} from "react";
import './App.css';

function Counter() {
  const [ count, setCount ] = useState(0);
  useTitle(`쓸대없이 누른 횟수 ${count}`)

  const handleClick = () => setCount((preCount) => preCount + 1);

  return(
    <>
      <div id="style2">
        <p>!카운터!</p>
      </div>
      <div id="style1">
        <p>타이틀을 보시오</p>
        <button onClick={handleClick}>증가</button>
      </div>
    </>
  );
}

export default Counter