import './App.css';
import Viewer from './components/Viewer.jsx';
import Controller from './components/Controller.jsx';
import Even from './components/Even.jsx';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      return;
    }
    console.log('업데이트');
  });

  useEffect(() => {
    console.log('마운트');
  }, []);  // deps가 이렇게 빈 배열 형태라면 어떠한 값도 감지하지 않겠다는 뜻. 결국 컴포넌트가 마운트 될 때만 실행된다.

  const onClickButton = (value) => {
    setCount(count + value);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={ text } onChange={ onChangeText }/>
      </section>
      <section>
        <Viewer count={ count }/>
        {/* Short-Circuit Evaluation */}
        { count % 2 === 0 && <Even/> }  
      </section>
      <section>
        <Controller onClickButton={ onClickButton }/>
      </section>
    </div>
  );
}

export default App;
