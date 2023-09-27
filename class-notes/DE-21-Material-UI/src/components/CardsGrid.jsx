import React, { useEffect, useState } from 'react'

const CardsGrid = () => {
  const [products, setProducts]=useState([])

  useEffect(() => {

  fetch("https://dummyjson.com/products")
  .then((res)=>res.json())
  .then((data)=>setProducts(data.products))
    
  }, [])
 console.log(products); 


  return (
    <div>
      
    </div>
  )
}
export default CardsGrid

