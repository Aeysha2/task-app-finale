import { Router } from "express";
import { PrismaClient,$Enums } from "@prisma/client";

export const TaskRouter = Router()
const prisma = new PrismaClient()

TaskRouter
    .get("/", async (request, response) => {
        const tasks = await prisma.task.findMany()
        response.json({tasks})

    })

    .get("/:id", async (request, response) => {

        const tasks = await prisma.task.findUnique({where:{id:request.params.id}})

        response.json({tasks})
    })

    .post("/", async (request, response) => {
        const{
            title,
            description,
            Status
        } = request.body
        await prisma.task.create({data:{title,description,Status:$Enums.TaskStatus.PENDING}})

        response.send(` tache:
        
         ${request.body.title}
         ${request.body.description}

         `)
    }) 