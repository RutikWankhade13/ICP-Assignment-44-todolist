import "./Home.css"
import add from "./add.png"
import ToDoCard from "../../components/todoCard/todoCard"
import { useState } from "react"
function Home() {
    const todolist = [
        "Go to gym",
        "buy grocery",
    ]
    const [todoList, setTodoList] = useState([
        "finish project",
        "household",
        "pay bill",
        "watch movie"
    ])
    const [newTask, setNewTask] = useState("")

  return (
    <div>
        <h1 className="app-title">To-Do App📝</h1>
        <div className="todolist-container">
           {
         
            todoList.map((todoItem, i)=>{
                return(
                    <ToDoCard key={i} todoItem={todoItem}/>
                )
            })
           }
        </div>
        <div className="add-item-container">
            
            <img src={add} alt="add-btn" className="add-icon"/>
            <input
                type="text"
                placeholder="Add your Task"
                className="add-input"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
            />
          
        </div>
    </div>
)}
export default Home