import { Router } from "express";
import { createUser, findAll, findById, loginUser, updateById } from "./service.js";
import { generateToken } from "../utils/jwt.js";



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

    .post("/login", async(request, response) => {
        try {
            const user = await loginUser({Email: request.body.Email , Password: request.body.Password})
            const token = generateToken(user.id, user.Email)
            response.json({token})
            
        } catch(error:any) {
            response.status(403).json({
                message:error.message
            })
        }
    })