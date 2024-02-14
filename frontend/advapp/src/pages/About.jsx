import { Carousel } from "rsuite"
import CustomNavbar from "../components/customnavbar"

const About=()=>{
    return(
        <div>
            <header>

            <CustomNavbar/>
            </header>
            <Carousel autoplay className="custom-slider">
    <img src="https://wallpapercave.com/wp/wp7488376.jpg" height="250" />
    <img src="https://www.thespruce.com/thmb/ioaXJqFwLilSDoLkClVBW-EnTCU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Garden-party-GettyImages-536987881-58becb143df78c353cd9f06d.jpg" height="250" />
  </Carousel>
  <h1>About Us</h1>
  <h3>Who are us?</h3>
  <h6>Transforming Every Occasion into a Masterpiece: Seamlessly Plan, Execute, and Elevate Your Events for Unforgettable Experiences and Lasting Memories.</h6>
<footer>
    
</footer>

        </div>
    )
}
export default About