

import Admincustomnavbar from "../components/Admincustomnavbar"
import '../assets/css/adminincome.css'
import CustomNavSidebar from "../components/CustomNavSidebar"





const Adminincome=()=>{
    return(
        <div>
            <header>
            <Admincustomnavbar/>
            </header>
          
            <div className='sd'>
          <CustomNavSidebar />
          </div>
          <div className='others'>
            <main>
                <h1>Income</h1>
                <hr></hr>
                <h5>In our project, event management firms commonly apply a service fee calculated as a percentage of the total event budget. As an instance, they might set this fee at 10% of the overall event expenditure.</h5>
            <h3>Here is our revenue data for the past 4 events...</h3>
            <table style={{ margin: 'auto' }}>
      <thead>
    <tr>
        <th>Name</th>
        <th>Event Type</th>
        <th>Date</th>
        <th>Budget</th>
        <th>Income</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Tom</td>
        <td>Birthday</td>
        <td>May 1</td>
        <td>20,000</td>
        <td>4000</td>
    </tr>
    <tr>
    <td>Hill</td>
        <td>Birthday</td>
        <td>May 15</td>
        <td>27,000</td>
        <td>4500</td>
    </tr>
    <tr>
        <td>Don</td>
        <td>Wedding</td>
        <td>June 15</td>
        <td>47,000</td>
        <td>6000</td>
    </tr>
    <tr>
    <td>Grey</td>
        <td>Wedding</td>
        <td>June 25</td>
        <td>20,000</td>
        <td>3000</td>
    </tr>
   
   
   
</tbody>
</table>
            

                
            </main>

        </div>
        </div>
    )
}
export default Adminincome