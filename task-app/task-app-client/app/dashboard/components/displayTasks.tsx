import type { TaskParams, UserLogged } from "~/types"
import { TaskItem } from "./taskItem"
import { useEffect, useState } from "react"
import { baseUrl } from "~/utils/constante"
import { getTokenFromStorage } from "~/utils/getUserLogged"
import { StatusFilter } from "./statutFilter"


export const DisplayTask = ({ user }: { user?: UserLogged | null }) => {
  const [statusFilter, setStatusFilter] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [getTasks, setTask] = useState<TaskParams[]>([])
  useEffect(() => {
    fetch(`${baseUrl}/tasks?Status=${statusFilter}&search=${searchInput}`, {
      headers: { "Authorization": `Bearer ${getTokenFromStorage()}` }
    })
      .then(response => response.json())
      .then(tasks => setTask(tasks))

  }, [user, statusFilter, searchInput])
  return (
    <div
      className="relative p-10 min-h-screen h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/a.jpg')" }}
    >      <div className="p-8 rounded-2xl w-full not-first:shadow-lg b">
        <h1 className="text-xl my-10 text-center uppercase">liste des tache</h1>
        <div className="flex justify-center gap-3 mb-6">
          <div className="relative w-1/3">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
            <input
              type="text"
              placeholder="Rechercher une tâche..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-xl w-full"
            />
          </div>
        </div>
        <StatusFilter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
        {getTasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  )
}