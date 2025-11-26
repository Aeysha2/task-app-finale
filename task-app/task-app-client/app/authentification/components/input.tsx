export const Input = () => {
    return (
        <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstname">
                Firstname
            </label>
            <input
                type="text"
                id="firstname"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder=""
            />
        </div>
    );
}