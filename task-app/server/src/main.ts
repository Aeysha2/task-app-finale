import EXPRESS, { response } from "express";
import { UserRouter } from "./user/controllers.js";
import { TaskRouter } from "./task/controllers.js";
import cors from "cors"
import { Auth } from "./middleware/auth.js";
import path from "path";
import dotenv from "dotenv";
import { request } from "http";
dotenv.config();


const application = EXPRESS ()
const port = process.env.PORT || 3000
application.use ( cors ( ) )
application.use(EXPRESS.json())
application.use(EXPRESS.urlencoded({}))
application.use("/users",UserRouter)
application.use("/tasks",Auth,TaskRouter)

if (process.env.NODE_ENV === "production") {
    application.use(
        EXPRESS.static(
            path.join(__dirname, "../../task-app-client/build")
        )
    )
    application.get("*", (request, response)=>{
        response.sendFile(
            path.join(__dirname, "../../task-app-client/build/index.html")
        )
    })}


application.listen(port,()=> console.log(`connecter sur http://localhost:${port}`))