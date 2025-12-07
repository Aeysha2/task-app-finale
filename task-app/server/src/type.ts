export type CreateUser = {
    Firstname: string
    Lastname: string
    Email: string
    Password: string
    ConfirmPassword: string
}

export type UpdateUser = Partial<Omit <CreateUser , "Password">>

export type CreateTask = {
    title: string
    description: string
    
}

