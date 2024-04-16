// import { Link } from 'react-router-dom'
// import CoverOne from '../../images/user/user-06.png'
import Breadcrumb from '../../components/Breadcrumb'

const EmpresaAdd = () => {
  return (
    <>
      <Breadcrumb pageName='Form Client Add' />
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-1 w-10/12 m-auto '>
        <div className='flex flex-col align-middle '>
          {/* <!-- Contact Form --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
              <h3 className='font-medium text-black '>
                Agregar Laboratorio
              </h3>
            </div>
            <form action='#'>
              <div className='p-2 bg-gray-100  '>
                <div className='mb-1 '>
                  <label className='block text-black dark:text-gray-500'>
                    Nombre de Laboratorio <span className='text-meta-1'>*</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='w-full rounded border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>

                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='block text-black dark:text-gray-500'>
                        Rif <span className='text-meta-1'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your email address'
                        className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='block text-black dark:text-gray-500'>
                        Slogan<span className='text-meta-1'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your email address'
                        className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-1'>
                  <label className='block text-black dark:text-gray-500'>
                    Descripcion <span className='text-meta-1'>*</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>
                <div className='mb-1'>
                  <label className='block text-black dark:text-gray-500'>
                    Objetivos <span className='text-meta-1'>*</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Enter your email address'
                    className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>

                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='block text-black dark:text-gray-500'>
                        Mision <span className='text-meta-1'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your email address'
                        className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <div className='mb-1'>
                      <label className='block text-black dark:text-gray-500'>
                        Vision<span className='text-meta-1'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your email address'
                        className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-1'>
                  <label className='mb-2.5 block text-black dark:text-gray-500'>
                    Email
                  </label>
                  <input
                    type='text'
                    placeholder='Select subject'
                    className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>

                <div className='mb-1'>
                  <label className='mb-2.5 block text-black dark:text-gray-500'>
                    Address
                  </label>
                  <input
                    type='text'
                    placeholder='Select subject'
                    className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>

                <div className='mb-1'>
                  <label className='mb-2.5 block text-black dark:text-gray-500'>
                    Phone
                  </label>
                  <input
                    type='text'
                    placeholder='Select subject'
                    className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>
                <div className='mb-1'>
                  <label className='mb-2.5 block text-black dark:text-gray-500'>
                    Logotipo
                  </label>
                  <input
                    type='File'
                    placeholder='Select subject'
                    className='w-full bg-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
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

export default EmpresaAdd
