import "./todoCard.css"

function todoCard({task,categeory}) {
    const Category_Emoji = {
        Sports: "🏏",
        Work: "🧑‍🏭",
        Learning: "🏫",
        Health: "🧑‍⚕️",
        Personal: "💻",
        Shopping: "🛒",
        Other: "😁"
    }

  return (
    <div className="todo-Card">
        {task}
        <span className="category">
            {categeory}
        {Category_Emoji[categeory]} {categeory}
        </span>
    </div>
  )
}
export default todoCard