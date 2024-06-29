import "./todoCard.css"
import bin from "./image.png"
function todoCard({index,task,categeory,deleteItem}) {
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
       
        <span className="category categoryy" style={{backgroundColor: Category_Color[categeory]}}>
            {Category_Emoji[categeory]} {categeory}
        </span>
            <img src={bin} className="delete-icon categoryy" onClick={()=>{
                deleteItem(index)
            }}/>

    </div>
  )
}
export default todoCard