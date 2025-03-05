import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    alert(`안녕, ${name}!`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} id='style1'>
      <div>
        <input type="text" onChange={handleChange} placeholder='이름을 입력해 주세요.' value={name}/>
        <input type="submit" value="제출"/>
      </div>
    </form>
  )
}

export default App
