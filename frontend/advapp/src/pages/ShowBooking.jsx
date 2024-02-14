import { Link } from "react-router-dom"
import CustomNavbar from "../components/customnavbar"
import '../assets/css/showbooking.css'

const ShowBooking=()=>{
    return(
        <div>
            <CustomNavbar/>
                   
                    <>
  <div className="header">
    <div className="header__burger" />
    <div className="header__logo">
     
    </div>
    <div className="header__userbar">
      <div className="header__name"></div>
      <div className="header__avatar">
    
      </div>
    </div>
  </div>
  <div className="booking-page">
    
    <div className="booking-page__header">
     
      <div className="booking-page__controls">
       
        {/* <button className="success"><Link to={'/editbooking'}>Edit</Link></button> */}
       
      </div>
    </div>
    <section className="container">
  <h1>Your Events</h1>
  <div className="row">
    <article className="card fl-left">
      <section className="date">
        <time dateTime="23th feb">
          <span>23</span>
          <span>feb</span>
        </time>
      </section>
      <section className="card-cont">
        <small>dj music event</small>
        <h3>live in sydney</h3>
        <div className="even-date">
          <i className="fa fa-calendar" />
          <time>
            <span>wednesday 28 december 2014</span>
            <span>08:55pm to 12:00 am</span>
          </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker" />
          <p>nexen square for people australia, sydney</p>
        </div>
        <button className="success"><Link to={'/booking'}>Add event</Link></button>
      </section>
    </article>
    {/* <article className="card fl-left">
      <section className="date">
        <time dateTime="23th feb">
          <span>23</span>
          <span>feb</span>
        </time>
      </section>
      <section className="card-cont">
        <small>dj music event</small>
        <h3>corner obsest program</h3>
        <div className="even-date">
          <i className="fa fa-calendar" />
          <time>
            <span>wednesday 28 december 2014</span>
            <span>08:55pm to 12:00 am</span>
          </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker" />
          <p>nexen square for people australia, sydney</p>
        </div>
        <a href="#">tickets</a>
      </section>
    </article>
  </div>
  <div className="row">
    <article className="card fl-left">
      <section className="date">
        <time dateTime="23th feb">
          <span>23</span>
          <span>feb</span>
        </time>
      </section>
      <section className="card-cont">
        <small>dj music event</small>
        <h3>music kaboom festivel</h3>
        <div className="even-date">
          <i className="fa fa-calendar" />
          <time>
            <span>wednesday 28 december 2014</span>
            <span>08:55pm to 12:00 am</span>
          </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker" />
          <p>nexen square for people australia, sydney</p>
        </div>
        <a href="#">booked</a>
      </section>
    </article>
    <article className="card fl-left">
      <section className="date">
        <time dateTime="23th feb">
          <span>23</span>
          <span>feb</span>
        </time>
      </section>
      <section className="card-cont">
        <small>dj music event</small>
        <h3>hello dubai festivel</h3>
        <div className="even-date">
          <i className="fa fa-calendar" />
          <time>
            <span>wednesday 28 december 2014</span>
            <span>08:55pm to 12:00 am</span>
          </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker" />
          <p>nexen square for people australia, sydney</p>
        </div>
        <a href="#">cancel</a>
      </section> */}
    {/* </article> */}
  </div>
</section>
    
  </div>
         
         
        
        
        
             
       
  
</>


           

        </div>
    )
}
export default ShowBooking