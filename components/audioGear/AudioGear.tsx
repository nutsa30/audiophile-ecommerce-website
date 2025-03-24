import styles from './AudioGear.module.css'
import '../../App.css'
import img from '../../aasets/audioGear.png'

const AudioGear = () => {
  return (
    <div className={`container ${styles.gear}`}>

        <div className={styles.gearInfo}>

        <h1>
        BRINGING YOU THE <span className={styles.span}>BEST</span> AUDIO GEAR
        </h1>

        <p className={styles.p}>
        Located at the heart of New York City,
        Audiophile is the premier store for high end headphones, 
        earphones, speakers, and audio accessories. We have a large
        showroom and luxury demonstration rooms available for you to
        browse and experience a wide range of our products. Stop by
        our store to meet some of the fantastic people who make
        Audiophile the best place to buy your portable audio
        equipment.
        </p>

        </div>


        <div >
            <img className={styles.gearImage} src={img} alt="" />
        </div>


    </div>
  )
}

export default AudioGear