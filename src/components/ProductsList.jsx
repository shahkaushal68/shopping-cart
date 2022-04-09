import React, { useContext } from 'react'
import SingleProduct from './SingleProduct';
import { contextCart } from '../context/CartContext';


const ProductsList = () => {

   //const global = useContext(contextCart);
   //console.log("global", global);
   const {state: {products}} = useContext(contextCart);
   console.log(products);

  return (
    <section className ="feature-products">
        <div className="container">
            <div className="row">
               {
                  products.map((product) => (
                     <div className="col-md-3 col-sm-6" key={product.id}>
                        <SingleProduct {...product} prod={product}/>
                     </div>
                  ))
               }
                

            </div>
        </div>           
    </section>
  )
}

export default ProductsList