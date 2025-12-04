import type React from "react"

export const Form = ({children,position = "center"}:{children:React.ReactNode, position?:string}) => {
    return (
        <div className= {`flex items-${position} justify-center min-h-screen bg-gray-100`}>
            <form className="bg-white p-8 rounded-2xl w-full max-w-md not-first:shadow-lg b">
                {children}
            </form>
        </div>
    )
}