import { Router } from "express";
import {
    createTask,
    deleteTaskById,
    findAllTasks,
    findTaskById,
    finishingTask,
    startingTask,
    updateTask
} from "./service.js";
import { Auth } from "../middleware/auth.js";

export const TaskRouter = Router()
TaskRouter
    .get("/", async (request: any, response: any) => {
        try {
            const taskStatus: string = (request.query.Status as string) || ""
            const search: string = (request.query.search as string) || ""
            const tasks = await findAllTasks(taskStatus, request.userId, search)
            return response.json(tasks)
        } catch (error: any) {
            response.status(404).json({ message: error.message })
        }
    })

    .get("/:id", async (request, response) => {
        const task = await findTaskById(request.params.id)
        return response.json({ task })
    })

    .delete("/:id", async (request, response) => {
        const task = await deleteTaskById(request.params.id)
        return response.json({ task })
    })

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

    .put("/:id", Auth, async (request: any, response: any) => {
        try {
            const updatedTask = await updateTask(request.params.id, request.body)
            response.json({ task: updatedTask })
        } catch (error: any) {
            response.status(400).json({ message: error.message })
        }
    })

    .post("/", async (request: any, response: any) => {

        const task = await createTask({ ...request.body, userId: request.userId })

        response.json({ task })
    }) 