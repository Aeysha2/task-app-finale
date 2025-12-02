import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const findAll = async (request: any, response: any) => {
    const users = await prisma.user.findMany()
    response.json({ users })
}

export const findById = async (request:any, response:any) => {
        const user = await prisma.user.findUnique({ where: { id: request.params.id } })
        response.json({ user })
    }