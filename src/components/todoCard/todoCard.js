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
        Sports: "#49d2a7",
        Learning: "#316f9a",
        Work: "#86b300",
        Personal: "#c65329",
        Shopping: "#c65329",
        Health: "#5d5b95",
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