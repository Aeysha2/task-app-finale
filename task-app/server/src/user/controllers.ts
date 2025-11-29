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

    .post("/", async (request, response) => {
        const {
            Firstname,
            Lastname,
            Email,
            Password
        } = request.body
        prismaClient.user.create({ data: { Email, Firstname, Lastname, Password } })
        await prismaClient.user.create({ data: { Email, Firstname, Lastname, Password } })

        response.send(` utilisateur:
        
         ${request.body.Firstname}
         ${request.body.Lastname}
         ${request.body.Email}
         ${request.body.Password}

         `)
    }) 