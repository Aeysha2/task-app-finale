import type { ButtonParams } from "~/types"

export const Button = (params: ButtonParams) => {
    return (
        <button
            onClick={params.onclick}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition">
            {
                params.title
            }
        </button>
    )
}