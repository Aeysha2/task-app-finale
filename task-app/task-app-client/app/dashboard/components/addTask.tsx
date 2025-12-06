import { useState } from "react";
import { Button } from "~/authentification/components/button";
import { Form } from "~/authentification/components/form";
import { FormTitle } from "~/authentification/components/formTitle";
import { Input } from "~/authentification/components/input";
import { baseUrl } from "~/utils/constante";

export const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = async (event: any) => {
        event.preventDefault();

        try {
            const response = await fetch(`${baseUrl}/tasks`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description }),
            });

            const task = await response.json();
            console.log("Tâche créée :", task);
        } catch (error) {
            console.error("Erreur lors de la création de la tâche :", error);
        }
    };

    return (
        <Form position="start">
            <FormTitle title="Nouvelle tâche" />
            <Input label="Titre" type="text" onChange={setTitle} />
            <Input label="Description" type="text" onChange={setDescription} />
            <Button title="Ajouter" onclick={addTask} />
        </Form>

    );

};











