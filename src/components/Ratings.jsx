import React from 'react'
import {AiOutlineStar, AiFillStar} from "react-icons/ai";

const Ratings = ({rate, style, clickStar}) => {

  return (
    <>
    {
        [...Array(5)].map((_, index) => (
            <li key={index} onClick={() => clickStar(index)} style={style}>{ rate > index ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/> }</li>
        ))
    }
        
            
            
    </>
  )
}

export default Ratings