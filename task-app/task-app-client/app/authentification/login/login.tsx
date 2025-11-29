import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"

export const Login = () => {
   return (
      <Form>
         <div className="space-y-4" >
            <FormTitle title="connexion" />
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Button title="Connect" />
         </div>
      </Form>

   )
}