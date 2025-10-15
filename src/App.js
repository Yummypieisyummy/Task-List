import List from './List'
import { useState } from 'react'
import './Styles/App.css'

function App() {

  const [taskList, setTasks] = useState([
    {id: 1, title: "Laundry", description: "Use soap"},
    {id: 2, title: "Shower", description: "Use more soap"},
  ])

  return (
    <div className="App">
      <div className="App-header">
        <h1>Task List</h1>
      </div>
      <div className="App-body">
        <List tasks={taskList}/>
      </div>
    </div>
  );
}

export default App;
