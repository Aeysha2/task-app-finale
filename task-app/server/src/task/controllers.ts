import { Router } from "express";
import { 
    createTask, 
    findAllTasks,
    findTaskById, 
    finishingTask, 
    startingTask 
} from "./service";

export const TaskRouter = Router()
TaskRouter
    .get("/users/:id", async(request,response) => {
        try {
            const taskStatus:string = (request.query.Status as string) || ""
            const tasks = await findAllTasks(taskStatus,request.params.id)
            return response.json(tasks)
        } catch (error:any) {
            response.status(404).json({message: error.message})
            
        }
    })
            

    .get("/:id",findTaskById )

    .patch("/starting/:id", startingTask )

    .patch("/finishing/:id", finishingTask)

    .post("/", async (request, response) => {
        
        const task = await createTask(request.body)

        response.json(task)
    }) 