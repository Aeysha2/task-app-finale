import type { InputParams } from "../../types";
export const Input = (params:InputParams) => {
    return (
        <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstname">
                {params.label}
            </label>
            <input
                type={params.type}
                id={params.label}
                name={params.label}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder=""
            />
        </div>
    );
}