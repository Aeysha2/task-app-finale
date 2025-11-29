import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"

export const ResetPassword = () => {
    const handlerResetPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log("handlerResetPassword")
    }
    return (
        <Form>
            <div className="space-y-4" >
                <FormTitle title="Reinitialisation de mot de passe" />
                <Input label="Password" type="password" />
                <Input label="Confirm Password" type="password" />
                <Button title="Reinitialiser" onclick={handlerResetPassword} />
            </div>
        </Form>)
}