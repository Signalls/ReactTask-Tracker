import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Tasks from "./Components/Tasks";
import Header from "./Components/Header";
import AddTask from "./AddTask";
import About from "./About";
import Footer from "./Footer";
const App = () => {
  const [tasks, SetTask ]= useState ([
    
  ])
  async function DeleteTask (id){
   await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE',
   })
    SetTask(tasks.filter((task) =>task.id !== id))
  }
  async function toggleReminder(id){
    const fetchData = await fetchtask(id)
    const updateTask = {...fetchData,reminder:!fetchData.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type':'application/json',
        },
        body: JSON.stringify(updateTask),
    })
    const data = await res.json()
    SetTask(tasks.map((task)=>
    task.id === id?{...task,reminder:
      data.reminder} :task
     )
    )
  }
  const addTask = async (task)=>{
    const res = await fetch(`http://localhost:5000/tasks/`,{
     method:'POST',
     headers:{
     'Content-type':'application/json',
     },
     body: JSON.stringify(task),
   })
     const data = await res.json()
     SetTask([...tasks,data])
 }
  const[ShowAddTask,SetShowAddTask]=useState(false)
 useEffect(()=>{
   const getTasks = async()=>{
    const tasksfromserver = await fetchtasks()
    SetTask(tasksfromserver)
   }
  getTasks()
 },[])
 const fetchtasks = async()=>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}
const fetchtask = async(id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`,)
  const data = await res.json()
  console.log(data);
  return data
}
  return (
    <div className="container">
      <Header ShowAdd={ShowAddTask}onAdd={()=>SetShowAddTask(!ShowAddTask)} />
      {ShowAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0? <Tasks tasks={tasks} reminder = {toggleReminder}
      onDelete={DeleteTask} />:('No task to show')}
    </div>
  )
}

export default App;
