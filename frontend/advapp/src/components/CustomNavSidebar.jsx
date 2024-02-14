import { Nav, Sidenav } from "rsuite"
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import { Link } from "react-router-dom";


const CustomNavSidebar=()=>{
    return(
        <div style={{ width: 240 }}>
        <Sidenav defaultOpenKeys={['3', '4']}>
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                Dashboard
              </Nav.Item>
            
              <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
                <Nav.Item eventKey="3-2"><Link to={'/adminpending'}>Upcoming events</Link></Nav.Item>
                <Nav.Item eventKey="3-3"><Link to={'/adminincome'}>Revenue</Link></Nav.Item>
                <Nav.Item eventKey="3-1"><Link to={'/calender'}>Calender</Link></Nav.Item>
                <Nav.Item eventKey="3-1"><Link to={'/contact'}>Contact</Link></Nav.Item>
                <Nav.Item eventKey="3-1"><Link to={'/aboutus'}>About us</Link></Nav.Item>
            
              </Nav.Menu>
              {/* <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu> */}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

    )
}
export default CustomNavSidebar