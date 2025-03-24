
import './App.css'
import { CartProvider } from './context/CartContext'

















import RoutesConfig from './routes/Routes'


function App() {
 

  return (
    <>
    
     <CartProvider>
     <RoutesConfig/>
     </CartProvider>
    
     
   
    </>
  )
}

export default App
