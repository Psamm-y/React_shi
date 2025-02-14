import React,{useState} from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState([]);

  function handleInputChange(event) {
    
  }
  function addTask() {
    
  }
  function deleteTask(index) {
    
  }
  function moveTaskUp(index) {
    
  }
  function moveTaskDown() {
    
  }
  return (
    <>
      <div className="to-do-list"></div>
      <h1>To-Do List</h1>

      <div>
        <input type="text" />
      </div>
    </>
)
}
export default Todo;