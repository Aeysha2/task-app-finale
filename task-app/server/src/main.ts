import EXPRESS from "express";
import { UserRouter } from "./user/controllers.js";
import { TaskRouter } from "./task/controllers.js";
import cors from "cors";
import { Auth } from "./middleware/auth.js";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

export const application = EXPRESS();

// En dev : port 5000, en prod : port 3000 (ou ce que tu définis dans .env)
const port = process.env.PORT || 5000;

application.use(cors({
    origin: "http://localhost:3000" // autoriser le client React
}));
application.use(EXPRESS.json());
application.use(EXPRESS.urlencoded({ extended: true })); // ← fix du warning "deprecated"
application.use("/users", UserRouter);
application.use("/tasks", Auth, TaskRouter);

if (process.env.NODE_ENV === "production") {
    application.use(
        EXPRESS.static(
            path.join(__dirname, "../../task-app-client/build/client")
        )
    );
    application.get("/*", (request, response) => {
        response.sendFile(
            path.join(__dirname, "../../task-app-client/build/client/index.html")
        );
    });
}

if (!process.env.VERCEL) {
    application.listen(port, () => console.log(`Connecté sur http://localhost:${port}`));
}