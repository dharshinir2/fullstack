
import '../assets/css/adminpending.css'
import { Panel } from "rsuite"
import { useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import Admincustomnavbar from "../components/Admincustomnavbar"
import CustomNavSidebar from '../components/CustomNavSidebar'
import { bookingList } from '../services/user'
// import { Key } from '@mui/icons-material'
const Adminpending=()=>{
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchCourses();
}, []);

const fetchCourses = () => {
    bookingList()
        .then(response => {
            setBookings(response.data.data);
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
        });
      };
    return(
        <div>
            <header>


            <Admincustomnavbar/>
            </header>
            <div>
            <div className='sd'>
          
        <CustomNavSidebar />
        </div>
        <div className='others'>
            <div>
                <h1>Recent bookings</h1>
                <hr></hr>
                <h6>Kindly assess the event details and make a determination on whether to accept or decline the request. Your decision will play a crucial role in facilitating the successful organization of the event. We appreciate your prompt attention to this matter</h6>
            </div>
            <br></br>

            <div>
            {bookings.map(booking => (
              
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }} key={booking.bookingName}>
    <Panel>
        <h3>{booking.eventType}</h3>
        <hr></hr>
        
        <h6>Location: {booking.venue}</h6>
        <h6>Date: {booking.date}</h6>
        
      <p>
      {booking.food} required!! Total budget is {booking.budget}
        
            
    
       
      </p>
      <button><Link to='/adminviewevent'>Accept</Link></button>
      <button><Link to='/adminviewevent'>Reject</Link></button>
      </Panel>
    </Panel>
 
 
 ))}
            </div>
            </div>
            </div>
            

 

        </div>
    );
}
export default Adminpending
