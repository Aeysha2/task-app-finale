import type React from "react"

export const Form = ({children, position="center"}:{children:React.ReactNode, position?:string}) => {
    return (
        <div className={`min-h-screen flex items-${position} justify-center bg-gray-100`}>
            <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg b">
                {children}
            </form>
        </div>
    )
}