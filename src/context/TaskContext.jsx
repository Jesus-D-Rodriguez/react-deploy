import {createContext, useEffect, useState} from "react"
import {tasks as data } from "../data/task"


export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, descripcion) {
        setTasks([...tasks, {
          title: taskTitle,
          id: taskTitle.length, 
          descripcion: descripcion
        }])
      }



      function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
      }

      useEffect(() => {
        setTasks(data)
      }, [])

    return(
     <TaskContext.Provider value={{
        tasks:tasks,
        deleteTask: deleteTask,
        createTask: createTask,
     }}>
        {props.children}
     </TaskContext.Provider>
    )
}
