import { Router } from "express";
export const UserRouter = Router()


UserRouter
.get("/",(request,response)=> {

    response.send("listes des utilisateur")
}) 

.get("/:id",(request,response)=> {
    
    response.send(` utilisateur ${request.params.id}`)
}) 

.post("/",(request,response)=> {
    
    response.send(` utilisateur:
        
         ${request.body.Firstname}
         ${request.body.Lastname}
         ${request.body.Email}
         ${request.body.Password}

         `)
}) 