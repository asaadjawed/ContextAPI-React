import logo from './logo.svg';
import './App.css';

import TaskList from './Component/TaskList';
import TaskContextProvider, { TaskContext } from './Contexts/TaskContext';

function App() {
  return (
    <div className="App">

      <TaskContextProvider>

        <TaskList />
        
      </TaskContextProvider>
    
    </div>
  );
}

export default App;
