import type { TaskParams, UserLogged } from "~/types"
import { TaskItem } from "./taskItem"
import { useEffect, useState } from "react"
import { baseUrl } from "~/utils/constante"
import { getTokenFromStorage } from "~/utils/getUserLogged"


export const DisplayTask = ({user}:{user?:UserLogged | null} ) => {
  const [getTasks,setTask] = useState < TaskParams []>([])
  useEffect(() => {
    fetch(`${baseUrl}/tasks`,{
      headers: {"Authorization": `Bearer ${getTokenFromStorage()}`}
    })
    .then(response => response.json())
    .then(tasks => setTask(tasks))
    
  }, [user])
  return(
    <div className="bg-gray-100 p-10 min-h-screen h-full">
      <div className="bg-white p-8 rounded-2xl w-full not-first:shadow-lg b">
        <h1 className="text-xl my-10 text-center uppercase">liste des tache</h1>
      <div className="flex flex-wrap justify-center gap-4 ">
      {getTasks.map((task) =><TaskItem key={task.id} task={task}  />)}
      </div>
      </div>
      </div>
  )
}