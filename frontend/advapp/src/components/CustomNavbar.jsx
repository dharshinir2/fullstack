import { Nav, Navbar } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';

import { Link } from "react-router-dom";
const CustomNavbar=()=>{
    return(
        <Navbar>
    <Navbar.Brand href="#">USER</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
      <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
      <Nav.Item><Link to={'/about'}>About us</Link></Nav.Item>
      <Nav.Item><Link to={'/payment'}>Payment</Link></Nav.Item>
      <Nav.Item><Link to={'/feedback'}>Feedback</Link></Nav.Item>
      
    </Nav>
    <Nav pullRight>
      
      <Nav.Item><Link to={'/userprofile'}>Profile</Link></Nav.Item>
    </Nav>
  </Navbar>

    )
}
export default CustomNavbar