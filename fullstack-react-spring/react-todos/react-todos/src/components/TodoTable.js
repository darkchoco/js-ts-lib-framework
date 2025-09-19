import TodoRowItem from './TodoRowItem';

function TodoTable(props) {
  return (
    <div>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assignee</th>
        </tr>
        </thead>
        <tbody>
        <TodoRowItem rowNumber={ props.todos[0].rowNumber } rowDescription={ props.todos[0].rowDescription }
                     rowAssignee={ props.todos[0].rowAssignee }/>
        <TodoRowItem rowNumber={ props.todos[1].rowNumber } rowDescription={ props.todos[1].rowDescription }
                     rowAssignee={ props.todos[1].rowAssignee }/>
        <TodoRowItem rowNumber={ props.todos[2].rowNumber } rowDescription={ props.todos[2].rowDescription }
                     rowAssignee={ props.todos[2].rowAssignee }/>
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;
