import { useState } from "react"
import { Button } from "~/authentification/components/button"
import { Form } from "~/authentification/components/form"
import { FormTitle } from "~/authentification/components/formTitle"
import { Input } from "~/authentification/components/input"
import { baseUrl } from "~/utils/constante"


export const AddTask = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addTask = (event: any) => {
        event.preventDefault()
        fetch(`${baseUrl}/tasks`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title, description})
        })
            .then(response => response.json())
            .then(task => {})
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