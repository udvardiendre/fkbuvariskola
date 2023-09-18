

import {Link} from 'react-router-dom'

const {BASE_URL} = import.meta.env;


const Courses = () => {
  return (
    <div className='flex flex-col items-center space-y-8 my-20'>
      <h1 className='xl-title self-start ml-20'>Tanfolyamok</h1>
      <div className="bg-course-1 lg-course-card">
        <h2 className='lg-title-white'>Víz alatti természetbúvár</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-2 lg-course-card">
        <h2 className='lg-title-white'>IANTD Open Water</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-3 lg-course-card">
        <h2 className='lg-title-white'>IANTD Nitrox</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-4 lg-course-card">
        <h2 className='lg-title-white'>IANTD Advanced Open Water</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-5 lg-course-card">
        <h2 className='lg-title-white'>IANTD Dry Suit (szárazruha)</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-6 lg-course-card">
        <h2 className='lg-title-white'>IANTD Rescue</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-7 lg-course-card">
        <h2 className='lg-title-white'>IANTD Divemaster</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-8 lg-course-card">
        <h2 className='lg-title-white'>Mélymerülő és Advanced Nitrox</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
      <div className="bg-course-9 lg-course-card">
        <h2 className='lg-title-white'>IANTD Normoxic Trimix</h2>
        <button className='white-btn'><Link to={`${BASE_URL}courses`}>Részletek</Link></button>
      </div>
    </div>
  )
}

export default Courses