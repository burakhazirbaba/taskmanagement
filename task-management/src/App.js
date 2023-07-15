import { useEffect, useState } from "react"
import CreateTask from "./components/CreateTask"
import TaskList from "./components/TaskList"
import axios from "axios"


const App = () => {
    const [tasks, setTasks] = useState([])
    const createTask = async (title, taskDesc) => {

      const response = await axios.post('http://localhost:3004/tasks', {
        title,
        taskDesc
      })
  
      const createdTasks = [...tasks, response.data]
      setTasks(createdTasks)
    }

      const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3004/tasks')
        setTasks(response.data)
      }

    useEffect(()=> {
        fetchTasks()
    },[])

    const deleteTaskById = async (id) => {
      axios.delete(`http://localhost:3004/tasks/${id}`)
        const afterDeletingTasks = tasks.filter((task) => {
          return task.id !==id 
        })
        setTasks(afterDeletingTasks)
    }

    const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
      await axios.put(`http://localhost:3004/tasks/${id}` ,{
        title: updatedTitle, taskDesc: updatedTaskDesc 
      })
      const updatedTasks = tasks.map((task) => {
        if (task.id ===id) {
          return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
      }
      return task
    })
      setTasks(updatedTasks)
  }
  return (
    <div className='App'>
      <CreateTask onCreate={createTask}/>
      <h1>- Task List -</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}
export default App