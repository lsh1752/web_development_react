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
        {/* <Tabbutton>Components</Tabbutton>
        <TabButton>JSX</TabButton>
        <TabButton>Props</TabButton>
        <TabButton>State</TabButton> */}
        <TabButton label='Components' />
        <TabButton label='JSX' />
        <TabButton label='Props' />
        <TabButton label='State' />
      </menu>
      동적인 버튼 클릭의 결과물
    </section>
      </main>
    </div>
  );
}

export default App;