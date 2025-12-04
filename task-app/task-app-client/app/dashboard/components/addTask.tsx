import { Button } from "~/authentification/components/button"
import { Form } from "~/authentification/components/form"
import { FormTitle } from "~/authentification/components/formTitle"
import { Input } from "~/authentification/components/input"

export const AddTask = () => {
    const addTask = () => { }
    return (
        <Form position="start">
            
                <FormTitle title="Nouvelle tache" />
                <Input label="Titre" type="text" />
                <Input label="Description" type="text" />
                <Button title="Ajouter" onclick={addTask} />
           
        </Form>
    )
}