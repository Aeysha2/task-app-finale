import { baseUrl } from "~/utils/constante"
import { Button } from "../components/button"
import { Form } from "../components/form"
import { FormTitle } from "../components/formTitle"
import { Input } from "../components/input"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"

export const ResetPassword = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [Password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handlerResetPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (Password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !")
            return
        }
        fetch(`${baseUrl}/users/resetPassword/${token}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Password })
        })
            .then(res => res.json())
            .then(() => navigate("/"))
            .catch(err => console.error("Erreur reset password:", err))
        console.log("handlerResetPassword")
    }
    return (
        <Form>
            <div className="space-y-4" >
                <FormTitle title="Reinitialisation de mot de passe" />
                <Input label="Password" type="password" onChange={setPassword} />
                <Input label="Confirm Password" type="password" onChange={setConfirmPassword} />
                <Button title="Reinitialiser" onclick={handlerResetPassword} />
            </div>
        </Form>)
}