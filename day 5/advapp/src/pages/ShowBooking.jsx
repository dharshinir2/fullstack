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
       
        <button className="success"><Link to={'/editbooking'}>Edit</Link></button>
        <button className="success"><Link to={'/booking'}>Add</Link></button>
      </div>
    </div>
    <div className="booking-page__results">
      <div className="booking-filters">
        <div className="filter-input">
          <label></label>
          <div>
            
          </div>
        </div>
        <div className="filter-input">
          <label></label>
          <div>
            
          </div>
        </div>
      </div>
      <div className="booking-cards">
        <div className="booking-card">
          <div className="booking-card__header">
            <div className="booking-card__header-meta">
              <div className="booking-card__header-meta-calendar">
                <i className="fa fa-calendar icon" />
              </div>
              <div className="booking-card__header-meta-users">
                <i className="fa fa-user icon"> </i>
                <span></span>
              </div>
            </div>
            <div className="booking-card__header-status accepted">accepted</div>
          </div>
          <div className="booking-card__body">
            <div className="booking-card__body-date">
              <div className="booking-card__body-date-day">16</div>
              <div className="booking-card__body-date-month">Jul</div>
            </div>
            <div className="booking-card__body-details">
              <div className="booking-card__body-details-date">
                Rhodey Cooper
              </div>
              <div className="booking-card__body-details-facility">
                Birthday
              </div>
              <div className="booking-card__body-details-platform">
                @ABC Hall
              </div>
            </div>
          </div>
          
          <div className="booking-card__footer">
            <div className="booking-card__footer-date">
              <i className="fa fa-calendar icon"> </i>
              <span>Jul 16th at 11:20 PM</span>
            </div>
            <div className="booking-card__footer-author">
              <i className="fa fa-user icon"> </i>
              <span></span>
            </div>
          </div>
        </div>
        
            
          
         
        <div className="booking-card">
          <div className="booking-card__header">
            <div className="booking-card__header-meta">
              <div className="booking-card__header-meta-calendar">
                <i className="fa fa-calendar icon" />
              </div>
              <div className="booking-card__header-meta-users">
                <i className="fa fa-user icon"> </i>
                <span></span>
              </div>
            </div>
            <div className="booking-card__header-status completed">
              completed
            </div>
          </div>
          <div className="booking-card__body">
            <div className="booking-card__body-date">
              <div className="booking-card__body-date-day">18</div>
              <div className="booking-card__body-date-month">Jul</div>
            </div>
            <div className="booking-card__body-details">
              <div className="booking-card__body-details-date">
                Lara Wilson
              </div>
              <div className="booking-card__body-details-facility">Reunion</div>
              <div className="booking-card__body-details-platform">
                Cardigan Club
              </div>
            </div>
          </div>
         
          <div className="booking-card__footer">
            <div className="booking-card__footer-date">
              <i className="fa fa-calendar icon"> </i>
              <span>Jul 16th at 11:20 PM</span>
            </div>
            <div className="booking-card__footer-author">
              <i className="fa fa-user icon"> </i>
              <span></span>
            </div>
          </div>
        </div>
        
        
        <div className="booking-card">
          <div className="booking-card__header">
            <div className="booking-card__header-meta">
              <div className="booking-card__header-meta-calendar">
                <i className="fa fa-calendar icon" />
              </div>
              <div className="booking-card__header-meta-users">
                <i className="fa fa-user icon"> </i>
                <span></span>
              </div>
            </div>
            <div className="booking-card__header-status pending">pending</div>
          </div>
          <div className="booking-card__body">
            <div className="booking-card__body-date">
              <div className="booking-card__body-date-day">21</div>
              <div className="booking-card__body-date-month">Jul</div>
            </div>
            <div className="booking-card__body-details">
              <div className="booking-card__body-details-date">
                Niklaus Doe
              </div>
              <div className="booking-card__body-details-facility">
               Birthday
              </div>
              <div className="booking-card__body-details-platform">Booker</div>
            </div>
          </div>
          <div className="booking-card__footer">
            <div className="booking-card__footer-date">
              <i className="fa fa-calendar icon"> </i>
              <span>Jul 16th at 11:20 PM</span>
            </div>
            <div className="booking-card__footer-author">
              <i className="fa fa-user icon"> </i>
              <span></span>
            </div>
          </div>
        </div>
          <br></br>
        <div className="booking-card">
          <div className="booking-card__header">
            <div className="booking-card__header-meta">
              <div className="booking-card__header-meta-calendar">
                <i className="fa fa-calendar icon" />
              </div>
              <div className="booking-card__header-meta-users">
                <i className="fa fa-user icon"> </i>
                <span></span>
              </div>
            </div>
            <div className="booking-card__header-status accepted">accepted</div>
          </div>
          <div className="booking-card__body">
            <div className="booking-card__body-date">
              <div className="booking-card__body-date-day">16</div>
              <div className="booking-card__body-date-month">Jul</div>
            </div>
            <div className="booking-card__body-details">
              <div className="booking-card__body-details-date">
                James Pardon
              </div>
              <div className="booking-card__body-details-facility"></div>
              <div className="booking-card__body-details-platform">Client home</div>
            </div>
          </div>
          <div className="booking-card__footer">
            <div className="booking-card__footer-date">
              <i className="fa fa-calendar icon"> </i>
              <span>Jul 16th at 11:20 PM</span>
            </div>
            <div className="booking-card__footer-author">
              <i className="fa fa-user icon"> </i>
              <span></span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  
  </div>
</>


           

        </div>
    )
}
export default ShowBooking