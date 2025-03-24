
import styles from './Productcategory.module.css'

import { useParams } from 'react-router-dom'

const ProductCategory = () => {

    
  const params=useParams()
  return (
    <div className={styles.main}>

    <div className={`container ${styles.category}`}>
        <p className={styles.p}>{params.category}</p>
        </div>
    </div>
  )
}

export default ProductCategory