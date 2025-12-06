import type { InputParams } from "../../types";
export const Input = (params:InputParams) => {
    return (
        <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700" >
                {params.label}
            </label>
            <input
                type={params.type}
                id={params.label}
                name={params.label}
                onChange={(e) => params.onChange(e.target.value)}
                className=" mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none  focus:ring-2 focus:ring-indigo-500 "
                required
            />
        </div>
    );
}