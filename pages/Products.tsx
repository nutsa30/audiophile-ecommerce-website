import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../components/product/ProductCard";
import ProductCategory from "../components/productCategory/ProductCategory";




 export interface Product {
  id: string;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
}

interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludeItem {
  quantity: number;
  item: string;
}

interface Gallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

interface OtherProduct {
  slug:string
  name: string;
  image: ImageSet;
}






const Products = () => {
  const [products,setProducts]= useState<Product[]>([])
  const params=useParams()

  const getProducts=async()=>{
    const res=await fetch("http://localhost:3000/products")
    const data=await res.json()

    setProducts(data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, );



    
  return <div>
     
    <ProductCategory/>

     {
      products?.filter(product => product.category===params.category).map((product,index)=>{
        return (
          <div>
            
         <ProductCard 
         flexDirection={index%2===0? "row" :"row-reverse"}
         product={product}
         key={product.id}/>
         </div>
        )


      })
     }
     </div>
  
}

export default Products