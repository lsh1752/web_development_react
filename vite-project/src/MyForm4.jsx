import { useState } from "react";
import './App.css'

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // 나머지 부분을 전부 완성해서 MyForm3.jsx와 동일하게
  // 동작할 수 있도록 작성하시오.

  const handleSubmit = (event) => {
    alert(`Welcome! ${lastName} ${firstName}\nemail: ${email}`);
    event.preventDefault();
  }

  // 단, handleChange를 정의하지말고 연습삼아서
  // 각 input의 onChange부분에 화살표함수를 통해
  // 정의하도록 하겠습니다.

  return(
    <form id="style1" onSubmit={handleSubmit}>
      <div id="inbox">
        <div>
          <label>First name </label>
          <input type="text" name="firstName" onChange={event => setFirstName(event.target.value)}/>
        </div>
        <div>
          <label>Last name </label>
          <input type="text" name="lastName" onChange={event => setLastName(event.target.value)}/>
        </div>
        <div>
          <label>email </label>
          <input type="email" name="email" onChange={event => setEmail(event.target.value)}/>
        </div>
        <input type="submit" value="제출"/>
      </div>
    </form>
  )
}

export default MyForm