import React,{useState} from "react";

function Todo() {
  const [tasks, setTasks] = useState(["Eat breakfast","Take a shower","Walk the dog"]);
  const [newTask, setNewTask] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value)
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
        <input type="text"
        placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange} />
        <button
          className="add-button"
        onClick={addTask}>
          Add
        </button>
      </div>
    </>
)
}
export default Todo;