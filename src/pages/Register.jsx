export default function Register () {
  const registerUser = (e) => {
    console.log('Register User')
    e.preventDefault()
    // const data = new FormData(e.target);
  }

  return (
    <>
      <div className='flex items-center flex-col justify-center h-screen'>
        <h2 className='text-center font-bold text-blue-500 text-2xl  p-4'>REGISTRAR PACIENTE</h2>
        <form onSubmit={registerUser} className='w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-first-name'>
                First Name
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' name='firstname' id='grid-first-name' type='text' placeholder='Jane' />
              <p className='text-red-500 text-xs italic'>Please fill out this field.</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-last-name'>
                Last Name
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='Doe' name='lastname' />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-2'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-state'>
                Email
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-city' type='email' placeholder='Email' />
            </div>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-city'>
                Phone Number
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-city' type='text' placeholder='Albuquerque' />
            </div>

          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-password'>
                User Name
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-password' type='text' placeholder='UserName' name='username' />
              <p className='text-gray-600 text-xs italic'>Make it as long and as crazy as you'd like</p>
            </div>
            <div className='w-full px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-password'>
                Password
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-password' type='password' placeholder='******************' />
              <p className='text-gray-600 text-xs italic'>Make it as long and as crazy as you'd like</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
