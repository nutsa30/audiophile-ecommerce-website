

import { PiShoppingCartLight } from 'react-icons/pi'
import '../../App.css'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from "../../context/CartContext"; // Import cart context
import Checkout from "../../pages/Checkout"; // Adjust path if needed



const Navbar = () => {
  const { cart } = useCart(); // Get cart items
  const [cartVisible, setCartVisible] = useState(false);
  const handleCartToggle = () => {
    setCartVisible(!cartVisible); // Toggle cart container visibility
  };

 
  return (
    <div className={styles.nav}>
    <div className= {`container ${styles.navbar}`}>

        
     <div className={styles.navigations}>

     
      <Link className={`orangeHover audiophile`} to={"/products/"}>audiophile</Link>
       <div className={styles.Link}>

      

      <Link className='orangeHover Link' to={"/products/"}>HOME</Link>
        <Link className='orangeHover Link' to={"/products/headphones"}>HEADPHONES</Link>
        <Link className='orangeHover Link' to={"/products/speakers"}>SPEAKERS</Link>
        <Link className='orangeHover Link' to={"/products/earphones"}>EARPHONES</Link>
       </div>
     </div>
     
     
      

        {/* Cart Icon with Count */}
        <div className={styles.cartContainer}  onClick={handleCartToggle}>
          <PiShoppingCartLight size={24} className="orangeHover" />
          {cart.length > 0 && (
            <span className={styles.cartCount}>
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>

      {/* Show Cart Items as a Small Popup */}
      {cartVisible && (
        <div className={styles.cartDropdown}>
          <Checkout isVisible={cartVisible} />
        </div>
      )}
    </div>
  )
}

export default Navbar