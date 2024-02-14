

import styles from './home.module.css'; // Import CSS Modules
import CustomNavbar from '../components/customnavbar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header>
                <CustomNavbar />
            </header>
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h2 style={{color:'black'}}>Zenin Events</h2>
                        <p style={{color:'black'}}>Expertly coordinate and oversee all aspects of event planning and execution for flawless experiences.</p>
                    </div>
                </section>
                <div className="content">
        <div >
          <img
            src="https://spaceshipsandlaserbeams.com/wp-content/uploads/2016/09/16-Black-and-White-Tablescape-488x975.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
           <img
            src="https://celebrationsathomeblog.com/wp-content/uploads/2012/12/black-white-dinner-party-ideas-cocktiail-bar.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
            <img
            src="https://i.pinimg.com/originals/72/5d/50/725d50588c9d04e112ff04a886141fc2.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
           <img
            src="https://i.pinimg.com/originals/af/01/ee/af01eebba988460029b3ec960aa5bb07.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
            <img
            src="https://i.pinimg.com/originals/74/db/b8/74dbb8e3d9070d5eb15bea02b2c3b4bd.jpg"
            alt="Description of the image"
            style={{ maxWidth: '300px', height: '500px' }}
          />
        </div>
        </div>

                <section className={styles.services}>
                    <div className={styles.container}>
                        <div className={styles.servicesContent}>
                            <h1>Major Events</h1>
                            <div className={styles.servicesList}>
                                <div className={styles.serviceItem}>
                                    <img src="https://i.pinimg.com/originals/05/65/1b/05651b57ce433e21de5d5662bce900e5.jpg"  />
                                    <h3>Office parties</h3>
                                    <p>Elevate your office celebrations with tailored and engaging office party experiences.</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src="https://i.pinimg.com/originals/71/85/35/71853502cb1f7172282612772963bfdd.jpg" alt="Special Events Hosting" />
                                    <h3>Birthdays</h3>
                                     
                                    <p>Create lasting memories on your special day with our unforgettable birthday event experience</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src="https://i.pinimg.com/originals/76/3d/32/763d3298d3129cca9d03e1ddc1ca9e10.jpg" alt="Special Events Hosting" />
                                    <h3>Weddings</h3>
                                    <p>Elevate your love story with our exquisite wedding services, turning dreams into cherished moments.</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src='https://i.pinimg.com/originals/9a/a9/1f/9aa91f448f7afe15dbe79cf94af43ee8.jpg' alt="Special Events Hosting" />
                                    <h3>Gardenparties</h3>
                                    <p>Blossom your celebrations with enchanting garden parties, where nature becomes the backdrop for unforgettable moments.</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src="https://i.pinimg.com/originals/6a/f0/0a/6af00af6d839c918ab3bba3b5d10fcc0.jpg" alt="Special Events Hosting" />
                                    <h3>Anniversary</h3>
                                    <p>Mark a milestone of love and commitment with our anniversary services, crafting moments that endure a lifetime.</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src="https://sendomatic.com/blog/wp-content/uploads/2020/03/reunion-celebration.jpg" alt="Special Events Hosting" />
                                    <h3>Reunion</h3>
                                    <p>Reuniting for a journey down memory lane, where laughter echoes and friendships rekindle. Celebrate the moments that connect us </p>
                                </div>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <div className={styles.aboutContent}>
                            <div className={styles.text}>
                              <br></br>
                              <br></br>
                                <h2>Where Your Vision Meets Our Expertise, Creating Unforgettable Moments Together.</h2>
                                
                            </div>
                            <div className={styles.image}>
                                <img
                                    src="https://i.pinimg.com/564x/73/17/d4/7317d4e56e79b193e58769cd72339e2a.jpg" // Image path
                                    alt="phoootttttooooooo"
                                    className={styles.imageZoom} // Apply zoom effect class
                                />
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <h4>Ready to Celebrate?</h4>
                            <br></br>
                    <button className="book-now-btn"><Link to={'/booking'}>Book now!</Link></button>
                    <b></b>
                 <button className="book-now-btn"><Link to={'/showbooking'}>Show bookings</Link></button>
                        </div>
                <section className={styles.contact}>
                    <div className={styles.container}>
                      
                        <div className={styles.contactContent}>
                            <p> ©ZeninEvents @2024</p>
                            <div className={styles.container}>
                    </div>  
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    );
}

export default Home;