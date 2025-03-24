import styles from './ShopItems.module.css'
import '../../App.css'
import img1 from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import img2 from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import img3 from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const ShopItems = () => {

  const navigate=useNavigate()
  return (
    <div className={`container ${styles.shop}`}>


        <div className={styles.shopItems}>
            <img  className={styles.shopImg1} src={img1} alt="" />
            <h2  >HEADPHONES</h2>
            <button 
            onClick={()=>
            navigate("/products/headphones")

            }
            > SHOP <MdKeyboardArrowRight  color='orange'/></button>
           
    
        </div>




        <div className={styles.shopItems}>
            <img className={styles.shopImg2} src={img2} alt="" />
            <h2>SPEAKERS</h2>
            <button
            onClick={()=>
              navigate("/products/speakers")
  
              }
            >SHOP <MdKeyboardArrowRight  color='orange'/> </button>
        </div>




        <div className={styles.shopItems}>
            <img className={styles.shopImg3} src={img3} alt="" />
            <h2>EARPHONES</h2>
            <button
            onClick={()=>
              navigate("/products/earphones")
  
              }
            >SHOP <MdKeyboardArrowRight  color='orange'/> </button>
        </div>


    </div>
  )
}

export default ShopItems