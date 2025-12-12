import { Router } from "express";
import {
    createTask,
    findAllTasks,
    findTaskById,
    finishingTask,
    startingTask
} from "./service.js";

export const TaskRouter = Router()
TaskRouter
    .get("/", async (request:any, response:any) => {
        console.log("TaskRouter",request.userId)
         try {
            const taskStatus: string = (request.query.Status as string) || ""
             const tasks = await findAllTasks(taskStatus, request.userId)
            return response.json(tasks)
         } catch (error: any) {
            response.status(404).json({ message: error.message })
         }
    })


    .get("/:id", async (request, response) => {
        const task = await findTaskById(request.params.id)
        return response.json({ task })
    }
    )

    .patch("/starting/:id", async (request, response) => {
        try {
            const taskUpdated = await startingTask(request.params.id)
            response.json({ taskUpdated })
        } catch (error: any) {
            response.status(404).json({ message: error.message })
        }
    })

    .patch("/finishing/:id", async (request, response) => {
        try {
            const taskUpdated = await finishingTask(request.params.id)
            response.json({ taskUpdated })
        } catch (error: any) {
            response.status(404).json({ message: error.message })
        }
    })

    .post("/", async (request:any, response:any) => {

        const task = await createTask({...request.body, userId:request.userId})

        response.json({task})
    }) 