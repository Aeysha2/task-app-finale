import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()
export const UserRouter = Router()
const prisma = new PrismaClient()
UserRouter
    .get("/", async (request, response) => {
        const users = await prisma.user.findMany()

        response.json({users})
    })

    .get("/:id", (request, response) => {

        response.send(` utilisateur ${request.params.id}`)
    })

    .post("/", async (request, response) => {
        const {
            Firstname,
            Lastname,
            Email,
            Password
        } = request.body
        prismaClient.user.create({data:{Email,Firstname,Lastname,Password}})
        await prismaClient.user.create({data:{Email,Firstname,Lastname,Password}})

        response.send(` utilisateur:
        
         ${request.body.Firstname}
         ${request.body.Lastname}
         ${request.body.Email}
         ${request.body.Password}

         `)
    }) 