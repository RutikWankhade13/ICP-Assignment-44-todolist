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
    const Category_Color = {
        Sports: "#008080",
        Learning: "#4d4dff",
        Work: "#86b300",
        Personal: "#0099ff",
        Shopping: "#cc00cc",
        Health: "#00e600",
        Other: "#ffad33"
    }
  return (
    <div className="todo-Card">
        {task}
        <span className="category">
            {categeory}
            <span className="category" style={{backgroundColor: Category_Color[categeory]}}></span>
        {Category_Emoji[categeory]} {categeory}
        </span>
    </div>
  )
}
export default todoCard