import { Input } from "../components/input";

export const Register = ()=> {
    return (
    <div className="min-h-screen flex items-center justify-center bg-stone-400">
     <form  className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
        <div className="space-y-4" >

         
          {/* Firstname */}
           <Input />

          {/* Lastname */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastname">
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder=""
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder=""
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        
      </div>
     </form>
    </div>
  );
}