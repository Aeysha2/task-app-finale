import { Input } from "../components/input";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
import { AuthInfo } from "../components/authInfo";
import { useNavigate } from "react-router";
import { useState } from "react";
import { baseUrl } from "~/utils/constante";

export const Register = () => {
  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  
  const navigate = useNavigate()
  const handlerRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({Firstname,Lastname,Email,Password})
    })
    .then(response => response.json())
    .then(user => {
      navigate("/")

    })
    .catch((error) => {
                console.error("Erreur lors de la creation de l‘utilisateur:", error)})
  }

  return (
    <Form>
      <div className="space-y-4" >
        <FormTitle title="Create Account" />
        <Input label="Firstname" type="text" onChange={setFirstname}/>
        <Input label="Lastname" type="text" onChange={setLastname}/>
        <Input label="Email" type="email" onChange={setEmail}/>
        <Input label="Password" type="password" onChange={setPassword}/>
        <Input label="Confirmer le Password" type="password" onChange={setPassword}/>
        <Button title="Create Account" onclick={handlerRegister} />
        <AuthInfo action="connecter-vous"  answer="Vous avez deja un  compte" url="/"/>
      </div>
    </Form>
  );
}