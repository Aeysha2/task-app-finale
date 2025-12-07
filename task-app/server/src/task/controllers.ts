import { Router } from "express";
import { PrismaClient,TaskStatus} from "@prisma/client";
import { createTask, findAllTasks, findTaskById, finishingTask, startingTask } from "./service";

export const TaskRouter = Router()
const prisma = new PrismaClient()

TaskRouter
    .get("/", findAllTasks)

    .get("/:id",findTaskById )

    .patch("/starting/:id", startingTask )

    .patch("/finishing/:id", finishingTask)

    .post("/", async (request, response) => {
        
        const task = await createTask(request.body)

        response.json(task)
    }) 