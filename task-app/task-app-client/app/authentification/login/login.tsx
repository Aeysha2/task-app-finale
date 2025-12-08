import { useState } from "react";
import { AuthInfo } from "../components/authInfo";
import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"
import { useNavigate } from "react-router";
import { baseUrl, userLoggedKey } from "~/utils/constante";
import type { UserLogged } from "~/types";

export const Login = () => {
   const [Email,setEmail] = useState("")
   const [Password,setPassword] = useState("")

   const navigate = useNavigate()
   const handlerLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      fetch(`${baseUrl}/users/login`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({Email,Password})
          })
          .then(response => response.json())
          .then(({user}) => {
            localStorage.setItem(userLoggedKey, JSON.stringify(user))
            navigate("dashboard")
      
          })
          .catch((error) => {
                      console.error("Echec  de la connexion:", error)})
   }
   return (
      <Form>
         <div className="space-y-4" >
            <FormTitle title="connexion" />
            <Input label="Email" type="email" onChange={setEmail}/>
            <Input label="Password" type="password" onChange={setPassword} />
            <Button title="Se Connecter" onclick={handlerLogin}/>
            <AuthInfo action="inscrivez-vous" answer="Vous n'avez pas de compte" url="/register" />
            <AuthInfo action="réinitialiser-le" answer="Mot de passe oublié " url="/forgotpassword" />
         </div>
      </Form>

   )
}