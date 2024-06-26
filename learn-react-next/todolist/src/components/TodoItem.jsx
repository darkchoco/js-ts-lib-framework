import './TodoItem.css';
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../TodoContext.jsx';

function TodoItem({ id, isDone, createdDate, content }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={ onChangeCheckbox }
        type="checkbox"
        checked={ isDone }
      />
      <div className="content">{ content }</div>
      <div className="date">{ new Date(createdDate).toLocaleDateString() }</div>
      <button onClick={ onClickDeleteButton }>삭제</button>
    </div>
  );
}

const OptimizedTodoItemComponent = memo(TodoItem);

export default OptimizedTodoItemComponent;
