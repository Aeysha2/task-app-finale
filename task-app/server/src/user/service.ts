import { PrismaClient } from "@prisma/client";
import { CreateUser, UpdateUser, LoginUser } from "@src/type";
import { generateToken } from "../utils/jwt.js";
import { hash ,compare} from "bcrypt";
import { sendEmail } from "../utils/sendMail.js";


const prisma = new PrismaClient()

export const findAll = async () => {
    return await prisma.user.findMany()
}

export const findById = async (id:string) => {
        return await prisma.user.findUnique({ 
            where: { id }
         })
    }

export const forgotPassword = async (Email:string) => {
        const user = await prisma.user.findUnique({ 
            where: { Email }
         })
        if (!user) throw new Error(`Utilisateur non trouver avec cet Email. ${Email}`)
        const token = generateToken(user.id, user.Email)
        const link = `http://localhost:5173/resetPassword/${token}`
        await sendEmail({to:Email, subject:link, html:"Reinitialisation de mot de passe"})

    }

export const updateById = async (id:string, body:UpdateUser) => {
        const user = await prisma.user.findUnique({ where: {id} })
    if (!user) throw new Error(`Utilisateur non trouver avec cet id. ${id}`)
    if (!body.Firstname )  body.Firstname = user.Firstname 
    if (!body.Lastname )  body.Lastname = user.Lastname 
    if (!body.Email )  body.Email = user.Email 

        return await prisma.user.update({
                        where: { id }, 
                        data: body
                    })
    }   
    
export const createUser = async (body: CreateUser) => {
    body.Password = await hash(body.Password, 10)
    return await prisma.user.create({ 
        data: body ,
    })
    
}

export const loginUser = async (body: LoginUser) => {
   const user = await prisma.user.findUnique({
     where: {Email:body.Email}})
     if(!user) throw new Error ("l‘utiliateur n‘existe pas")
     const isSamePassword = await compare(body.Password,user.Password)
     const {Password, ...userWithoutPassword} = user
     if(isSamePassword) return userWithoutPassword
     throw new Error(" Mots de passe incorrect")

}