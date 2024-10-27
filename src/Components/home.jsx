import { useContext} from 'react';
import card from './Products';



function home() {
    return (
        <div>
            <div className="Header">
                <div className='Site-Name'>Start Bootstrap</div>
                <div >
                    <p className='page'>Home</p>
                    <p className='page'>About</p>
                    
                </div>
                <div className='cart'>
                🛒 Cart
                </div>
            </div>
            <div className='home-image'>
                <h1 className='style'>Shop In Style</h1>
                <p className='style1'>with this shop home page template</p>
            </div>
            <div className='products'>
                   {card()}
            </div>

            <div className='footer'>
                <p className='copyright'>Copyright © Your Website 2024</p>
            </div>
        </div>
    )
}

export default home;