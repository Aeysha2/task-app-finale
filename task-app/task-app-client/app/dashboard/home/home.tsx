import { useState } from "react"
import { AddTask } from "../components/addTask"
import { DisplayTask } from "../components/displayTasks"


export const Home = () => {
    const [tasksVisibility,setTasksVisibility] = useState(true)


    const toggle = () => {
        setTasksVisibility(!tasksVisibility)
        console.log("toggle")
    }

    if (tasksVisibility) {

    }
    return (
        <>
            <div className="bg-blue-600 p-10 gap-40 flex justify-center items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white flex  justify-center items-center rounded-full uppercase">AN</div>
                    <small className="text-base uppercase">Aissatou Ndao</small>
                </div>
                <h1 className="text-white text-3xl">Application de Gestion de Tâches</h1>
            </div>
            <nav className="bg-gray-100 p-10">
                <ul className="flex justify-center items-center gap-8">
                    { tasksVisibility
                       ? <li onClick={toggle} className="text-base cursor-pointer uppercase hover:text-indigo-700 font-medium"> ➕Ajouter</li>
                       :<li onClick={toggle} className="text-base cursor-pointer uppercase hover:text-indigo-700 font-medium">📋Afficher la Liste des Tâches</li>
                    }
                </ul>
            </nav>
            {
                tasksVisibility
                    ? <DisplayTask />
                    : <AddTask />
            }
        </>
    )
}