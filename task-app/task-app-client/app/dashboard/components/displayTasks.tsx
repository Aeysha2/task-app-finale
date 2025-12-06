import type { TaskParams } from "~/types"
import { TaskItem } from "./taskItem"
import { useEffect, useState } from "react"
import { baseUrl } from "~/utils/constante"


export const DisplayTask = () => {
  const [getTasks,setTask] = useState < TaskParams []>([])
  useEffect(() => {
    fetch(`${baseUrl}/tasks`)
    .then(response => response.json())
    .then(tasks => setTask(tasks))
    
  }, [])
  return(
    <div className="bg-gray-100 p-10 min-h-screen h-full">
      <div className="bg-white p-8 rounded-2xl w-full not-first:shadow-lg b">
        <h1 className="text-xl my-10 text-center uppercase">liste des tache</h1>
      <div className="flex flex-wrap justify-center gap-4 ">
      {getTasks.map(({id,title,description,Status}) =><TaskItem key={id} id={id} title={title} description={description} Status={Status} />)}
      </div>
      </div>
      </div>
  )
}