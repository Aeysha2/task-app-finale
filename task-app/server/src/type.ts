export type CreateUser = {
    Firstname: string
    Lastname: string
    Email: string
    Password: string
}

export type UpdateUser = Partial<Omit <CreateUser , "Password">>

export type CreateTask = {
    title: string
    description: string
    
}

export type LoginUser = Pick <CreateUser, "Email" | "Password">

