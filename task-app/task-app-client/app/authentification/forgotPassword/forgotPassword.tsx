import { baseUrl } from "~/utils/constante"
import { AuthInfo } from "../components/authInfo"
import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"
import { useState } from "react"

export const ForgotPassword = () => {
    const [Email,setEmail] = useState("")
    const handlerForgotPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
              fetch(`${baseUrl}/users/forgotPassword/${Email}`)
                  .then(response => response.json())
                  .then((data) => {})
                  .catch((error) => {
                  console.error("Echec  de la connexion:", error)})
      };
    return (
        <Form>
            <div className="space-y-4" >
                <FormTitle title="Mot de passe oublié" />
                <Input label="Email" type="email" onChange={setEmail}/>
                <Button title="Verification de l’email" onclick={handlerForgotPassword} />
                <AuthInfo action="connectez-vous" answer="vous vous souvenez de votre mot de passe  " url="/" />
            </div>
        </Form>)
}