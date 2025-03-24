import styles from "./ZX9Speaker.module.css"
import img1 from "../../aasets/image-removebg-preview(38) (2).png"
import '../../App.css'
import oval1 from "../../aasets/Oval.png"
import oval2 from "../../aasets/Oval Copy.png"
import oval3 from "../../aasets/Oval Copy 2.png"
import { useNavigate } from "react-router-dom"


const ZX9Speaker = () => {

  const navigate=useNavigate()
  return (
    <>
    <div className={`container ${styles.speaker}`}>
     

      <img src={oval1} alt="Oval 1" className={styles.oval1} />
      <img src={oval2} alt="Oval 2" className={styles.oval2} />
      <img src={oval3} alt="Oval 3" className={styles.oval3}/>
    

    

       <img className={styles.img1} src={img1} alt=""/>
            
           
       
      <div className={styles.zx9Speaker}>
        <h2>ZX9 SPEAKER</h2>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button 
        onClick={()=>{
          navigate("/single-product/zx9-speaker")
        }}
        className="button2">SEE PRODUCT</button>
      </div>


    
   
          
      

      </div>
    
    </>
  )
}

export default ZX9Speaker