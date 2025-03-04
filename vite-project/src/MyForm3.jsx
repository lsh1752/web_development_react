import { useState } from "react";
import './App.css'

export default function MyForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // 입력 상자의 내용이 변경되면 값을 상태에 저장
  const handleChange = (event) => {
    setUser({... user, [event.target.name]:
      event.target.value});
  }

  const handleSubmit = (event) => {
    alert(`Welcome! ${user.lastName} ${user.firstName}\n email: ${user.email}`);
    event.preventDefault();
  }

  // handleSubmit을 리액트 형식으로 정의할겁니다.
  // 제출 버튼을 클릭하면 welcome {user.firstName} {user.lastName}이 알람으로 나오게끔 작성할 예정입니다.

  // 그리고 return 파트에 firstName 작성한, lastName 작성한, email 작성한을 만들고 제출 버튼까지 생성하겠죠.

  // 내일 할거

  // 리턴패트에 어떻게 작성을 해야할지 보고

  // handleSubmit 정의 부분  

  // 리턴 부분
  return (
    <form id="style1" onSubmit={handleSubmit}>
      <div id="inbox">
        <div>
          <label>First name </label>
          <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/>
        </div>
        <div>
          <label>Last name </label>
          <input type="text" name="lastName" onChange={handleChange} value={user.lastName}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} value={user.email}/>
        </div>
        {/* 이상을 기준으로 Last Name과 email부분을 정의하시오. */}

        <input type="submit" value="제출"/>
      </div>
    </form>
  )
}