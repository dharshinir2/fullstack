import { Nav, Navbar } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';

import { Link } from "react-router-dom";
const Admincustomnavbar=()=>{
    return(
        <Navbar>
    <Navbar.Brand href="#"> ADMIN</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}><Link to={'/adminhome'}>Home</Link></Nav.Item>
      <Nav.Item><Link to={'/admincalender'}>Calender</Link></Nav.Item>
      {/* <Nav.Item><Link to={'/adminhome'}>Contact</Link></Nav.Item> */}
      
    </Nav>
    <Nav pullRight>
      
      <Nav.Item><Link to={'/adminprofile'}>Profile</Link></Nav.Item>
    </Nav>
  </Navbar>

    )
}
export default Admincustomnavbar