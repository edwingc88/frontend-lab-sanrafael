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
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' type='text' placeholder='Jane' />
              <p className='text-red-500 text-xs italic'>Please fill out this field.</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-last-name'>
                Last Name
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='Doe' />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-password'>
                Password
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-password' type='password' placeholder='******************' />
              <p className='text-gray-600 text-xs italic'>Make it as long and as crazy as you'd like</p>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-2'>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-city'>
                City
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-city' type='text' placeholder='Albuquerque' />
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-state'>
                State
              </label>
              <div className='relative'>
                <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-state'>
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-zip'>
                Zip
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-zip' type='text' placeholder='90210' />
            </div>
            <div className='flex items-center justify-between'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                Sign Up
              </button>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}
