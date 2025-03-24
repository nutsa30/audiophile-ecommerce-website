import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import { SingeProduct } from "../pages/SingeProduct"
import { MainLayout } from "../layouts/MainLayout"
import Homelayout from "../layouts/Homelayout"
import Checkout from "../pages/Checkout"
import CheckoutAndPay from "../pages/CheckoutAndPay"








const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<Homelayout/>}>
      <Route path={"/products/"} element={<Home/>}/>
      </Route>
        
      
       <Route element={<MainLayout/>}>

      <Route path={"/products/:category"} element={<Products/>}/>
      <Route path={"/single-product/:slug"} element={<SingeProduct/>}/>
      <Route path="/" element={<Checkout isVisible={true} />} />
      <Route path="/checkout" element={<CheckoutAndPay />} />
     

       </Route>
      


      
    </Routes>
  )
}

export default RoutesConfig