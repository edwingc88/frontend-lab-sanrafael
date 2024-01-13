/* eslint-disable react/prop-types */

const Card = ({ course }) => {
  return (
    <div id='medico' className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl w-[30%] '>
      <img
        src={course.linkImg}
        className='h-40 w-full object-cover'
      />
      <div className='p-5 border border-b'>
        <h1 className='py-2 truncate'>{course.title}</h1>
      </div>

      <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
        {course.category}
      </div>
    </div>
  )
}

export default Card
