import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';
import {faCircle,faBookAtlas,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {


  return (

   <>

   <div className="main_section">
   
    <img src="https://1000logos.net/wp-content/uploads/2024/08/Perplexity-Logo.png" className="logo_image" alt="logo"/>

    <button className="btn1">New Thread Ctrl I</button>

    <ul className="sidebar_menu">

        <div className='sidebar_icons'>            
        <FontAwesomeIcon icon={faSearchengin} className='font_icon' />
        <li><a href="#home">Home</a></li>
        </div>

        <div className='sidebar_icons'>            
        <FontAwesomeIcon icon={faCircle} className='font_icon' />
        <li><a href="#discover">Discover</a></li>
        </div>

        <div className='sidebar_icons'>            
        <FontAwesomeIcon icon={faBookAtlas} className='font_icon' />
         <li><a href="#library">Library</a></li>
        </div>

        <div className='sidebar_icons'>            
        <FontAwesomeIcon icon={faArrowRightToBracket} className='font_icon' />
        <li><a href="#sign in">Sign In</a></li>
        </div>


    </ul>

      <button className="signup_btn">Sign Up</button>

      <div className="pro_div">
        <p>Try Pro</p>
        <p>Upgrade for image upload, smarter AI, and more Pro Search.</p>
       

      <div className="actions">
        <button className="download_btn">Download</button>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB-EbJVMxRYtNz1i4dn7jOVSfHq-002oe4w&s" alt="icon"  className="icon"s  />
      </div>

      </div>

   </div>

</>
  );
}

export default Sidebar;
