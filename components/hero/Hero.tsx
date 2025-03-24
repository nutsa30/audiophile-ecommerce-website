import styles from './Hero.module.css'
import img from '../../aasets/Bitmap (1).png'
import '../../App.css'
import { useNavigate } from 'react-router-dom'



 export const Hero =()=>{

    const navigate=useNavigate()
    return (

        <div className={styles.mainHero}>

    <div className={`container ${styles.hero}`}>
            
        <div className={styles.newProduct}>


                <h5>NEW PRODUCT</h5>

                <h2>XX99 MARK II HEADPHONES</h2>

               <p>
                 Experience natural, lifelike audio and exceptional build
                 quality made for the passionate music enthusiast.
               </p>


               <button onClick={()=>{
               navigate("/single-product/xx99-mark-two-headphones")
               }}
                className="button">SEE PRODUCT</button>

        </div>




        <img className={styles.heroImg} src={img} alt="" />

    </div>
        </div>
    )
}