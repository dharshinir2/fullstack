import { Link } from "react-router-dom";
import CustomNavbar from "../components/customnavbar"
import {  Button} from 'rsuite';
import '../assets/css/booking.css'

const showAlert = () => {
  alert('whohooo!!Booked successfully');
};
const Booking=()=>{
    return(
        <div>
            <header>

            <CustomNavbar/>
            <h1>Book now!!</h1>
            </header>
            <main>
            <>
  
  <div className="booking-form-w3layouts">
    {/* Form starts here */}
    <form action="#" method="post">
      <h2 className="sub-heading-agileits">Booking Details</h2>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <select className="form-control">
            <option>Event Type</option>
            <option value="Lorem Ipsum">Birthday</option>
            <option value="Adipiscing">Wedding</option>
            <option value="Lorem Ipsum">Reunion</option>
            <option value="Adipiscing">Garden party</option>
            <option value="Lorem Ipsum">Office party</option>
            <option value="Adipiscing">Other event</option>
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <select className="form-control">
            <option>Venue</option>
            <option value="Lorem Ipsum">Lee Partyhall</option>
            <option value="Adipiscing">Grey MAX</option>
            <option value="Lorem Ipsum">Lorem Mall</option>
            <option value="Adipiscing">Lola Nightclub</option>
            <option value="Lorem Ipsum">Hawkins</option>
            <option value="Adipiscing">LA HALL</option>
          </select>
        </div>
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <select className="form-control">
            <option>Food</option>
            <option value="American Airline">Lunch</option>
            <option value="Delta Airlines">Breakfast</option>
            <option value="Frontier Airline">Dinner</option>
            <option value="Jet Blue">Snacks</option>
            <option value="Southwest Airlines">Drinks</option>
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <select className="form-control">
            <option>Food type</option>
            <option value="Window">NonVeg</option>
            <option value="Aisle">Veg</option>
            <option value="Special">Egg included</option>
          </select>
        </div>
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input
            id="datepicker"
            name="Text"
            type="text"
            placeholder="Other Venue"
            defaultValue=""
            required=""
            className="hasDatepicker"
          />
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <input
            type="text"
            id="timepicker"
            name="Time"
            className="timepicker form-control hasWickedpicker"
            placeholder="Theme"
            defaultValue=""
            
          />
        </div>
      </div>
      <div className="triple-wthree">
        <div className="field-agileinfo-spc form-w3-agile-text11">
          <select className="form-control">
            <option value="">Participants</option>
            <option value={1}>Below 20</option>
            <option value={2}>20-50</option>
            <option value={3}>50-100</option>
            <option value={4}>100-150</option>
            <option value={5}>Above 150</option>
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text22">
          <select className="form-control">
            <option value="">Budget</option>
            <option value={1}>below 10,000</option>
            <option value={2}>10,000-15,000</option>
            <option value={3}>15,000-20,000</option>
            <option value={4}>20,000-25,000</option>
            <option value={5}>Above 25,000</option>
          </select>
        </div>
        
      </div>
      <div className="radio-section">
        <h6>Is your event date is adjustable?</h6>
        <ul className="radio-buttons-w3-agileits">
          <li>
            <input type="radio" id="a-option" name="selector1" />
            <label htmlFor="a-option">Yes</label>
            <div className="check" />
          </li>
          <li>
            <input type="radio" id="b-option" name="selector1" />
            <label htmlFor="b-option">No</label>
            <div className="check">
              <div className="inside" />
            </div>
          </li>
        </ul>
        <div className="clear" />
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input
            id="datepicker1"
            name="Text"
            type="text"
            placeholder="Date"
            defaultValue=""
           
            required=""
            className="hasDatepicker"
          />
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <input
            type="text"
            id="timepicker1"
            name="Time"
            className="timepicker form-control hasWickedpicker"
            placeholder=" Time"
            defaultValue=""
           
          />
        </div>
      </div>
      <div className="field-agileinfo-spc form-w3-agile-text">
        <textarea
          name="msg"
          placeholder="Other Specifications"
          defaultValue={""}
        />
      </div>
      <h3 className="sub-heading-agileits">Personal Details</h3>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input type="text" name="Name" placeholder="Full Name" required="" />
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <input
            type="text"
            name="Phone no"
            placeholder="Phone Number"
            required=""
          />
        </div>
      </div>
      <div className="field-agileinfo-spc form-w3-agile-text">
        <input type="email" name="Email" placeholder="Email" required="" />
      </div>
      <div className="clear" />
                <Button onClick={showAlert}appearance="primary"><Link to={'/home'}>Submit</Link></Button>
        <Button appearance="default">Cancel</Button>
     
      <div className="clear" />
    </form>
    {/*// Form starts here */}
  </div>
</>
   
              
            </main>

        </div>
    )
}
export default Booking