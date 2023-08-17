import Task from "./Task"
const Tasks = ({ tasks, onDelete, reminder }) => {
  return (
    <>
    {tasks.map((task,index) =>( 
        <Task key={index} task={task} 
         onDelete={onDelete}
         reminder = {reminder}/>
    ))}
    </>
  )
}
export default Tasks