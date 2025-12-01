import { Input } from "../components/input";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { AuthInfo } from "../components/authInfo";
import { useNavigate } from "react-router";

export const Register = () => {
  const navigate = useNavigate()
  const handlerRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate("/")
    console.log("handlerRegister")
  }
  return (
    <Form>
      <div className="space-y-4" >
        <FormTitle title="Create Account" />
        <Input label="Firsname" type="text" />
        <Input label="Lastname" type="text" />
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Input label="Confirm password" type="password" />
        <Button title="Create Account" onclick={handlerRegister} />
        <AuthInfo action="connecter-vous"  answer="Vous avez deja un  compte" url="/"/>
      </div>
    </Form>
  );
}