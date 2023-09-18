
import { Link } from 'react-router-dom'

import cover from "../../assets/home/cover.png"

import scuba1 from "../../assets/home/scuba1.png"
import scuba2 from "../../assets/home/scuba2.png"
import scuba3 from "../../assets/home/scuba3.png"
import scuba4 from "../../assets/home/scuba4.png"

import scuba5 from "../../assets/home/scuba5.png"
import scuba6 from "../../assets/home/scuba6.png"
import scuba7 from "../../assets/home/scuba7.png"

import dive_flag from "../../assets/home/dive_flag.png"

const Home = () => {
  return (
    <div>
      <div className='relative mt-20'>
        <img src={cover} alt="cover" className='w-[100%]'/>
        <div className='flex flex-col items-center text-white font-roboto font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h1 className='text-[48px] mb-10'>Hitvallásunk</h1>
          <p className='text-[32px] mb-[200px] uppercase font-medium'>
            Hiszünk abban, hogy oktatni csak elhivatottan és türelemmel lehet,
            tanulni pedig csak kitartással és szorgalommal
          </p>
          <button className='text-[32px] text-primary-blue bg-white w-[225px] h-[80px] rounded-xl hover:bg-primary-blue hover:text-white'>Tanfolyamok</button>
        </div>
      </div>
      <div className='flex mt-20 mx-20'>
        <div className='w-[50vw] flex flex-col justify-center items-center space-y-10'>
          <h1 className='text-[48px] text-primary-blue font-roboto font-semibold' >Következő túráink</h1>
          <p className='font-robot text-primary-blue text-[34px]'>Túráinkra a <br /> jelentkezés egész <br />évben lehetséges
          </p>
          <button className='blue-btn'>Túráink</button>
        </div>
        <div>
          <div className='flex w-[50vw] flex-wrap flex-row justify-center gap-10'>
          <Link to="/">
            <div className='pic-n-txt '>
              <img className="img-dim" src={scuba1} alt="scuba1" />
              <div className='grey-bg'>
                <p className='md-p-white'>Horvátország, Murter<br />
                    Május 24-28</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className='pic-n-txt '>
              <img className="img-dim" src={scuba2} alt="scuba2" />
              <div className='grey-bg'>
                <p className='md-p-white'>Egyiptom, Dahab<br />
                    Június 21-29</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className='pic-n-txt '>
              <img className="img-dim" src={scuba3} alt="scuba3" />
              <div className='grey-bg'>
                <p className='md-p-white'>Horvátország Cavtat<br />
                    Július 28-Augusztus 4</p>
              </div>
            </div>
            </Link>
            <Link to="/">
            <div className='pic-n-txt '>
              <img className="img-dim" src={scuba4} alt="scuba4" />
              <div className='grey-bg'>
                <p className='md-p-white'>Egyiptom, St. Johgns szigetek<br />
                    November 18-25</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1 className='xl-title mb-4 mt-20'>
          Tanfolyamok
        </h1>
        <p className='font-robot text-primary-blue text-[40px] mb-20'>
          Tanfolyamaink év közben folyamatosan <br />indulnak. A részletekért vegye fel velünk a <br />kapcsolatot.
        </p>
        <div className='flex justify-evenly'>
          <div className='course-card-home'>
            <img src={scuba5} alt="scuba5" />
            <h2 className='lg-title'>IANTD<br /> Open Water</h2>
            <p className='sm-p'>A tanfolyam 6 elméleti, 3 uszodai,<br /> és 4 nyíltvízi foglalkozásból áll.</p>
            <button className='blue-btn'>Részletek</button>
          </div>
          <div className='course-card-home'>
            <img src={scuba6}  alt="scuba6" />
            <h2 className='lg-title'>IANTD<br /> Nitrox</h2>
            <p className='sm-p'>A tanfolyam tartalma: 2 elméleti<br /> oktatás, gázkeverés és analizálás<br /> külső helyszínen, és 2 nyíltvízi<br /> merülés.</p>
            <button className='blue-btn'>Részletek</button>
          </div>
          <div className='course-card-home'>
            <img src={scuba7}  alt="scuba7" />
            <h2 className='lg-title'>IANTD<br /> Advanced</h2>
            <p className='sm-p'>A tanfolyam tartalma: Ezt a<br /> standard 15 merülésben írja elő.</p>
            <button className='blue-btn'>Részletek</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-10 mb-20 mt-20'>
        <h1 className='xl-title'>Központunk</h1>
        <div className=' flex space-x-7'>
          <img src={dive_flag} alt="dive_flag" />
          <h2 className='lg-title'>1118, Budapest Bakony utca 20.</h2>
        </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.139949248465!2d19.013279776930073!3d47.46770219755802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddc3254ce70b%3A0x541dd390114c999b!2sBudapest%2C%20Bakony%20u.%2020%2C%201118!5e0!3m2!1shu!2shu!4v1694529844047!5m2!1shu!2shu" width="600" height="450" className="border-2 rounded-xl border-primary-blue" loading="lazy" ></iframe>
       </div>
    </div>
  )
}

export default Home