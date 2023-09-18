

import { Link } from 'react-router-dom'
const {BASE_URL} = import.meta.env;

const Gallery = () => {
  return (
    <div className='flex flex-col items-center space-y-8 my-20'>
      <div className="bg-course-2 lg-course-card">
        <h2 className='lg-title-white'>Víz alatti természetbúvár</h2>
        <button className='white-btn'><Link to={`${BASE_URL}gallery`}>Részletek</Link></button>
      </div>
      <div className="bg-course-8 lg-course-card">
        <h2 className='lg-title-white'>IANTD Open Water</h2>
        <button className='white-btn'><Link to={`${BASE_URL}gallery`} >Részletek</Link></button>
      </div>
    </div>
  )
}

export default Gallery