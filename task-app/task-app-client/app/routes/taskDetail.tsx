import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { TaskEditForm } from "~/dashboard/components/taskEditForm"
import { baseUrl } from "~/utils/constante"
import { getTokenFromStorage } from "~/utils/getUserLogged"

export default function TaskDetail() {
    const { id } = useParams();
    const [task, setTask] = useState<any>(null)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        fetch(`${baseUrl}/tasks/${id}`, {
            headers: {
                "Authorization": `Bearer ${getTokenFromStorage()}`
            }
        })
            .then(res => res.json())
            .then(data => setTask(data.task))
    }, [id]);

    if (!task) return <p>Chargement...</p>

    const handleStart = () => {
        fetch(`${baseUrl}/tasks/starting/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getTokenFromStorage()}`
            },
        })
            .then(() => window.location.reload());
    };

    const handleFinishing = () => {
        fetch(`${baseUrl}/tasks/finishing/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getTokenFromStorage()}`
            },
        })
            .then(() => window.location.reload());
    };

    const handleDelete = () => {
        fetch(`${baseUrl}/tasks/${task.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getTokenFromStorage()}`
            },
        })
            .then(() => {
                alert("Tâche supprimée");
                window.location.href = "/dashboard";
            });
    };

    const handleUpdate = (data: any) => {
        fetch(`${baseUrl}/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getTokenFromStorage()}`
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                setIsEditing(false);
                window.location.reload();
            });
    };

    return (
        <div className="max-w-lg mx-auto mt-6 bg-white shadow p-6 rounded-2xl">
            <button
                onClick={() => (window.location.href = "/dashboard")}
                className="mb-4 px-3 py-1 rounded-xl bg-white text-gray-800 hover:bg-gray-400 transition"
            >
                ← Retour à la liste des tâches
            </button>
            <h1 className="text-2xl font-bold mb-3">{task.title}</h1>

            <p className="text-gray-700 mb-4">{task.description}</p>

            <p className="font-semibold">
                Status :
                <span className="ml-1 text-blue-600">{task.Status}</span>
            </p>

            <div className="flex gap-3 mb-4">
                <button
                    onClick={() => setIsEditing(true)}
                    className="px-3 py-1 rounded-xl bg-green-500 text-white"
                >
                    Modifier
                </button>

                <button
                    onClick={handleDelete}
                    className="px-3 py-1 rounded-xl bg-red-500 text-white"
                >
                    Supprimer
                </button>

                {task.Status === "PENDING" && (
                    <button
                        onClick={handleStart}
                        className="px-3 py-1 rounded-xl bg-blue-500 text-white"
                    >
                        Commencer
                    </button>
                )}

                {task.Status === "STARTING" && (
                    <button
                        onClick={handleFinishing}
                        className="px-3 py-1 rounded-xl bg-green-600 text-white"
                    >
                        Terminer
                    </button>
                )}

                {task.Status === "FINISHED" && (
                    <span className="text-gray-500">Tâche terminée</span>
                )}
            </div>

            {isEditing && (
                <TaskEditForm
                    task={task}
                    onSave={handleUpdate}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </div>

    );
}
