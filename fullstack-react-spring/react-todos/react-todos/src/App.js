import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: '멍멍이 산책시키기', rowAssignee: 'SJ' },
    { rowNumber: 2, rowDescription: 'Home Network analysis', rowAssignee: 'IH' },
    { rowNumber: 3, rowDescription: '커피콩 구입하기', rowAssignee: 'SJ' }
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Assignee</th>
            </tr>
            </thead>
            <tbody>
            <TodoRowItem rowNumber={ todos[0].rowNumber } rowDescription={ todos[0].rowDescription }
                         rowAssignee={ todos[0].rowAssignee }/>
            <TodoRowItem rowNumber={ todos[1].rowNumber } rowDescription={ todos[1].rowDescription }
                         rowAssignee={ todos[1].rowAssignee }/>
            <TodoRowItem rowNumber={ todos[2].rowNumber } rowDescription={ todos[2].rowDescription }
                         rowAssignee={ todos[2].rowAssignee }/>
            <tr>
              <th scope="row">4</th>
              <td>시장 보기</td>
              <td>IH</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
