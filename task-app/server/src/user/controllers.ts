import { Router } from "express";
import { createUser, findAll, findById, updateById } from "./service";



export const UserRouter = Router()
UserRouter
    .get("/", findAll)

    .get("/:id", findById)


    .put("/:id", async (request, response) => {
        response.json({ user: await updateById(request.params.id, request.body) })
    })


    .post("/", async (request, response) => {
        const user = await createUser(request.body)
        response.json({ user })
        
    }) 