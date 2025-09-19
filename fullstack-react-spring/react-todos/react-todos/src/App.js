import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: '멍멍이 산책시키기', rowAssignee: 'SJ' },
    { rowNumber: 2, rowDescription: 'Home Network analysis', rowAssignee: 'IH' },
    { rowNumber: 3, rowDescription: '커피콩 구입하기', rowAssignee: 'SJ' },
    { rowNumber: 4, rowDescription: '속옷 구입하기', rowAssignee: 'SJ' }
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={ todos } />
        </div>
      </div>
    </div>
  );
}

export default App;
