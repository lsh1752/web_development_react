import reactImg from "../../assets/react-core-concepts.png"
import "./Header.css"

const reactDescriptionsKor = [ '근본적인', '결정적인', '핵심적인' ];
const reactDescriptionsEng = [ 'Fundamental', 'Crucial', 'Core' ];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max)); // 얘의 return값은 0 ~ 2의 int가 반환됨
  // 어떻게? Math.random() * (max + 1) 얘의 범위가 0.xxxx ~ 2.xxxx이기 때문
}

function Header() {
  const indexNum = getRandomInt(reactDescriptionsEng.length);

  return(
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React 필수 요소 복습</h1>
    <p>
      <strong>{reactDescriptionsEng[indexNum]}</strong> React concepts you will need for almost any app you are
      going to build!

      <br />
      대부분의 앱을 위해 당신이 필요로 할 <strong>{reactDescriptionsKor[indexNum]}</strong> React 개념 학습 😀
    </p>
  </header>
  );
}

export default Header