/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
/* interface BreadcrumbProps {
  pageName: string;
} */
const Breadcrumb = ({ pageName, botonGG }/* : BreadcrumbProps */) => {
  return (
    <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
      <h2 className='text-title-md2 font-semibold text-black dark:text-gray'>
        {pageName}
        {botonGG && <button className='bg-blue-700 ml-2 rounded-md px-3 py-1 text-sm font-medium hover:bg-primary-dark hover:text-white dark:hover:bg-primary-light dark:hover:text-black dark:text-white dark:bg-primary-light dark:hover:bg'>{botonGG}</button>}
      </h2>

      <nav>
        <ol className='flex items-center gap-2'>
          <li>
            <Link to='/forms/form-orders-add'>Dashboard /</Link>
          </li>
          <li className='text-primary'>{pageName}</li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
