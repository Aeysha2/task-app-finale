import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()
export const UserRouter = Router()
const prisma = new PrismaClient()
UserRouter
    .get("/", async (request, response) => {
        const users = await prisma.user.findMany()
        response.json({ users })
    })

    .get("/:id", async (request, response) => {
        const user = await prisma.user.findUnique({ where: { id: request.params.id } })
        response.json({ user })
    })



    .put("/:id", async (request, response) => {
        const userID = request.params.id
        const user = await prisma.user.findUnique({ where: { id: request.params.id } })
        if (!user) throw new Error(`Utilisateur non trouver avec cet id. ${userID}`)
        const { Firstname,Lastname,Email } = request.body

            
        const userUpdated = await prisma.user.update({
                        where: { id: userID }, 
                        data: { Firstname,Lastname,Email }
                    })
        response.json({ user })
    })
    

    .post("/", async (request, response) => {
        const { Firstname,Lastname,Email,Password } = request.body
        prismaClient.user.create({ data: { Email, Firstname, Lastname, Password } })
        const user = await prismaClient.user.create({ data: { Email, Firstname, Lastname, Password } })
        response.json({ user })

        
    }) 