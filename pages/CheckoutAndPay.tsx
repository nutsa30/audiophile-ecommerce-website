import { useState } from 'react';
import styles from './checkout.module.css'; 
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import tickImg from "../aasets/Group 12 (1).png"

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: 'e-Money' | 'Cash on Delivery';
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

const CheckoutAndPay = () => {
  const [formData, setFormData] = useState<CheckoutForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    paymentMethod: 'e-Money',
    eMoneyNumber: '',
    eMoneyPin: ''
  });

  const [errors, setErrors] = useState<{ [K in keyof CheckoutForm]?: string }>({});

  const { cart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (!(name in formData)) return;
    const key = name as keyof CheckoutForm;
    setFormData(prev => ({
      ...prev,
      [key]: type === 'radio' ? (checked ? value : prev[key]) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    const requiredFields: (keyof CheckoutForm)[] = [
      'name', 'email', 'phone', 'address', 'zip', 'city', 'country'
    ];

    if (formData.paymentMethod === 'e-Money') {
      requiredFields.push('eMoneyNumber', 'eMoneyPin');
    }

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (cart.length === 0) {
      alert('Your cart is empty. Add at least one product before proceeding.');
      return;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Order Submitted:', formData);
      setShowConfirmation(true); 
}
  };

  const [showConfirmation, setShowConfirmation] = useState(false);


  return (
    <>
   
    <div className={`container ${styles.container}`}>
      <button onClick={() => navigate('/products/')} className={styles.goBackBtn}>
        Go Back
      </button>

      <div className={styles.checkoutContainer}>
        {/* Left Section - Form */}
        <div className={styles.checkoutForm}>
          <h2>Checkout</h2>

          {/* Billing Details */}
          <h3 className={styles.sectionTitle}>Billing Details</h3>
          <div className={styles.formGroup}>
            <div>
              
              <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div>
              
              <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.fullWidth}>
              
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
          </div>

          {/* Shipping Info */}
          <h3 className={styles.sectionTitle}>Shipping Info</h3>
          <div className={styles.formGroup}>
            <div className={styles.fullWidth}>
             
              <input id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
              {errors.address && <p className={styles.error}>{errors.address}</p>}
            </div>
            <div>
              <input id="zip" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" />
              {errors.zip && <p className={styles.error}>{errors.zip}</p>}
            </div>
            <div>
           
              <input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
              {errors.city && <p className={styles.error}>{errors.city}</p>}
            </div>
            <div className={styles.fullWidth}>
              
              <input id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
              {errors.country && <p className={styles.error}>{errors.country}</p>}
            </div>
          </div>

          {/* Payment Details */}
          <h3 className={styles.sectionTitle}>Payment Details</h3>
          <div className={styles.paymentMethod}>
            <label className={styles.paymentOption}>
              <input type="radio" name="paymentMethod" value="e-Money" checked={formData.paymentMethod === 'e-Money'} onChange={handleChange} />
              e-Money
            </label>
            <label className={styles.paymentOption}>
              <input type="radio" name="paymentMethod" value="Cash on Delivery" checked={formData.paymentMethod === 'Cash on Delivery'} onChange={handleChange} />
              Cash on Delivery
            </label>
          </div>

          {formData.paymentMethod === 'e-Money' && (
            <div className={styles.formGroup}>
              <div>
               
                <input id="eMoneyNumber" name="eMoneyNumber" value={formData.eMoneyNumber} onChange={handleChange} placeholder="e-Money Number" />
                {errors.eMoneyNumber && <p className={styles.error}>{errors.eMoneyNumber}</p>}
              </div>
              <div>
              
                <input id="eMoneyPin" name="eMoneyPin" value={formData.eMoneyPin} onChange={handleChange} placeholder="e-Money PIN" />
                {errors.eMoneyPin && <p className={styles.error}>{errors.eMoneyPin}</p>}
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Order Summary */}
        <div className={styles.checkoutSummary}>
          <h3>Summary</h3>
          <div className={styles.summaryItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.summaryItem}>
                <div className={styles.summaryImgName}>
                  <img className={styles.summaryImg} src={item.image} alt={item.name} />
                  <div className={styles.itemInfo}>
                    <p className={styles.summaryItemName}>{item.name}</p>
                    <p className={styles.summaryItemPrice}>${item.price.toFixed(2)} </p>
                  </div>
                  <p className={styles.summaryItemPriceQuantity}>x{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.total}>
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.total}>
            <span>Shipping:</span>
            <span>${shipping}</span>
          </div>
          <div className={styles.total}>
            <span>VAT (Included):</span>
            <span>${vat}</span>
          </div>
          <div className={styles.grandTotal}>
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>

          <button className={styles.continueBtn} onClick={handleSubmit}>
            Continue & Pay
          </button>
        </div>
      </div>

    </div>
     


    {showConfirmation && (
  <div className={styles.overlay}>
    <div className={styles.modal}>
        <img className={styles.checkIcon} src={tickImg} alt="" />
      
      <h2 className={styles.thankYou}>THANK YOU FOR YOUR ORDER</h2>
      <p className={styles.confirmationEmail}>You will receive an email confirmation shortly.</p>

      <div className={styles.modalSummary}>
        <div className={styles.summaryLeft}>
          <div className={styles.summaryItem}>
            <img src={cart[0]?.image} alt={cart[0]?.name} />
            <div >
              <p className={styles.succPaymentName}>{cart[0]?.name}</p>
              <p className={styles.succPaymentPrice}>${cart[0]?.price.toFixed(2)}</p>
            </div>
            <span className={styles.succPaymentQuantity}>x{cart[0]?.quantity}</span>
          </div>
          {cart.length > 1 && (
            <p className={styles.otherItems}>and {cart.length - 1} other item(s)</p>
          )}
        </div>

        <div className={styles.summaryRight}>
          <p className={styles.summaryRightToTal}>GRAND TOTAL</p>
          <strong>${grandTotal.toFixed(2)}</strong>
        </div>
      </div>

      <button
        className={styles.continueButton}
        onClick={() => {
          setShowConfirmation(false);
          navigate('/products/');
        }}
      >
        BACK TO HOME
      </button>
    </div>
  </div>
)}


    </>
  );
};

export default CheckoutAndPay;
