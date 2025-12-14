import type React from "react"

export const Form = ({ children, position = "center" }: { children: React.ReactNode, position?: string }) => {
    return (
        <div
            className={`flex items-${position} justify-center min-h-screen bg-cover bg-center`}
            style={{ backgroundImage: "url('/images/a.jpg')" }}
        >
            <form className="bg-white h-full  p-8 rounded-2xl w-full max-w-md not-first:shadow-lg b mt-20">
                {children}
            </form>
        </div>
    )
}