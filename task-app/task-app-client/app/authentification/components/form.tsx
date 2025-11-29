import type React from "react"

export const Form = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-400">
            <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg b">
                {
                    children
                }
            </form>
        </div>
    )


}