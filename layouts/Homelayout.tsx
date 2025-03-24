import { Outlet } from "react-router-dom"
import { Hero } from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import ShopItems from "../components/shopItems/ShopItems"
import AudioGear from "../components/audioGear/AudioGear"
import Footer from "../components/footer/Footer"

const Homelayout = () => {
  return (
    <>

    <Navbar/>
    <Hero/>
    <ShopItems/>

     <main>
    <Outlet/>
     </main>


    <AudioGear/>
    <Footer/>



    
    
    
    </>
  )
}

export default Homelayout