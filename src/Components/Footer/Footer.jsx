import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer_section'>
        <div className="footer_box">

        <div className="footerimg"><img src="A.png" alt="" /></div>
        <div className="footer_socials">
            <h2>Socials Connects</h2>
            <ul>
                <div><button><FontAwesomeIcon icon={faFacebook} /></button> </div>
                <div><button><FontAwesomeIcon icon={faInstagram} /></button> </div>
                <div><button><FontAwesomeIcon icon={faLinkedin} /> </button></div>
                <div><button><FontAwesomeIcon icon={faGithub} /></button> </div>
                <div><button><FontAwesomeIcon icon={faGoogle} /></button> </div>
                <div><button><FontAwesomeIcon icon={faWhatsapp} /></button> </div>
                
            </ul>
        </div>
        <div><h1>Email me at :</h1><br /> <a href="mailto:ahmedhassan0057@gmail.com"><FontAwesomeIcon icon={faGoogle}/></a></div>
    </div>
    
        </div>
  )
}

export default Footer