// import { Link } from 'react-router-dom';
// import '../assets/css/home.css'
// import CustomNavbar from "../components/customnavbar"
// import { Button } from 'rsuite';
// const Bd = () => {
//     return (
//       <div className="card">
//         <img src="" alt="Card Image" />
//         <div className="card-content">
//           <h3>Birthdays</h3>
//           <p>Includes food</p>
//         </div>
//       </div>
//     );
//   };
//   const Wd= () => {
//     return (
//       <div className="card">
//         <img src="" alt="Card Image" />
//         <div className="card-content">
//           <h3>Weddings</h3>
//           <p>Description of the card goes here.</p>
//         </div>
//       </div>
//     );
//   };
//   const Gt = () => {
//     return (
//       <div className="card">
//         <img src="" alt="Card Image" />
//         <div className="card-content">
//           <h3>Get togethers</h3>
//           <p>Description of the card goes here.</p>
//         </div>
//       </div>
//     );
//   };
//   const An = () => {
//     return (
//       <div className="card">
//         <img src="" alt="Card Image" />
//         <div className="card-content">
//           <h3>Anniversary</h3>
//           <p>Description of the card goes here.</p>
//         </div>
//       </div>
//     );
//   };
// const Home=()=>{
//     return(
//         <div>
//             <header>

//             <CustomNavbar/>
//             </header>
//             <main>
//                 <section>
//                 <br></br>
//                 <br></br>
//             <h1 className="header">Zenin Events</h1>
//             {/* <h6>         Crafting unforgettable moments for your special events.</h6> */}

//             <br></br>
//             <br></br>
          
//                     <h3>Here are our famous projects</h3>
//                     <br></br>
//                     <div className="cards">

//                     <Bd/>
//                     <Wd/>
//                     <br></br>
//                     <Gt/>
//                     <An/>
//                     <br></br>
//                     
//                     </div>

//                     {/* <S3Uploader/> */}


//                 </section>
//             </main>

//         </div>
//     )
// }
// export default Home




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
                
                   
                
                <section className={styles.services}>
                    <div className={styles.container}>
                        <div className={styles.servicesContent}>
                            <h1>Events</h1>
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
                                {/* <p><b>Boat House</b> offers unique experiences for every adventurer...</p>
                                <p>Set sail and explore the wonders of the sea with us!</p> */}
                            </div>
                            <div className={styles.image}>
                                <img
                                    src="https://programminglibrarian.org/sites/default/files/event_planning.jpg" // Image path
                                    alt="phoootttttooooooo"
                                    className={styles.imageZoom} // Apply zoom effect class
                                />
                            </div>
                        </div>
                <section className={styles.contact}>
                    <div className={styles.container}>
                      
                        <div className={styles.contactContent}>
                            <h4>Ready to Celebrate?</h4>
                            <div className={styles.container}>
                    <button className="book-now-btn"><Link to={'/booking'}>Book now!</Link></button>
                    <b></b>
                 <button className="book-now-btn"><Link to={'/showbooking'}>Show bookings</Link></button>
                    </div>
                           
                            
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default Home;