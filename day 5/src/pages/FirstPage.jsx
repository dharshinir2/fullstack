

import { Link } from 'react-router-dom';
import '../assets/css/firstpage.css';

const FirstPage = () => {
  return (
    <div className="first-page">
      <header>
        <h1 className="header">Zenin Events</h1>
        <h3 className='header'>Crafting unforgettable moments for your special events.</h3>
       
      </header>
      <div className="content">
        <div className='right-content'>
          <img
            src="https://i.pinimg.com/originals/bd/a1/31/bda131814bc9f6d55d897e43cf73fbb9.jpg"
            alt="Description of the image"
            style={{ maxWidth: '100%', height: '500px' }}
          />
        </div>
        <div className="left-content">
          <h3>Welcome to Zenin Events, where we turn your dreams into reality!</h3>
          <br></br>
          <h5>Discover a world of creativity and elegance for your special occasions.</h5>
          <div className='bb'>
            <button>
              <Link to={'/login'}>User</Link>
            </button>
            <br />
            <button>
              <Link to={'/adminlogin'}>Admin</Link>
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p> 2024 Zenin Events. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FirstPage;

