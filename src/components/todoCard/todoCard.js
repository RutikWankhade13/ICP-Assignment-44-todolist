import "./todoCard.css"


function todoCard({task,categeory}) {
  return (
    <div className="todo-Card">
        {categeory}
        {task}
        <span className="category">
            {categeory}
        </span>
    </div>
  )
}
export default todoCard