
import '../assets/css/adminpending.css'
import { Panel } from "rsuite"
import { Link } from "react-router-dom"
import Admincustomnavbar from "../components/Admincustomnavbar"

const Adminpending=()=>{
    return(
        <div>
            <header>

            <Admincustomnavbar/>
            </header>
            <div>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <Panel header="Wedding">
      <p>
        
             Date: February 14,2024
           Location: Lee partyhall
       
      </p>
      <button><Link to='/adminviewevent'>Info</Link></button>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
  
    <Panel header="Birthday">
      <p>
        
           Date: March 1,2024
           Location: Lee partyhall

       
      </p>
      <button><Link to='/adminviewevent'>Info</Link></button>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    
    <Panel header="Reunion">
      <p>
            Date: March 1,2024
           Location: Lee partyhall
      </p>
      <button><Link to='/adminviewevent'>Info</Link></button>
    </Panel>
  </Panel>
            </div>
            

 

        </div>
    )
}
export default Adminpending
