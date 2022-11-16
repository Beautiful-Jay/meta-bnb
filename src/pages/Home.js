import React from 'react';
import { Link } from 'react-router-dom';
import Group1 from '../images/Group1.png';
import Group59537 from '../images/Group59537.png';
import Group4040 from '../images/Group4040.png';
import Frame4041 from '../images/Frame4041.png';
import Frame59546 from '../images/Frame59546.png';
import Frame59529 from '../images/Frame59529.png';
import Frame59530 from '../images/Frame59530.png';
import Group4028 from '../images/Group4028.png';

const Home = () => {
  return (
    <div>
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
        <div>
            <div className='section2a'>
            <h1>Rent a place away from Home in the Metaverse</h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <input name='search' id='search' placeholder='search for location' />
            <label>Search</label>
            <img src={Group4028} alt='' />
            </div>
            <div className='mb-styles section2b'>
            <img src={Group59537} alt='' />
            <img src={Group4040} alt='' />
            <img src={Frame4041} alt='' />
            </div>
        </div>
        <div className='section3'>
       <h1>Inspiration for your next adventure</h1>
       <img src={Frame59529} alt='' />
       <img src={Frame59530} alt='' />
       </div>
       <div>
        <h3>Metabnb NTFs</h3>
      <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
      <img src={Frame59546} alt='' />
       </div>
    </div>
  )
}

export default Home;