import './App.css';
import Header from './components/Header.jsx';
import TodoEditor from './components/TodoEditor.jsx';
import TodoList from './components/TodoList.jsx';
import { useRef, useState } from 'react';

const mockData = [
  {
    id: 0,
    isDone: true,
    content: 'React 공부하기',
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: '음악 연습하기',
    createdDate: new Date().getTime(),
  }
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };

    setTodos(
      [...todos, newTodo]
    );
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map(todo =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(
      todos.filter(todo => todo.id !== targetId)
    );
  };

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={ onCreate }/>
      <TodoList todos={ todos } onUpdate={ onUpdate } onDelete={ onDelete } />
    </div>
  );
}

export default App;
