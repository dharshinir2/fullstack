import { Link } from "react-router-dom"
import {  Form } from "rsuite"
import '../assets/css/signup.css'


const Signup=()=>{
    return(
      <div>
          <h1>Signup </h1>
          <br></br>
             <Form>
              <div className='l'>
              <Form.Group controlId="fname">
      <Form.ControlLabel>First name</Form.ControlLabel>
      <Form.Control name="fname" />
      <Form.HelpText>Firstname is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="number">
      <Form.ControlLabel>Phone Number</Form.ControlLabel>
      <Form.Control name="number"  />
      <Form.HelpText tooltip>Phone Number is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>

              </div>
              <div className="r">
                
    <Form.Group controlId="lname">
      <Form.ControlLabel>Last name</Form.ControlLabel>
      <Form.Control name="lname" />
      <Form.HelpText>Lastname is required</Form.HelpText>
    </Form.Group>
   
   
    
    <Form.Group controlId="age">
      <Form.ControlLabel>Age</Form.ControlLabel>
      <Form.Control name="age"  />
      </Form.Group>
      <Form.Group controlId="location">
      <Form.ControlLabel>Location</Form.ControlLabel>
      <Form.Control name="location"  />
    </Form.Group>
     
              </div>

                
              <Form.Group>
                <div className="laa">

        <button className="bu"><Link to={'/login'}>Submit</Link></button>
                </div>

              </Form.Group>
  </Form>
    
    
    
        
      

        </div>
    )
}
export default Signup