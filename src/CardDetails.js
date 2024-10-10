import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faToggleOn,faCodeFork,faShare,faLink,faBookmark} from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import DiscoverItems from "./DiscoverItems";
import './CardDetails.css'


function CardDetails() {

    const {id}=useParams();
  
    const CardDetailsData = DiscoverItems.find((eachCard)=> eachCard.id === parseInt(id));


  return (

    <div className="details_card">

    <Sidebar/>

    <section className='details_section'> 

        
    <div className="header_2">

       <div className='btn_header'>
                
        <button className='bookmark_btn'><FontAwesomeIcon icon={faBookmark} /></button>
        
        <button className="link_btn"><FontAwesomeIcon icon={faLink} /></button>

        <div className='share_icon'>
        <button className='share_btn'>
        <FontAwesomeIcon icon={faShare} /> Share</button>
        </div>

       </div>
            
    </div> 


    <img src={CardDetailsData.imageUrl} alt={CardDetailsData.title} className='card_details_img'/>

      <section className='detail_sub_section'>

      <div className='details_project'>

      <h1 id="card_title">{CardDetailsData.title}</h1>

      <div className='icon_div_2'>
            <img src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail" alt="Icon" className="round_image_2"/>
            <span className="icon_text">Curated by elymc</span>

       </div>

      <h2 id="card_description">{CardDetailsData.description}</h2>

    </div>


    <div className='detail_items'>

        <h3 className='lists'>Introduction</h3>
        <h3 className='lists'>Quandoom Technical Challenges</h3>
        <h3 className='lists'>Simulation on Classical Computers</h3>
        <h3 className='lists'>Unique Gameplay Features</h3>
        <h3 className='lists'>Development Insights and Future</h3>
       
    </div>

    </section>

       <div className='container_btn'>

       <p>Ask follow-up</p>

      <div className='container_icons'>
      <FontAwesomeIcon icon={faToggleOn} className='container_icon' />
       <span>Pro</span>
       <FontAwesomeIcon icon={faCodeFork} className='container_icon'/>
      </div>
       
       </div>

        <div>
            <button id="icon_btn">?</button>
        </div>
      
      </section>
    
    </div>
 
    
  )
  
}

export default CardDetails;