import styles from './Footer.module.css'
import '../../App.css'
import { ImFacebook2 } from 'react-icons/im'
import { GrTwitter } from 'react-icons/gr'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footer}>



    <div className='container'>
            
        
    <div className={styles.navigations}>
    <Link className={`orangeHover audiophile`} to={"/products/"}>audiophile</Link>

      <div className={styles.p}>

       
      <Link className='orangeHover Link' to={"/products/"}>HOME</Link>
        <Link className='orangeHover Link' to={"/products/headphones"}>HEADPHONES</Link>
        <Link className='orangeHover Link' to={"/products/speakers"}>SPEAKERS</Link>
        <Link className='orangeHover Link' to={"/products/earphones"}>EARPHONES</Link>
      </div>
    </div>
    </div>

   <div className={`container ${styles.footerInfo}`}>


    <div className={styles.info}>
      <p>
      Audiophile is an all in one stop to fulfill your audio needs.
      We're a small team of music lovers and sound specialists who
      are devoted to helping you get the most out of personal audio.
      Come and visit our demo facility - we’re open 7 days a week.
      </p>
    </div>



    <div style={{ display: 'flex', gap: '16px' }}>
    <ImFacebook2 className='orangeHover' size={24}/>
    <GrTwitter className='orangeHover' size={24} />
    <FaInstagram className='orangeHover'  size={24}/>

    </div>


   </div>
       


       <div className={`container ${styles.footerInfo}`}>
        

      <small>
      Copyright 2021. All Rights Reserved
      </small>

       </div>

    </div>
  )
}

export default Footer