import './TodoList.css';
import TodoItem from './TodoItem.jsx';
import { useState, useMemo } from 'react';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === '')
      return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const { totalCnt, doneCnt, notDoneCnt } =
    useMemo(() => {
      const totalCnt = todos.length;
      const doneCnt = todos.filter(todo => todo.isDone).length;
      const notDoneCnt = totalCnt - doneCnt;

      return { totalCnt, doneCnt, notDoneCnt };
    }, [todos]);

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전체 Todo: { totalCnt }</div>
        <div>완료 Todo: { doneCnt }</div>
        <div>미완 Todo: { notDoneCnt }</div>
      </div>
      <input
        value={ search }
        onChange={ onChangeSearch }
        placeholder="검색어를 입력하세요."/>
      <div className="todos_wrapper">
        {
          filterTodos().map((todo) => (
            <TodoItem key={ todo.id } { ...todo } onUpdate={ onUpdate } onDelete={ onDelete }/>
          ))
        }
      </div>
    </div>
  );
}
