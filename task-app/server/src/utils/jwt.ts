import jwt from "jsonwebtoken";
export const SECRET_KEY = process.env.JWT_SECRET || "secret_dev_key"

export const generateToken = (userId: string, Email:string) => {
    return jwt.sign(
        {userId,Email},
        SECRET_KEY,
        {expiresIn:"1h"}
    )
}