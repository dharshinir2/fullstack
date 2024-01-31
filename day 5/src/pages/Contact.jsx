
import CustomNavbar from '../components/customnavbar';
import { Panel, PanelGroup } from 'rsuite';
import '../assets/css/contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <div className='con'>

        <section>
            
          <h2>Contact Us</h2>
          <p>
            Welcome to our contact page. If you have any questions or inquiries, please feel free to reach out to us.
          </p>

          <PanelGroup>
            <Panel header="Address" bordered>
              <p>123 Company St, Tennessee,USA</p>
            </Panel>
            <Panel header="Phone" bordered>
              <p>+1 (123) 456-7890</p>
            </Panel>
            <Panel header="Email" bordered>
              <p>zeninevents@gmail.com</p>
            </Panel>
          </PanelGroup>
        </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
