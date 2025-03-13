import { useState } from "react";
import Header from "./components/Header/Header2.jsx";
// import 이미지변수명 from "경로";
import reactImg from './assets/react-core-concepts.png';
import reactImgComponent from './assets/components.png';
import reactImgConfig from './assets/config.png';
import reactImgJsxUi from './assets/jsx-ui.png';
import reactImgState from './assets/State-mgmt.png';
import Core_Concepts, { CORE_CONCEPTS } from './data.js'
import Core from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  
  const [ selectredtopic, setSelectedTopic ] = useState('');

  function handleSelect(selectredtopic) {
    // selectedButton = 'commponent', 'jsx', 'props', 'state'
    console.log(selectredtopic);
  }

  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
      <h2>핵심 개념들 of React</h2>
      <ul>
        <Core {...CORE_CONCEPTS[0]}/>
        <Core {...CORE_CONCEPTS[1]}/>
        <Core {...CORE_CONCEPTS[2]}/>
        <Core {...CORE_CONCEPTS[3]}/>
      </ul>
    </section>
    <section id="examples">
      <h2>예시들</h2>
      <menu>
        <TabButton onSelect={handleSelect('이잉이잉')}>Components</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>Props</TabButton>
        <TabButton>State</TabButton>
      </menu>
      {selectredtopic}
    </section>
      </main>
    </div>
  );
}

export default App;