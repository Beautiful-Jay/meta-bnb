import React from 'react';
import Frame13 from '../images/Frame13.png';
import Frame59530 from '../images/Frame59530.png';
import Frame59529 from '../images/Frame59529.png';
import Frame59532 from '../images/Frame59532.png';
import Frame595301 from '../images/Frame595301.png';
import Group1 from '../images/Group1.png'
import { Link } from 'react-router-dom'

const BnbPage = () => {
  return (
    <div className='bnb-main'>
         <header>
        <img src={Group1} alt='' />
            <div className='section1'>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/place">Place to stay</Link>
                </nav>
                </div>
                <button>NTFs</button>
                <button>Community</button>
                <button>Connect Wallet</button>
            
        </header>
        <div className='label'>
        <label>Resturant</label>
        <label>Cottage</label>
        <label>Castle</label>
        <label>fantast city</label>    
        <label>beach</label>
        <label>Carties</label>
        <label>Off-grid</label>
        <label>Farm</label>
        <label><img src={Frame13} alt='' /></label>
        </div>
        <div>
        <img src={Frame59530} alt='' />
        <img src={Frame59529} alt='' />
        <img src={Frame595301} alt='' />
        <img src={Frame59532} alt='' />
        </div>
    </div>
  )
}

export default BnbPage