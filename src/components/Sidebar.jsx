import React, { useState } from 'react';
import Ratings from './Ratings';

const Sidebar = () => {
  const [rate, setRate] = useState();
  const clickStar = (index) => {
      //alert(index)
      setRate(index+1)
  }
  return (
    <>
    <h3>Fliter Products</h3>
    <form>
        <div className="form-check mb-3">
            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="ascending" />Ascending
            <label className="form-check-label" htmlFor="radio1"></label>
        </div>
        <div className="form-check mb-3">
            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="descending"/>Descending
            <label className="form-check-label"></label>
        </div>
        <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="stock" name="stock" value="stock" />
            <label className="form-check-label" htmlFor="stock">Including Out of Stock</label>
        </div>
        <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="deliver" name="deliver" value="deliver" />
            <label className="form-check-label" htmlFor="deliver">Fast Deliver Only</label>
        </div>
        <div className="mb-3">
            <label className="form-check-label">Rating:</label>
            <ul className="rating">
            <Ratings rate={rate} style={{cursor:"pointer"}} clickStar={clickStar}/>
        </ul>
        </div>
    </form>
    </>
  )
}

export default Sidebar