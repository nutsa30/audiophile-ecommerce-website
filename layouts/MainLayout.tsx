import { Outlet, useLocation } from "react-router-dom"
import AudioGear from "../components/audioGear/AudioGear"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import ShopItems from "../components/shopItems/ShopItems"



export const MainLayout = () => {
   const location=useLocation()

   const isCheckOutPage=location.pathname.includes("checkout")

  return (
    <>

    <Navbar/>

    
    <main>
    <Outlet/>
    </main>
    
   
    {!isCheckOutPage &&  <ShopItems/> }
    {!isCheckOutPage && <AudioGear/>  }
   

   

    
    <Footer/>
    
    
    
    
    
    </>
  )
}
