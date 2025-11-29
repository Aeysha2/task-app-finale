import { Router } from "express";
import { PrismaClient, $Enums } from "@prisma/client";
import { error } from "node:console";

export const TaskRouter = Router()
const prisma = new PrismaClient()

TaskRouter
    .get("/", async (request, response) => {
        const tasks = await prisma.task.findMany()
        response.json({ tasks })

    })

    .get("/:id", async (request, response) => {

        const task = await prisma.task.findUnique({ where: { id: request.params.id } })

        response.json({ task })
    })

    .patch("/starting/:id", async (request, response) => {
        try {
            const taskId = request.params.id
            const task = await prisma.task.findUnique({ where: { id: taskId } })
            if (!task) throw new Error(`Tache non trouver avec cet id. ${taskId}`)
            const taskUpdated = await prisma.task.update({ where: { id: taskId }, data: { Status: $Enums.TaskStatus.STARTING } })
            response.json({ taskUpdated })
        } catch (error: any) {
            response.status(404).json({ message: error.message })
        }
    })

    .post("/", async (request, response) => {
        const {
            title,
            description,
            Status
        } = request.body
        await prisma.task.create({ data: { title, description, Status: $Enums.TaskStatus.PENDING } })

        response.send(` tache:
        
         ${request.body.title}
         ${request.body.description}

         `)
    }) 