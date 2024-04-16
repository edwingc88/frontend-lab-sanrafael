import Breadcrumb from '../../components/Breadcrumb'

const FormClientAdd = () => {
  return (
    <>
      <Breadcrumb pageName='Form Client Add' />
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-1'>
        <div className='flex flex-col align-middle '>
          {/* <!-- Contact Form --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
              <h3 className='font-medium text-black '>
                Client Add
              </h3>
            </div>
            <form action='#'>
              <div className='p-2'>
                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='block text-black dark:text-gray-500'>
                      First name
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your first name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <label className=' block text-black dark:text-gray-500'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your last name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                </div>
                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='block text-black dark:text-gray-500'>
                      UserName <span className='text-meta-1'>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your email address'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <label className='block text-black dark:text-gray-500'>
                      Password <span className='text-meta-1'>*</span>
                    </label>
                    <input
                      type='password'
                      placeholder='Enter your email address'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                </div>
                <div className='mb-1'>
                  <label className='block text-black dark:text-gray-500'>
                    Email <span className='text-meta-1'>*</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>
                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-gray-500'>
                      Gender
                    </label>
                    <div className='relative z-20 bg-transparent dark:bg-form-input'>
                      <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                        <option value=''>HOMBRE</option>
                        <option value=''>MUJER</option>
                      </select>
                      <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
                        <svg
                          className='fill-current'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g opacity='0.8'>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                              fill=''
                            />
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='mb-2.5 block text-black dark:text-gray-500'>
                        Role
                      </label>
                      <div className='relative z-20 bg-transparent dark:bg-form-input'>
                        <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          <option value=''>Type Role</option>
                          <option value=''>Admin</option>
                          <option value=''>Bioanlist</option>
                          <option value=''>Patient</option>
                        </select>
                        <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
                          <svg
                            className='fill-current'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g opacity='0.8'>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                                fill=''
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='mb-1'>
                  <label className='block text-black dark:text-gray-500'>
                    Address <span className='text-meta-1'>*</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Enter your email address'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>

                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='block text-black dark:text-gray-500'>
                        Phone 1 <span className='text-meta-1'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your email address'
                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='block text-black dark:text-gray-500'>
                        Phone 2 <span className='text-meta-1'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your email address'
                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>

                    <div className='mb-1'>
                      <label className='mb-2.5 block text-black dark:text-gray-500'>
                        Birth Date
                      </label>
                      <input
                        type='date'
                        placeholder='Select subject'
                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='mb-2.5 block text-black dark:text-gray-500'>
                        BloodTyping
                      </label>
                      <input
                        type='text'
                        placeholder='Select subject'
                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-1'>
                  <label className='mb-2.5 block text-black dark:text-gray-500'>
                    Type RelationShip
                  </label>
                  <div className='relative z-20 bg-transparent dark:bg-form-input'>
                    <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value=''>Type RelationShip</option>
                      <option value=''>No Aplica</option>
                      <option value=''>Familiar</option>
                      <option value=''>Amigo</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
                      <svg
                        className='fill-current'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g opacity='0.8'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                            fill=''
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='mb-1'>
                  <label className='mb-2.5 block text-black dark:text-gray-500'>
                    RelationShip Name
                  </label>
                  <input
                    type='text'
                    placeholder='Select subject'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>
                <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </>
  )
}

export default FormClientAdd