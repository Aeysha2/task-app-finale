import { PrismaClient,TaskStatus} from "@prisma/client";
const prisma = new PrismaClient()


export const findAllTasks = async (request:any, response:any) => {
        const taskStatus: string = (request.query.Status as string) || ""
        const statusMap: Record<string,  TaskStatus> = {
            PENDING:  TaskStatus.PENDING,
            STARTING:  TaskStatus.STARTING,
            FINISHING:  TaskStatus.FINISHING
        }
        
    if (taskStatus && statusMap[taskStatus]) {
            const statusValue = statusMap[taskStatus]
            const tasks = await prisma.task.findMany({ 
        where: { Status: statusValue }
    })
    return response.json({ tasks })
    }

    const tasks = await prisma.task.findMany()
    return response.json({ tasks })

    }

export const findTaskById = async (request:any, response:any) => {
        const task = await prisma.task.findUnique({ where: { id: request.params.id } })
        response.json({ task })
    }

export const startingTask = async (request:any, response:any) => {
        try {
            const taskId = request.params.id
            const task = await prisma.task.findUnique({ where: { id: taskId } })
            if (!task) throw new Error(`Tache non trouver avec cet id. ${taskId}`)
            if (task.Status === TaskStatus.STARTING) {
                throw new Error("vous avez deja commencer cette tache vous devais la terminer" )
            }
            const taskUpdated = await prisma.task.update({
                where: { id: taskId }, data: { Status: TaskStatus.STARTING }
            })
            response.json({ taskUpdated })

        } catch (error: any) {
            response.status(404).json({ message: error.message })
        }
    }

export const finishingTask = async (request:any, response:any) => {
        try {
            const taskId = request.params.id
            const task = await prisma.task.findUnique({ where: { id: taskId } })
            if (!task) throw new Error(`Tache non trouver avec cet id. ${taskId}`)
            if (task.Status === TaskStatus.PENDING) throw new Error(`Commencer d‘abord la tache`)
            if (task.Status === TaskStatus.FINISHING) {
                response.json({ message: "tache deja terminée" })
                return
            }
            const taskUpdated = await prisma.task.update({
                where: { id: taskId }, data: { Status: TaskStatus.FINISHING }
            })
            response.json({ taskUpdated })
        } catch (error: any) {
            response.status(404).json({ message: error.message })
        }
    }