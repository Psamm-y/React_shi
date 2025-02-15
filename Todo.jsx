import React,{useState} from "react";

function Todo() {
  const [tasks, setTasks] = useState(["Eat breakfast","Take a shower","Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
    setNewTask("");
    }
    
  }
  function deleteTask(index) {
    
  }
  function moveTaskUp(index) {
    
  }
  function moveTaskDown() {
    
  }
  return (
    <>
      <div className="to-do-list">
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
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button"
            onChange={()=>deleteTask(index)}>
              Delete
            </button>
            <button className="move-button"
            onChange={()=>moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button"
            onChange={()=>moveTaskDown(index)}>
              ⬇️
            </button>
          </li>)}
        </ol>
        </div>
    </>
)
}
export default Todo;