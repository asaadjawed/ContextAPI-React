import logo from './logo.svg';
import './App.css';

import TaskList from './Component/TaskList';
import TaskContextProvider, { TaskContext } from './Contexts/TaskContext';
import Person from './Component/Person';

function App() {
  return (
    <div className="App">

      <TaskContextProvider>

        <TaskList />

      </TaskContextProvider>

      <Person />
    
    </div>
  );
}

export default App;
