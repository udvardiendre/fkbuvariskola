import React from 'react'

import {Link} from 'react-router-dom'

import scuba1 from "../../assets/home/scuba1.png"
import scuba2 from "../../assets/home/scuba2.png"
import scuba3 from "../../assets/home/scuba3.png"
import scuba4 from "../../assets/home/scuba4.png"
import scuba5 from "../../assets/programs/scuba5.png"
import scuba6 from "../../assets/programs/scuba6.png"



const Programs = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <h1 className='xl-title self-start ml-20'>Programjaink</h1>
        <h2 className='lg-title my-5 self-start ml-32'>Túrák 2023-ban</h2>
        <div className='flex w-[50vw] flex-wrap flex-row justify-center gap-20'>
          <Link to="/programs">
            <div className='lg-pic-n-txt '>
              <img className="img-dim" src={scuba1} alt="scuba1" />
              <div className='grey-bg'>
                <p className='md-p-white'>Szudán, hajós szafari <br />Március 10-19</p>
              </div>
            </div>
            </Link>
            <Link to="/programs">
            <div className='lg-pic-n-txt '>
              <img className="img-dim" src={scuba2} alt="scuba2" />
              <div className='grey-bg'>
                <p className='md-p-white'>Horvátország, Murter<br />
                    Május 24-28</p>
              </div>
            </div>
            </Link>
            <Link to="/programs">
            <div className='lg-pic-n-txt '>
              <img className="img-dim" src={scuba3} alt="scuba3" />
              <div className='grey-bg'>
                <p className='md-p-white'>Egyiptom, Dahab<br />
                    Június 21-29</p>
              </div>
            </div>
            </Link>
            <Link to="/programs">
            <div className='lg-pic-n-txt '>
              <img className="img-dim" src={scuba4} alt="scuba4" />
              <div className='grey-bg'>
                <p className='md-p-white'>Horvátország Cavtat<br />
                    Július 28-Augusztus 4</p>
              </div>
            </div>
            </Link>
            <Link to="/programs">
            <div className='lg-pic-n-txt '>
              <img className="img-dim" src={scuba5} alt="scuba5" />
              <div className='grey-bg'>
                <p className='md-p-white'>Best of Dalmácia, Hajós szafari<br />
                    Szeptember</p>
              </div>
            </div>
            </Link>
            <Link to="/programs">
            <div className='lg-pic-n-txt '>
              <img className="img-dim" src={scuba6} alt="scuba6" />
              <div className='grey-bg'>
                <p className='md-p-white'>Egyiptom, St. Johgns szigetek<br />
                    November 18-25</p>
              </div>
            </div>
            </Link>
          </div>
      </div>
      <div className='flex flex-col items-center space-y-8 my-20'>
        <h2 className='lg-title my-20 self-start ml-20'>Tanfolyamok 2023-ban</h2>
          <div className="bg-course-8 lg-course-card">
            <h2 className='lg-title-white'>Mélymerülő és Advanced Nitrox</h2>
            <button className='white-btn'><Link to='/courses'>Részletek</Link></button>
          </div>
          <div className="bg-course-9 lg-course-card">
            <h2 className='lg-title-white'>IANTD Normoxic Trimix</h2>
            <button className='white-btn'><Link to='/courses'>Részletek</Link></button>
          </div>
          <div className="bg-course-6 lg-course-card">
            <h2 className='lg-title-white'>IANTD Rescue</h2>
            <button className='white-btn'><Link to='/courses'>Részletek</Link></button>
          </div>
          <div className="bg-course-2 lg-course-card">
            <h2 className='lg-title-white'>IANTD Open Water</h2>
            <button className='white-btn'><Link to='/courses'>Részletek</Link></button>
          </div>
      </div>
    </div>
  )
}

export default Programs