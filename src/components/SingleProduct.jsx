import React, { useContext } from 'react';
import {AiOutlineStar, AiOutlineHeart, AiFillStar} from "react-icons/ai";
import { contextCart } from '../context/CartContext';
import Ratings from './Ratings';
const indents = [];
const SingleProduct = ({
    name, image, price, fastDeliver, inStock, id, prod, ratings
}) => {

    //const global = useContext(contextCart);
    const {dispatch, state: {cart}} = useContext(contextCart);
    console.log("global", cart);


    const addToCart = () => {
        //alert("hello");
        dispatch({
            type:"ADD_TO_CART",
            payload:prod
        })
    }

    const removeToCart = () => {
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:prod
        })
    }
  return (
    <div className="product-grid">
    <div className="product-image">
        <a href="#" className="image" style={{backgroundColor:"#F3F3F3"}}>
            <img className="pic-1" src={image} />
        </a>
    </div>
    <div className="product-content">
        <h3 className="title"><a href="#">{name}</a></h3>
        
        <div className="price">$ {price.split(".")[0]}</div>
        <div className="deliver">{fastDeliver && "Fast Deliver"}</div>
        <ul className="rating">
            <Ratings rate={ratings}/>
        </ul>
    </div>

    <div className="action-buttons">
        {
            cart.some(p=>p.id === id) ? <button onClick={removeToCart} type="button" className="btn btn-outline btn-danger">Remove From Cart</button>
            :
            <button onClick={addToCart} type="button" disabled={!inStock} className="btn btn-outline">{!inStock ? "Out Of Stock" : "ADD TO CART"}</button>

        }
        
        
        <button type="button" className="btn-outline-icon"><AiOutlineHeart/></button>
    </div>
</div>
  )
}

export default SingleProduct