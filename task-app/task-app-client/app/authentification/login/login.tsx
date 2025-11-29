import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"

export const Login = () => {
   const handlerLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      console.log("handlerLogin")
   }
   return (
      <Form>
         <div className="space-y-4" >
            <FormTitle title="connexion" />
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Button title="Connect" onclick={handlerLogin} />
         </div>
      </Form>

   )
}