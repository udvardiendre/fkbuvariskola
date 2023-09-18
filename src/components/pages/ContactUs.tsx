
import facebookLogo from "../../assets/navbar/facebook_logo.png"

const ContactUs = () => {
  return (
    <div className='mx-20 my-20'>
      <h1 className='lg-title text-left mb-10'>Kapcsolat</h1>
      <p className='md-p text-left mb-10'>Kérdés esetén keress minket bizalommal az alábbi elérhetőségeken:</p>
      <div className='flex justify-between p-20 bg-light-blue md-p h-[280px]'>
        <div className='flex flex-col items-start gap-4 justify-center'>
          <p>Telefon: +36 70 313 0043</p>
          <p>Email: <a href="mailto:farkas.koppany@gmail.com">farkas.koppany@gmail.com</a></p>
          <p>Cím: 1118 Bp. Bakony utca 20.</p>
        </div>
        <div className='flex gap-4 items-center '>
          <a href="https://www.facebook.com/profile.php?id=100057663092175" target='_blank'><img className="w-[44px] h-[44px]" src={facebookLogo} alt="" /></a>
          <a href="https://www.facebook.com/profile.php?id=100057663092175" target='_blank'><p className='text-left'>Farkas Koppány Búváriskola és <br /> Szabadidő Sport Klub</p></a>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.139949248465!2d19.013279776930073!3d47.46770219755802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddc3254ce70b%3A0x541dd390114c999b!2sBudapest%2C%20Bakony%20u.%2020%2C%201118!5e0!3m2!1shu!2shu!4v1694529844047!5m2!1shu!2shu" width="600" height="450" className="border-2 rounded-xl border-primary-blue"  loading="lazy" ></iframe>
      </div>
    </div>
  )
}

export default ContactUs