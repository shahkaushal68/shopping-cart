import React from 'react';
import "../styles/home.css"
import ProductsList from './ProductsList';
import Sidebar from './Sidebar';


const Home = () => {
  return (
    <>
    <div className='col-md-2 sidebar'>
        <Sidebar/>
    </div>
    <div className='col-md-10'>
        <ProductsList/>
    </div>
    </>
  )
}

export default Home