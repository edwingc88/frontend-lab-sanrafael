import React from "react"

export default function Login() {

  const loginUser = async (e) => {
    e.preventDefault();
    console.log('login') 
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-center font-bold text-blue-500 text-2xl  p-4">INICIAR SESION</h2>
    <form onSubmit={loginUser}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
  )
}
