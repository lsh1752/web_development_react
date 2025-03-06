import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState({
    temp: '',
    desc: '',
    icon: '',
  });
  let city = 'Soul'

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&APIkey=cb4b193fbfcbf300d31cb3358539a4f1`)
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon,
      })
    })
    .catch(err => console.log(err))
  }, []);

  if(weather.icon) {
      return (
        <div id='style1'>
          <p>지역 : {city}</p>
          <p>온도 : {weather.temp} 도</p>
          <p>설명 : {weather.desc}</p>
          <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨 아이콘" />
        </div>
      );
    }
  else {
    return <div>로딩 중...</div>
  }
}

export default App
