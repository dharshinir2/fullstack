// import {  useNavigate } from "react-router-dom";
import CustomNavbar from "../components/customnavbar"
import {  Button, Message,  useToaster} from 'rsuite';
import '../assets/css/booking.css'
import { useState } from "react";
import { Book } from "../services/auth";
import { useNavigate } from "react-router-dom";



const Booking=()=>{
  console.log(sessionStorage.getItem("token"));
  const toaster = useToaster();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventType: "",
    venue: "",
    food: "",
    bookingName:"",
    theme: "",
    time: "",
    date: "",
    onaborttherSpecifications: "",
    participants: "",
    budget: "",
    otherVenue: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    console.log(1);
    Book(formData, token)
      .then(() => {
        console.log(2);
        console.log(formData)
        toaster.push(
          <Message
            showIcon
            type="success"
            closable
            onClose={() => navigate("/home")}
          >
            Registration successful!
          </Message>,
          {
            placement: "topCenter",
            duration: 1000
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return(
        <div>
            <header>

            <CustomNavbar/>
            <h1>Book now!!</h1>
            </header>
            <main>
            <>
  
  <div className="booking-form-w3layouts">
    
    <form action="#" method="post">
      <h2 className="sub-heading-agileits">Booking Details</h2>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <select className="form-control" name="eventType"  onChange={handleChange}>
            <option>Event Type</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Reunion">Reunion</option>
            <option value="GardenParty">Garden party</option>
            <option value="Officeparty">Office party</option>
            <option value="Other event">Other event</option>
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <select className="form-control"   name="venue" onChange={handleChange}>
            <option>Venue</option>
            <option value="Lee Partyhall">Lee Partyhall</option>
            <option value="Grey MAX">Grey MAX</option>
            <option value="Lorem Mall">Lorem Mall</option>
            <option value="Lola Nightclub">Lola Nightclub</option>
            <option value="Hawkinsm">Hawkins</option>
            <option value="LA HALL">LA HALL</option>
          </select>
        </div>
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <select className="form-control"  name="food" onChange={handleChange}>
            <option>Food</option>
            <option value="Lunch">Lunch</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <select className="form-control">
            <option>Food type</option>
            <option value="NonVeg">NonVeg</option>
            <option value="Veg">Veg</option>
            
          </select>
        </div>
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input 
            id="datepicker"
            name="otherVenue"
            type="text"
            placeholder="Other Venue"
            defaultValue=""
            required=""
            className="hasDatepicker"
             onChange={handleChange}
          />
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <input
            type="text"
            id="timepicker"
            name="theme"
            className="timepicker form-control hasWickedpicker"
            placeholder="Theme"
            defaultValue=""
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="triple-wthree">
        <div className="field-agileinfo-spc form-w3-agile-text11">
          <select className="form-control"  name="participants" onChange={handleChange}>
            <option value="">Participants</option>
            <option value="Below 20">Below 20</option>
            <option value="20-50">20-50</option>
            <option value="50-100">50-100</option>
            <option value="100-150">100-150</option>
            <option value="Above 150">Above 150</option>
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text22">
          <select className="form-control"  name="budget" onChange={handleChange}>
            <option value="">Budget</option>
            <option value="below 10,000">below 10,000</option>
            <option value="10,000-15,000">10,000-15,000</option>
            <option value="15,000-20,000">15,000-20,000</option>
            <option value="20,000-25,000">20,000-25,000</option>
            <option value="Above 25,000">Above 25,000</option>
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
            name="date"
            type="text"
            placeholder="Date"
            defaultValue=""
             onChange={handleChange} 
           
            required=""
            className="hasDatepicker"
          />
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <input
            type="text"
            id="timepicker1"
            name="time"
            className="timepicker form-control hasWickedpicker"
            placeholder=" Time"
            defaultValue=""
            onChange={handleChange}
           
          />
        </div>
      </div>
      <div className="field-agileinfo-spc form-w3-agile-text">
        <textarea
          name="onaborttherSpecifications"
          placeholder="Other Specifications"
          defaultValue={""}
          onChange={handleChange}
        />
      </div>
      <h3 className="sub-heading-agileits">Personal Details</h3>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input type="text" name="Name" placeholder="Full Name" required=""  onChange={handleChange} />
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
                <Button onClick={handleSubmit}appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
     
      <div className="clear" />
    </form>
    
  </div>
</>  
            </main>

        </div>
    )
}
export default Booking