
export const Button = (params:{title:string}) =>{
    return (
        <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition">
            
            {
                params.title
            }
          </button>
    )
}