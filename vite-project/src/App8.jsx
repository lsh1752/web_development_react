import { useRef } from 'react';
import './App.css';

function App8() {
  const inputRef = useRef(null);    // 1번 과정

  return (
    <>
      <div id='style1'>
        <button onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>
        <input ref={inputRef} />
      </div>
    </>
  );
}

export default App8