import { PrismaClient, TaskStatus } from "@prisma/client";
import { CreateTask } from "@src/type";
const prisma = new PrismaClient()


export const findAllTasks = async (taskStatus: string, userId: string) => {
    if (!userId) throw new Error("l‘ID de l‘utilisateur n‘existe pas ")
    const statusMap: Record<string, TaskStatus> = {
        PENDING: TaskStatus.PENDING,
        STARTING: TaskStatus.STARTING,
        FINISHING: TaskStatus.FINISHING
    }

    if (taskStatus && statusMap[taskStatus]) {
        const statusValue = statusMap[taskStatus]
        const tasks = await prisma.task.findMany({
            where: { Status: statusValue, userId }
        })
        return tasks
    }

    return await prisma.task.findMany({
        where: { userId }
    })

}

export const findTaskById = async (id: string) => {
    return await prisma.task.findUnique({
        where: { id }
    })

}

export const deleteTaskById = async (id: string) => {
    return await prisma.task.delete({
        where: { id }
    })

}

export const startingTask = async (id: string) => {
    try {
        const task = await prisma.task.findUnique({ where: { id } })
        if (!task) throw new Error(`Tache non trouver avec cet id. ${id}`)
        if (task.Status === TaskStatus.STARTING) {
            throw new Error("vous avez deja commencer cette tache vous devais la terminer")
        }
        const taskUpdated = await prisma.task.update({
            where: { id },
            data: { Status: TaskStatus.STARTING }
        })
        return taskUpdated
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const finishingTask = async (id: string) => {
    try {
        const task = await prisma.task.findUnique({ where: { id } })
        if (!task) throw new Error(`Tache non trouver avec cet id. ${id}`)
        if (task.Status === TaskStatus.PENDING) throw new Error(`Commencer d‘abord la tache`)
        if (task.Status === TaskStatus.FINISHING) {
            throw new Error("tache deja terminée")

        }
        const taskUpdated = await prisma.task.update({
            where: { id },
            data: { Status: TaskStatus.FINISHING }
        })
        return taskUpdated
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const updateTask = async (id: string, body: any) => {
    const task = await prisma.task.findUnique({ where: { id } })
    if (!task) throw new Error(`Task non trouvée avec cet id : ${id}`)

    if (!body.title) body.title = task.title
    if (!body.description) body.description = task.description
    if (!body.Status) body.Status = task.Status

    return await prisma.task.update({
        where: { id },
        data: body,
    })
}


export const createTask = async (body: CreateTask) => {
    console.log("userId", body)
    return await prisma.task.create({
        data: { title:body.title, description:body.description, Status: TaskStatus.PENDING, userId:body.userId }
    })
}    