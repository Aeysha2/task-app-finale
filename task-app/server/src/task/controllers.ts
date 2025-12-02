import { Router } from "express";
import { PrismaClient, $Enums , TaskStatus} from "@prisma/client";
import { error } from "node:console";

export const TaskRouter = Router()
const prisma = new PrismaClient()

TaskRouter
    .get("/", async (request, response) => {
        const taskStatus: string = (request.query.Status as string) || ""
        const statusMap: Record<string,  TaskStatus> = {
            PENDING:  TaskStatus.PENDING,
            STARTING:  TaskStatus.STARTING,
            FINISHING:  TaskStatus.FINISHING
        }
        
        if (taskStatus && statusMap[taskStatus]) {
            const statusValue = statusMap[taskStatus]
            console.log("request: " , taskStatus,statusValue)
            const tasks = await prisma.task.findMany({ 
        where: { Status: statusValue }
    })
    return response.json({ tasks })
    }
    const tasks = await prisma.task.findMany()
    return response.json({ tasks })
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
            if (task.Status === $Enums.TaskStatus.STARTING) {
                response.json({ message: "vous avez deja commencer cette tache vous devais la terminer" })
                return
            }
            const taskUpdated = await prisma.task.update({
                where: { id: taskId }, data: { Status: $Enums.TaskStatus.STARTING }
            })
            response.json({ taskUpdated })

        } catch (error: any) {
            response.status(404).json({ message: error.message })
        }
    })

    .patch("/finishing/:id", async (request, response) => {
        try {
            const taskId = request.params.id
            const task = await prisma.task.findUnique({ where: { id: taskId } })
            if (!task) throw new Error(`Tache non trouver avec cet id. ${taskId}`)
            if (task.Status === $Enums.TaskStatus.PENDING) throw new Error(`Commencer d‘abord la tache`)
            if (task.Status === $Enums.TaskStatus.FINISHING) {
                response.json({ message: "tache deja terminée" })
                return
            }
            const taskUpdated = await prisma.task.update({
                where: { id: taskId }, data: { Status: $Enums.TaskStatus.FINISHING }
            })
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