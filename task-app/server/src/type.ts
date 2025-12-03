export type CreateUser = {
    Firstname: string
    Lastname: string
    Email: string
    Password: string
}

export type UpdateUser = Partial<Omit <CreateUser , "Password">>