
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar, Form } from 'rsuite';
import '../assets/css/login.css';

const Adminlogin = () => {
  return (
    <div>
      <br></br>
      <h1>Login page</h1>
     
      <div className="login-page">
        <div className="box">
          <Form>
            

            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">
                  <Link to={'/adminhome'}>Submit</Link>
                </Button>
                {/* <Button appearance="primary">
                  <Link to={'/signup'}>New User?</Link>
                </Button> */}
              </ButtonToolbar>
            </Form.Group>
          </Form>

         
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
