import './TodoEditor.css';
import { useRef, useState, useContext } from 'react';
import { TodoDispatchContext } from '../TodoContext.jsx';

export default function TodoEditor() {
  const { onCreate } = useContext(TodoDispatchContext);
  
  const [content, setContent] = useState('');
  const inputRef = useRef(null);  // https://stackoverflow.com/a/74297048/1533065

  const onChangeState = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div className="TodoEditor">
      <input
        ref={ inputRef }
        value={ content }
        onChange={ onChangeState }
        onKeyDown={ onKeyDown }
        placeholder="What is your new todo?"/>
      <button onClick={ onClick }>추가</button>
    </div>
  );
}
