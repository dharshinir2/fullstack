import {  useNavigate } from "react-router-dom"
import {  Form } from "rsuite"
import '../assets/css/signup.css'
import { signUp } from "../services/auth";
import { useState } from "react";


const Signup=()=>{
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };
  const handleNameChange = (value) => {
    setName(value);
};

  const handlePasswordChange = (value) => {
      setPassword(value);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          email: email,
          password: password,
          name:name
      }
      signUp(form)
          .then(() => {
              
              // sessionStorage.setItem('token', res.data.token);
              setEmail("");
              setPassword("");
              setName("");
              navigate('/login');
          })
          .catch((err) => {
              setEmail("");
              setPassword("");
              setName("");
              console.log(err);
             
          });
  };
    return(
     

    <div>
      
      <header>
        <h1 className="header">Zenin Events</h1>
        <h3 className='header'>Crafting unforgettable moments for your special events.</h3>
       
      </header>
      <br></br>
      <h2></h2>
     
      <div className="login-page">
        <div className="box1">
        <div className='right-content'>
        <img
            src="https://i.pinimg.com/564x/6f/14/1a/6f141a4bbe2a7588231b4b4bc480d61a.jpg"
            alt="Description of the image"
            style={{ maxWidth: '700px', height: '500px' }}
          />
       

        </div>
        <div className="left content">
        <h3>Kuddos User.....Welcome to Zenin Events,Unlock the Door to Your Perfect Events: Create your account</h3>
        <Form>
        <Form.Group controlId="name">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" type="name" onChange={handleNameChange} value={name}/>
              
            </Form.Group>
            

            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" onChange={handleEmailChange} value={email}/>
              <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password}/>
            </Form.Group>
            <Form.Group>
              
              <div className='bb'>
           
            <br />
           
            <button onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
           
              
            </Form.Group>
          </Form>
          
        </div>
         

         
        </div>
      </div>
    </div>
  );
};


export default Signup