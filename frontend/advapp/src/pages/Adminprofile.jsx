
import '../assets/css/userprofile.css';
import Admincustomnavbar from "../components/Admincustomnavbar";
import CustomNavSidebar from '../components/CustomNavSidebar';

const Adminprofile = () => {
  return (
    <div>
      <header>
        <Admincustomnavbar />
      </header>
      <div>
        <div className='sd'>
          
          <CustomNavSidebar />
          </div>
          <div className='others'>
      <main>
        <div className="wrapper">
          <div className="left">
            <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width={100} />
            <h4>Tom Hiddleston</h4>
            <p>Admin@ZeninEvents</p>
          </div>
          <div className="right">
            <div className="info">
              <h3>Information</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>tom@gmail.com</p>
                </div>
                <div className="data">
                  <h4>Phone</h4>
                  <p>678923456</p>
                </div>
              </div>
            </div>

            <div className="info">
            
              <div className="info_data">
                <div className="data">
                  <h4>Age</h4>
                  <p>24</p>
                </div>
                <div className="data">
                  <h4>Location</h4>
                  <p>London</p>
                </div>
              </div>
            </div>

            <div className="projects">
             
              <div className="projects_data">
                <div className="data">
                  <h4>Recent Events</h4>
                  <p>Birthday Party</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
    </div>
  );
};

export default Adminprofile;
