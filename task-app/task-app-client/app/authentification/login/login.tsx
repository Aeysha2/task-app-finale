import { Button } from "../components/button"
import { Input } from "../components/input"

export const Login = ()=> {
    return(
    <div className="min-h-screen flex items-center justify-center bg-stone-400">
         <form  className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
            <div className="space-y-4" >
    
               
               <Input label="Email" type="email" />
               <Input label="Password" type="password" />
               <Button title="Connect"/>
    
            
          </div>
         </form>
        </div>)
}