import useTitle from "./script/useTitle.js";
import {useState} from "react";
import './App.css';

function Counter() {
  const [ count, setCount ] = useState(0);
  useTitle(`당신은 ${count}번 클릭했습니다!`)

  const handleClick = () => setCount((preCount) => preCount + 1);

  return(
    <>
      <div id="style1">
        <p>{count}</p>
        <button onClick={handleClick}>증가</button>
      </div>
    </>
  );
}

export default Counter