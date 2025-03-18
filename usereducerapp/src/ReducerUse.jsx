import { useReducer } from "react";

function reducer(prevCount, action) {
  if(action === 'up') {
    return prevCount + 1;
  } else if (action === 'down') {
    return prevCount - 1;
  } else if ( action === 'reset') { // 이후 부분의 조건문 작성하시오.
    return 0;
  }
}

export default function ReducerUse() {
  const [ count, dispatch ] = useReducer(reducer, 0);
  // const 를 변경하기 위해서는 dipatch를 사용

  function down() {
    dispatch("down");
  }

  function up() {
    dispatch("up");
  }

  function reset() {
    dispatch("reset");
  }
  
  // return은 동일하게 완성하시오.
  return(
    <div>
      <p>현재 내가 가지고 있는 사과 개수는 {count} 개</p>
      <br />
      <input type="button" value="apple 1개 먹음" onClick={down}/>
      <br />
      <br />
      <input type="button" value="apple 1개 구매" onClick={up}/>
      <br />
      <br />
      <input type="button" value="apple 다 먹음" onClick={reset}/>
    </div>
  );
}