
import { Link, useNavigate } from 'react-router-dom';
import {  ButtonToolbar, Form } from 'rsuite';
import '../assets/css/login.css';
import { useState } from 'react';
import { signIn } from '../services/auth';
import { jwtDecode } from "jwt-decode";
import '../assets/css/firstpage.css'
const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };

  const handlePasswordChange = (value) => {
      setPassword(value);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          email: email,
          password: password
      }
      signIn(form)
      .then((res) => {
        const decoded = jwtDecode(res.data.token);
        sessionStorage.setItem('token', res.data.token);
        console.log(decoded.sub);
        if(decoded.sub === "dharsh@gmail.com"){
            setEmail("");
            setPassword("");
            navigate('/adminhome');
        }
        else{
            setEmail("");
        setPassword("");
        navigate('/home');
        }
      })
          .catch((err) => {
              setEmail("");
              setPassword("");
              console.log(err);
             
          });
          
  };
  return (
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
            src="https://i.pinimg.com/originals/74/c6/57/74c6576671895b5b7579a70856ad6452.gif"
            alt="Description of the image"
            style={{ maxWidth: '700px', height: '500px' }}
          />
       

        </div>
        <div className="left content">
        <h3>Welcome to Zenin Events,Unlock the Door to Your Perfect Events: Login and Embrace the Experience</h3>
        <Form>
            

            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" onChange={handleEmailChange} value={email}/>
              <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" onChange={handlePasswordChange} value={password}autoComplete="off" />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
              <div className='bb'>
            <button onClick={handleFormSubmit}>
              Login 
            </button>
            <br />
            
            <button>
              <Link to={'/signup'}>New user?</Link>
            </button>
          </div>
                {/* <Button appearance="primary">
                  <Link to={'/home'}>Submit</Link>
                </Button>
                <Button appearance="primary">
                  <Link to={'/signup'}>New User?</Link>
                </Button> */}
              </ButtonToolbar>
            </Form.Group>
          </Form>
          
        </div>
         

         
        </div>
      </div>
    </div>
  );
};

export default Login;
