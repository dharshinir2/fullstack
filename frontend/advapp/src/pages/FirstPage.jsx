

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
        <div >
          <img
            src="https://spaceshipsandlaserbeams.com/wp-content/uploads/2016/09/16-Black-and-White-Tablescape-488x975.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
           <img
            src="https://celebrationsathomeblog.com/wp-content/uploads/2012/12/black-white-dinner-party-ideas-cocktiail-bar.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
            <img
            src="https://i.pinimg.com/originals/72/5d/50/725d50588c9d04e112ff04a886141fc2.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
           <img
            src="https://i.pinimg.com/originals/af/01/ee/af01eebba988460029b3ec960aa5bb07.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
            <img
            src="https://i.pinimg.com/originals/74/db/b8/74dbb8e3d9070d5eb15bea02b2c3b4bd.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
        </div>
        <div className='hg'>

          <h3>Welcome to Zenin Events, where we turn your dreams into reality!</h3>
          <br></br>
          
        <h5>Whether it is an intimate soirée or a grand celebration, every event is a story waiting to be told, and we, as event managers, are the narrators, guiding each chapter with finesse and flair. </h5>
        <h5>Let us take the helm of your journey, navigating the seas of possibility to create an event that is uniquely yours, an ode to the artistry of life..</h5>
        </div>
        <div className='right-content'>
        <img
            src="https://i.pinimg.com/originals/60/89/9d/60899d37341bbd713759b282894a43bd.gif"
            alt="Description of the image"
            style={{ maxWidth: '600px', height: '500px' }}
          />
       

        </div>
        <div className="left content">
        <h3>Unlock the Door to Your Perfect Event: Choose Your Role, Embrace the Experience</h3>
       
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

