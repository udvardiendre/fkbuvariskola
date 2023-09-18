

import {Link} from "react-router-dom"

import Logo from "../../assets/footer/logo_nobg.png"
import MessengerLogo from "../../assets/footer/white_messenger_logo.png"
import FacebookLogo from "../../assets/footer/white_facebook_logo.png"

const {BASE_URL} = import.meta.env

const Footer = () => {
  return (
    <div className='bg-primary-blue  h-[270px] w-auto text-white font-roboto '>
      <div className='flex justify-center space-x-3 items-center h-[185px]'>
      <Link to={BASE_URL}><img className='h-20 w-20' src={Logo} alt="" /></Link>
      <ul className='flex justify-center space-x-4 items-center'>
        <li><Link to={`${BASE_URL}courses`}>Tanfolyamok</Link></li>
        <li><Link to={`${BASE_URL}programs`}>Programjaink</Link></li>
        <li><Link to={`${BASE_URL}sailing`}>Túravitorlázás</Link></li>
        <li><Link to={`${BASE_URL}aboutUs`}>Bemutatkozás</Link></li>
        <li><Link to={`${BASE_URL}gallery`}>Galéria</Link></li>
        <li><Link to={`${BASE_URL}contactUs`}>Kapcsolat</Link></li>
        <li><Link to={`${BASE_URL}otherPrograms`}>Egyéb szolgáltatások</Link></li>
        <li><a href="http://eub.hu?pcode=28553" target='_blank'>Utasbiztosítás</a></li>
        <a href="https://m.me/koppany.farkas" target="_blank"><img src={MessengerLogo} alt="messengerlogo" /></a>
        <a href="https://www.facebook.com/profile.php?id=100057663092175" target="_blank"><img src={FacebookLogo} alt="" /></a>
      </ul>
      </div>
      <hr className='h-[3px] bg-white'/>
      <p className='text-[14px] mt-6'>©Tolnai Kereskedőház Kft. - Minden jog fenntartva    |  <a href="">Impresszum </a>  |   <a href="">Adatkezelési tájékoztató és Adatvédelmi nyilatkozat</a>   |  <a href="">ÁSZF</a>  |  <a href="">Szerzői Jogi Nyilatkozat</a></p>
    </div>
  )
}

export default Footer