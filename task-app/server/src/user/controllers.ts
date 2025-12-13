import { Router } from "express";
import { createUser, findAll, findById, loginUser, updateById, forgotPassword } from "./service.js";
import { generateToken } from "../utils/jwt.js";
import { Auth } from "../middleware/auth.js";

export const UserRouter = Router()
UserRouter
    .get("/me", Auth, async (request: any, response) => {
        response.json({ user: await findById(request.userId) })
    })

    .get("/", Auth, async (request, response) => {
        response.json({ user: await findAll() })
    })

    .get("/forgotPassword/:Email", async (request, response) => {
        try {
            await forgotPassword(request.params.Email)
            response.json({
                message: `Verifier votre email(${request.params.Email}), nous vous avons envoyé un lien de reinitialisation`
            })
        } catch (error: any) {
            response.status(403).json({ 
            message: "generation de lien de reiitialisation de mot de passe echouer" 
        })
        }
    })

    .get("/:id", Auth, async (request, response) => {
        response.json({ user: await findById(request.params.id) })
    })

    .put("/:id", Auth, async (request, response) => {
        response.json({ user: await updateById(request.params.id, request.body) })
    })

    .post("/", async (request, response) => {
        const user = await createUser(request.body)
        response.json({ user })

    })

    .post("/login", async (request, response) => {
        try {
            const user = await loginUser({
                Email: request.body.Email,
                Password: request.body.Password
            })
            const token = generateToken(user.id, user.Email)
            response.json({ token })
        }
        catch (error: any) {
            response.status(403).json({ message: error.message })
        }
    })