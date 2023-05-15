import { useState } from 'react';

function App() {
  const [names, setName] = useState(['darkchoco', '김수정', '정연정']);

  return (
    <div className="App">
      {names[0]}<br/>
      {names[1]}<br/>
      {names[2]}<br/>
    </div>
  );
}

export default App;
