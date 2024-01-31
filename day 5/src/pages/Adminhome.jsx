
 // Import your CSS file
import Admincustomnavbar from '../components/Admincustomnavbar';
import CustomNavSidebar from '../components/CustomNavSidebar';
import '../assets/css/adminhome.css'
import { Progress } from 'rsuite';
const style = {
  width: 120,
  display: 'inline-block',
  marginRight: 10
};

const Adminhome = () => {
  return (
    <div className="admin-home-container">
      <header>
        <Admincustomnavbar />
       
      </header>
      <main>
        <div className='overall'> 
        <div className='sd'>
        <CustomNavSidebar />

        </div>
        <div className='others'>
          <h2>Welcome Admin</h2>
          <h3>Here are some few things you have to take in account!</h3>
          <>
    <div style={style}>
    
    </div>
    <div style={style}>
      <Progress.Circle percent={50} strokeColor="#ffc107" />
      <p>Pending events</p>
    </div>
    <div style={style}>
      <Progress.Circle percent={30} strokeColor="#ffc107" />
      <p>Approved events</p>
    </div>
    <div style={style}>
      <Progress.Circle percent={20} strokeColor="#ffc107" />
      <p>Cancelled events</p>
    </div>
    <div style={style}>
      <Progress.Circle percent={40} strokeColor="#ffc107" />
      <p>Upcoming events</p>
    </div>
   
    
  </>
        </div>
        </div>
        

         

       
        
      </main>
    </div>
  );
};

export default Adminhome;
