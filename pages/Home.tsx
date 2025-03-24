import { useEffect } from "react";
import YX1Earphones from "../components/YX1/YX1Earphones"
import ZX7Speaker from "../components/zx7/ZX7Speaker"
import ZX9Speaker from "../components/zx9/ZX9Speaker"







const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

    
    <div>
     <ZX9Speaker/>
     <ZX7Speaker/>
     <YX1Earphones/>
      
    </div>
    
    
    
    
    </>
  )
}

export default Home