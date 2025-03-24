
import { useEffect } from "react";
import { SingleProductCard } from "../components/singleProductCard/SingleProductCard"







export const SingeProduct = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
     
      
     
     <SingleProductCard/>
     
    </div>
  )
}
