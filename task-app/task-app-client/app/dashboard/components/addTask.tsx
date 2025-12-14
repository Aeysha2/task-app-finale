import { useState } from "react"
import { useNavigate } from "react-router"
import { Button } from "~/authentification/components/button"
import { Form } from "~/authentification/components/form"
import { FormTitle } from "~/authentification/components/formTitle"
import { Input } from "~/authentification/components/input"
import type { UserLogged } from "~/types"
import { baseUrl } from "~/utils/constante"
import { getTokenFromStorage } from "~/utils/getUserLogged"


export const AddTask = ({ user }: { user?: UserLogged | null }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();


    const addTask = (event: any) => {
        event.preventDefault()
        fetch(`${baseUrl}/tasks`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${getTokenFromStorage()}`
            },
            body: JSON.stringify({ title, description, userId: user?.id })
        })
            .then(response => response.json())
            .then(task => navigate("/home"))
            .catch((error) => {
                console.error("Erreur lors de la creation de la tâche:", error);
                setTitle("")
                setDescription("")
            })
    }
    return (
        <Form position="start">
            <FormTitle title="Nouvelle tache" />
            <Input label="Titre" type="text" onChange={setTitle} />
            <Input label="Description" type="text" onChange={setDescription} />
            <Button title="Ajouter" onclick={addTask} />
        </Form>

    )

}