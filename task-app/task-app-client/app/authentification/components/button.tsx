import type { ButtonParams } from "~/types"

export const Button = ({title,onclick}: ButtonParams) => {
    return (
        <button
            onClick={onclick}
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition">
            {title}
        </button>
    )
}