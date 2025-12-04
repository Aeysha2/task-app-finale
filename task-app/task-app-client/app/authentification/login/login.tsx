import { AuthInfo } from "../components/authInfo";
import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"
import { useNavigate } from "react-router";

export const Login = () => {
   const navigate = useNavigate()
   const handlerLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      navigate("dashboard")
      console.log("handlerLogin")
   }
   return (
      <Form>
         <div className="space-y-4" >
            <FormTitle title="connexion" />
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Button title="Se Connecter" onclick={handlerLogin}/>
            <AuthInfo action="inscrivez-vous" answer="Vous n'avez pas de compte" url="/register" />
            <AuthInfo action="réinitialiser-le" answer="Mot de passe oublié " url="/forgotpassword" />
         </div>
      </Form>

   )
}