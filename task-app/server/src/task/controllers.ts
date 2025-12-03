import { Router } from "express";
import { PrismaClient,TaskStatus} from "@prisma/client";
import { findAllTasks, findTaskById, finishingTask, startingTask } from "./service";

export const TaskRouter = Router()
const prisma = new PrismaClient()

TaskRouter
    .get("/", findAllTasks)

    .get("/:id",findTaskById )

    .patch("/starting/:id", startingTask )

    .patch("/finishing/:id", finishingTask)

    .post("/", async (request, response) => {
        const {
            title,
            description,
            Status
        } = request.body
        await prisma.task.create({ data: { title, description, Status: TaskStatus.PENDING } })

        response.send(` tache:
        
         ${request.body.title}
         ${request.body.description}

         `)
    }) 