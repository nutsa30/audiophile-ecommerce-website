import { useCart } from "../context/CartContext"
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Checkout = ({ isVisible }: { isVisible: boolean }) => {
  const { cart, setCart } = useCart(); 
  const navigate = useNavigate();

  if (!isVisible) return null; 


  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
   
  const handleRemoveAll = () => {
    setCart([]);
 
    
  };

  
  const handleCheckout = () => {
    navigate("/checkout"); 
  };
  
  return (

    <div className="checkout-popup">
      <div className={`checkout-container ${isVisible ? 'visible' : 'hidden'}`}>
      {cart.length > 0 && (
      <div className="cart-remove-all">
      <h3>Cart ({totalItems})</h3> 
      <button onClick={handleRemoveAll}  className="remove-all">Remove all</button>
      </div>
        )}

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="check-out-info">
              <img className="item-img" src={item.image} alt={item.name} />
              <div className="check-out-items-amount">
                <h6>{item.name}</h6>
                <div className="check-out-amounts">
                  <span>${item.price.toFixed(2)}</span>
                  <span>x {item.quantity}</span>
                  <p className="check-out-items-total-amount">
                    ${ (item.price * item.quantity).toFixed(2) }
                  </p>
                </div>
              </div>
              <button className="trash-btn" onClick={() => handleRemoveFromCart(item.id)}>
              <FontAwesomeIcon className="trash-icon" icon={faTrashCan} />
              </button>
            </div>
          ))}
          <div >
            <div className="checkout">
            <span>Total:</span>
            <h4 className="checkout-h4"> ${totalPrice.toFixed(2)}</h4>
            </div>
          
          <button className="button checkout-btn" onClick={handleCheckout}>Checkout</button>
          </div>
         <div>
          
         </div>
        </>
      )}
      </div>
    </div>
  );
};

export default Checkout;
