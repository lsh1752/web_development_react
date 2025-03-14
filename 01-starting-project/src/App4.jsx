import { Component, useState } from "react";
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
import { EXAMPLES } from "./data_updated.js"

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectredtopic) {
    // selectedButton = 'commponent', 'jsx', 'props', 'state'
    console.log(selectredtopic);
    setSelectedTopic(selectredtopic);
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
        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
      {selectedTopic == '' ? <h3>버튼을 클릭해보세요</h3> : 
            <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
      }
    </section>
      </main>
    </div>
  );
}

export default App;