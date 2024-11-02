
import React, { useContext , useState} from 'react';
import { CartContext } from './Cartcontext';
import Products from './Products.jsx';







const Home = () => {
  const { cartCount } = useContext(CartContext);

  return (

    <div >
            <div className="Header">
                <div className='Site-Name'>Start Bootstrap</div>
                <div >
                    <p className='page'>Home</p>
                    <p className='page'>About</p>
                    <select className='page' style={{backgroundColor:"#00BFFF"}}>
                      <option value="all-products">All Products</option>
                      <option value="popular-items">Popular Items</option>
                      <option value="new-arrivals">New Arrivals</option>
                    </select>
                    
                </div>
                <div className='cart'>
                🛒 Cart ({cartCount}) 
                </div>
            </div>
            <div className='home-image'>
              <img style={{backgroundfit:"fill" , width:"100%" , height:"100%"}} src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/tophero/PC/Deals_on_1_lakh_styles._CB542298117_.jpg" alt="home-image" />
                
            </div>
            <div >
              <Products />
            </div>

            <div className='footer'>
                <p className='copyright'>Copyright © Your Website 2024</p>
            </div>
        </div>



    
  );
};

export default Home;
