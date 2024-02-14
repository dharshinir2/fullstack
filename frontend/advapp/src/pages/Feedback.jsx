
import CustomNavbar from "../components/customnavbar"

const Feedback=()=>{
    return(
        <>
       
        <div>
            <header>

            <CustomNavbar/>
            </header>
  
  <h1>Feedback</h1>
  <br></br>
  <h3>Your feedback fuels our growth. Share your thoughts and help us serve you better!</h3>
  <br></br>
  <h6>Transforming Every Occasion into a Masterpiece: Seamlessly Plan, Execute, and Elevate Your Events for Unforgettable Experiences and Lasting Memories.</h6>
  <br></br>
  

  <form  style={{ textAlign: 'center' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Your Name:
          <input
            type="text"
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
        <br />
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Your Feedback:
          <textarea
           
            
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '10px' }}>Submit Feedback</button>
      </form>
    </div>
<footer>
    
</footer>

        
         </>
    )
}
export default Feedback