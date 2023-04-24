import React, { useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [isReady, setReady] = useState(false);

  React.useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=50.9157&lon=14.0719&APPID=MYAPPID&units=metric`)
      .then(result => result.json())
      .then(jsonresult => {
        setTemp(jsonresult.main.temp);
        setDesc(jsonresult.weather[0].main);
        setIcon(jsonresult.weather[0].icon);
        setReady(true);
      })
      .catch(err => console.error(err));
  }, []);  // []을 사용함으로써 fetch가 한번만 된다

  if (isReady) {
    return (
      <div className="App">
        <p>Temperature: {temp} °C</p>
        <p>Description: {desc}</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather icon"/>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
