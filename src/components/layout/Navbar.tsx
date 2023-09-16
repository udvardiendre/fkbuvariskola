import React from 'react'

import {Link} from "react-router-dom"
import Logo from "../../assets/navbar/logo.png"
import MessengerLogo from "../../assets/navbar/messenger_logo.png"
import FacebookLogo from "../../assets/navbar/facebook_logo.png"

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-center items-center my-5'>
        <Link to="/"><img src={Logo} alt="logo" className='h-20 w-20'/></Link>
        <h1 className='text-[36px] text-primary-blue font-roboto font-semibold'>
          <Link to="/">Farkas Koppány Búváriskola és Szabadidő Sportklub</Link>
        </h1>
      </div>
      <ul className='flex space-x-4 justify-center text-primary-blue font-roboto font-semibold flex-wrap items-center text-[25px]'>
        <li><Link to="/courses">Tanfolyamok</Link></li>
        <li><Link to="/programs">Programjaink</Link></li>
        <li><Link to="/sailing">Túravitorlázás</Link></li>
        <li><Link to="/aboutUs">Bemutatkozás</Link></li>
        <li><Link to="/gallery">Galéria</Link></li>
        <li><Link to="/contactUs">Kapcsolat</Link></li>
        <li><Link to="/otherPrograms">Egyéb szolgáltatások</Link></li>
        <li className='basis-[100%] h-5'></li>
        <a href="https://m.me/koppany.farkas" target="_blank"><img src={MessengerLogo} alt="messengerlogo" /></a>
        <a href="https://www.facebook.com/profile.php?id=100057663092175" target="_blank"><img src={FacebookLogo} alt="" /></a>
        <li><a href="http://eub.hu?pcode=28553" target='_blank'>Utasbiztosítás</a></li>
      </ul>
    </nav>
  )
}

export default Navbar