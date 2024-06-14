import './App.css';
import Viewer from './components/Viewer.jsx';
import Controller from './components/Controller.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(`텍스트: ${text}`);
  }, [text]);

  useEffect(() => {
    console.log(`카운트: ${count}`);
  }, [count]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  }
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
} 

export default App;
