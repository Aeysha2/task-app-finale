import { PrismaClient } from "@prisma/client";
import { CreateUser, UpdateUser, LoginUser } from "@src/type";
const prisma = new PrismaClient()

export const findAll = async (request: any, response: any) => {
    const users = await prisma.user.findMany()
    response.json({ users })
}

export const findById = async (request:any, response:any) => {
        const user = await prisma.user.findUnique({ where: { id: request.params.id } })
        response.json({ user })
    }

export const updateById = async (id:any, body:UpdateUser) => {
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
    return await prisma.user.create({ 
        data: body ,
    })
}

export const loginUser = async (body: LoginUser) => {
   const user = await prisma.user.findUnique({where:{Email: body.Email}})
     if(!user) throw new Error ("l‘utiliateur n‘existe pas")
     if(user.Password !== body.Password) throw new Error("le smots de passe ne sont pas les memes")
     return user

}