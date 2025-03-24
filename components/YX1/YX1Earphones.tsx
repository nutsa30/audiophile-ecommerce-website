import styles from "./YX1Earphones.module.css"
import "../../App.css"
import img1 from "../../aasets/Group 12.png"
import { useNavigate } from "react-router-dom"


const YX1Earphones = () => {
  const navigate=useNavigate()
  return (
    <div className={`container ${styles.container}`}>
        <img src={img1} alt="" />
        <div className={styles.product}>


            <div className={styles.productName}>
              <h3>YX1 EARPHONES</h3>
              <button
               onClick={()=>{
                navigate("/single-product/yx1-earphones")
               }}
               className="button3">SEE PRODUCT</button>
            </div>
        </div>

    </div>
  )
}

export default YX1Earphones