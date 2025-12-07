import { sign } from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET || "secret_dev_key"

export const generateToken = (userId: string, Email:string) => {
    return sign(
        {userId,Email},
        SECRET_KEY,
        {expiresIn:"2h"}
    )
}