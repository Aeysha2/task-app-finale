import { Router } from "express";
import { PrismaClient } from "@prisma/client";


export const UserRouter = Router()
const prisma = new PrismaClient();

UserRouter
.get("/",(request,response)=> {

    response.send("listes des utilisateur")
}) 

.get("/:id",(request,response)=> {
    
    response.send(` utilisateur ${request.params.id}`)
}) 

.post("/",async (request,response)=> {
    const {
        Firstname,
        Lastname,
        Email,
        Password

    } = request.body
    await prisma.user.create({data:{Email,Firstname,Lastname,Password}})
    response.send(` utilisateur:
        
         ${request.body.Firstname}
         ${request.body.Lastname}
         ${request.body.Email}
         ${request.body.Password}

         `)
}) 