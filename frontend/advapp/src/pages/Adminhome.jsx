
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
        <div className='sd'>
          
        <CustomNavSidebar />
        </div>
        <div className='others'>

        <h1 className="header">Zenin Events</h1>
        <h3 className='header'>Crafting unforgettable moments for your special events.</h3>
        <hr></hr>
        </div>
       
      </header>
      <main>
        <div className='overall'> 
        <div className='sd'>
       
        
        

        </div>
        <div className='sd'>
        {/* <img
            src="https://i.pinimg.com/originals/2a/24/f7/2a24f795c9eda742c875fc5893ecfb92.gif"
            alt="Description of the image"
            
          /> */}
        </div>
        <div className='others'>
        <br></br>
        <div className='ss'>

          <h2>Welcome Admin</h2>
          <br></br>
        
          <h3>Here are some few things you have to take in account!</h3>
          <br></br>
          <div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div style={{ width: '200px', height: '107px', border: '1px solid black', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
            <h2>50+ </h2>
                
                <h4>Events completed</h4>
                
            </div>
            <div style={{ width: '200px', height: '107px', border: '1px solid black', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                <h2>10+ </h2>
                
                <h4>Partners </h4>
            </div>
            <div style={{ width: '200px', height: '107px', border: '1px solid black', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                <h2>100+</h2>
                <h4>Happy clients</h4>
            </div>
            <br></br>
            <div><h1>         </h1><p>                                               </p></div>
           <hr></hr>
        </div>
  <div className="cardins">
    <div className="subins">
         <img src="https://i.pinimg.com/564x/cb/13/14/cb131410fcf78bac3c3df8f7586c0f6e.jpg" style={{ maxWidth: '400px', height: '400px' }}className="imgins"></img>
    </div>
    <div className="pins">
      <h2>ZENIN PROGRESS</h2>
      <br></br>
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
         <p></p>
         <br></br>
         <br></br>
         {/* <section style={{padding:'20px', width:'100%'}}>
        <Apex/></section> */}
         
        
         <br></br><br></br>
    </div>
  </div>
</div>

          
        </ div>
          <>
   
   
    
  </>
        </div>
        </div>
        

         

       
        
      </main>
      <footer>CopyRights@ZeninEvents</footer>
    </div>
  );
};

export default Adminhome;
