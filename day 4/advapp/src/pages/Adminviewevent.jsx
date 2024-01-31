import { Button } from "rsuite"
import Admincustomnavbar from "../components/Admincustomnavbar"
import { Link } from "react-router-dom"

const showAlert = () => {
    alert('whohooo!!Booked successfully');
  };

  const showAlert1 = () => {
    alert('Booking Cancelled Successfully');
  };

const Adminviewevent=()=>{
    return(
        <div>
            <header>
            <Admincustomnavbar/>
            

            
            </header>
            <main>
            <form action="#" method="post">
      <h2 className="sub-heading-agileits">Booking Details</h2>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <select className="form-control">
            <option>Event Type : Wedding</option>
           
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <select className="form-control">
            <option>Venue : Lee Partyhall</option>
           
          </select>
        </div>
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <select className="form-control">
            <option>Food: Lunch</option>
           
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <select className="form-control">
            <option>Food type : Veg</option>
           
          </select>
        </div>
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input
            id="datepicker"
            name="Text"
            type="text"
            placeholder="Other Venue: -"
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
            placeholder="Theme: Minimal"
            defaultValue=""
            
          />
        </div>
      </div>
      <div className="triple-wthree">
        <div className="field-agileinfo-spc form-w3-agile-text11">
          <select className="form-control">
            <option value="">Participants : Above 150</option>
           
          </select>
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text22">
          <select className="form-control">
            <option value="">Budget : Above 25,000</option>

          </select>
        </div>
        
      </div>
      <div className="radio-section">
        <h6>Is your event date is adjustable? No</h6>
       
        <div className="clear" />
      </div>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input
            id="datepicker1"
            name="Text"
            type="text"
            placeholder="Date : 1/2/2024"
            defaultValue=""
           
            required=""
            className="hasDatepicker"
          />
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <input
            type="text"
            id="timepicker1"
            name="Time : 6:00pm"
            className="timepicker form-control hasWickedpicker"
            placeholder=" Time"
            defaultValue=""
           
          />
        </div>
      </div>
      <div className="field-agileinfo-spc form-w3-agile-text">
        <textarea
          name="msg"
          placeholder="Other Specifications : No"
          defaultValue={""}
        />
      </div>
      <h3 className="sub-heading-agileits">Personal Details</h3>
      <div className="main-flex-w3ls-sectns">
        <div className="field-agileinfo-spc form-w3-agile-text1">
          <input type="text" name="Name" placeholder="Demon Salvator" required="" />
        </div>
        <div className="field-agileinfo-spc form-w3-agile-text2">
          <input
            type="text"
            name="Phone no"
            placeholder="Phone Number : 9723456789"
            required=""
          />
        </div>
      </div>
      <div className="field-agileinfo-spc form-w3-agile-text">
        <input type="email" name="Email" placeholder="daemon@gmail.com" required="" />
      </div>
      <div className="clear" />
                <Button onClick={showAlert}appearance="primary"><Link to={'/adminpending'}>Submit</Link></Button>
                <Button onClick={showAlert1}appearance="primary"><Link to={'/adminpending'}>Cancel</Link></Button>
     
      <div className="clear" />
    </form>
                
                
            </main>

        </div>
    )
}
export default Adminviewevent