import { AuthInfo } from "../components/authInfo"
import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"

export const ForgotPassword = () => {
    const handlerForgotPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log("handlerForgotPassword")
    }
    return (
        <Form>
            <div className="space-y-4" >
                <FormTitle title="Mot de passe oublié" />
                <Input label="Email" type="email" />
                <Button title="Verification" onclick={handlerForgotPassword} />
                <AuthInfo action="connectez-vous" answer="vous vous souvenez de votre mot de passe  " url="/" />
            </div>
        </Form>)
}