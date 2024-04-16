// import { Link } from 'react-router-dom'
// import CoverOne from '../../images/user/user-06.png'
import Breadcrumb from '../../components/Breadcrumb'
import logolab from '../../assets/logolab.png'

const RoleEdit = () => {
  return (
    <>
      <Breadcrumb pageName='Form Lab Edit' />
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-3'>
        <div className='flex flex-col col-span-2 gap-2'>
          {/* <!-- Contact Form --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
              <h3 className='font-medium text-black '>
                Editar Laboradorio
              </h3>
            </div>
            <form action='#'>
              <div className='p-2'>
                <div className='mb-1 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='block text-black dark:text-gray-500'>
                      Nombre Empresa
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your first name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <label className=' block text-black dark:text-gray-500'>
                      Rif
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
                      Slogan <span className='text-meta-1'>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your email address'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                  <div className='w-full xl:w-1/2'>
                    <label className='block text-black dark:text-gray-500'>
                      Descripcion <span className='text-meta-1'>*</span>
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
                    Objetivos <span className='text-meta-1'>*</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>

                <div className='mb-1'>
                  <label className='block text-black dark:text-gray-500'>
                    Mision <span className='text-meta-1'>*</span>
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
                        Vision <span className='text-meta-1'>*</span>
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
                        Email <span className='text-meta-1'>*</span>
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
                        Direccion
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
                        Logotipo
                      </label>
                      <input
                        type='file'
                        placeholder='Select subject'
                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
                </div>

                <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-white bg-blue-700'>
                  Editar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          {/* <!-- Imagen Abatar --> */}

          <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='relative z-20 h-35 md:h-65'>
              <img
                src={logolab}
                alt='profile cover'
                className='h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center'
              />
              <div className='absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4 bg-green-800 border-2 rounded'>
                <label
                  htmlFor='cover'
                  className='flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-gray-200 hover:bg-opacity-80 xsm:px-4'
                >
                  <input type='file' name='cover' id='cover' className='sr-only' />
                  <span>
                    <svg
                      className='fill-current'
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z'
                        fill='gray'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z'
                        fill='gray'
                      />
                    </svg>
                  </span>
                  <span>Subir Logo</span>
                </label>
              </div>
              <div className='absolute bottom-1 left-1 z-10 xsm:bottom-4 xsm:right-4 bg-red-800  border-2 rounded'>
                <label
                  htmlFor='cover'
                  className='flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-gray-200 hover:bg-opacity-80 xsm:px-4'
                >
                  <input type='text' name='cover' id='cover' className='sr-only' />
                  <span>
                    <svg className='w-6 h-6 text-gray-800 dark:text-gray-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z' />
                    </svg>
                  </span>
                  <span>Delete</span>
                </label>
              </div>
            </div>
            <button className='flex m-2  w-full justify-center rounded bg-blue-700 p-3 font-medium text-white'>
              Actualizar Logotipo
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default RoleEdit
