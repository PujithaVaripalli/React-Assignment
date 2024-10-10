import React from 'react';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';
import './ComponentStyles.css';
import DiscoverItems from "./DiscoverItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faMicrochip,faDollarSign,faPalette,faMedal,faTv} from '@fortawesome/free-solid-svg-icons';


function App() {


  return (
    <div className="App">
      <Sidebar />

      <section className='content_section'>

        {/* Top bar Section Starts */}

      <div className="header">
        <h1 id="main_title">Discover</h1>        
      </div>

      <section className='discover_section'>

      <div className='article_section'>

      <ul className="top_menu">

         <div className='discover_icon'>
         <FontAwesomeIcon icon={faStar} className='top_icons' />
         <li className='tab'><a href="#top">Top</a></li>
        </div>

        <div className='discover_icon'>
        <FontAwesomeIcon icon={faMicrochip} className='top_icons' />
        <li className='tab'><a href="#discover">Tech & Science</a></li>
        </div>

        <div className='discover_icon'>
        <FontAwesomeIcon icon={faDollarSign} className='top_icons'/>   
        <li className='tab'><a href="#library">Finance</a></li>
        </div>

        <div className='discover_icon'>
        <FontAwesomeIcon icon={faPalette} className='top_icons' />
        <li className='tab'><a href="#sign in">Arts & culture</a></li>
        </div>

        <div className='discover_icon'>
        <FontAwesomeIcon icon={faMedal} className='top_icons' />          
        <li className='tab'><a href="#library">Sports</a></li>
        </div>

        <div className='discover_icon'>
        <FontAwesomeIcon icon={faTv} className='top_icons' />
        <li className='tab'><a href="#library">Entertainment</a></li>
        </div>
    
      </ul>
     
        {/* Top bar Section Ends*/}

        {/* Cards Section Starts*/}
       <section className='cards_section'>

       <ul className="discover_items">
      {
        DiscoverItems.map((card,index)=>{
        const {id,title,imageUrl,description}=card;
     


       
        return(
          <li key={id} className={`discover_list ${index >= 1 ? 'flex_card' : ''}`}>

           <div >

             <Link to={`/card/${id}`} key={id}> 

             
                                
           
            <div className={card.type === 'article' ? 'discover_card': 'discover_subcard'} >

            <div className="cards_div"> 
                             
             <img src={imageUrl} alt={title} className={card.type === 'article' ? 'discover_article': 'discover_blog'}/>  
             <h2 className={card.type === 'article' ? 'article_title': 'blog_title'}>{title}</h2>
             <h3 className={card.type === 'article' ? 'article_description': 'blog_description'}>{description}</h3>

             </div>


             <div className='icon_div'>
                <img src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail" alt="Icon" id="round_image"/>
                <span>elymc</span>
            </div>

            </div>

            </Link>
          
            </div>
            </li>
            
                
       )
                 
        })
        }
        </ul>
           

      </section>

      </div>
      
      {/* Cards Section Ends  */}


      {/* Topic Section Starts */}

      <div className='topic_section'>

        <h4 id="topic_heading">Make it yours</h4>
        <p className="topic_content">Select topics and interests to customize your Discover experience</p>

        <section className='topic_icon_section'> 
        <div className='topic_icon'>
        <button className='topic_btn'>
        <FontAwesomeIcon icon={faMicrochip} className='topic_icons' /> Tech& Sience</button>
        </div>

        <div className='topic_icon'>
        <button className='topic_btn'>
        <FontAwesomeIcon icon={faDollarSign} className='topic_icons' /> Finance</button>
        </div>

        <div className='topic_icon'>
        <button className='topic_btn'>
        <FontAwesomeIcon icon={faPalette} className='topic_icons' />Arts & culture</button>
        </div>

        <div className='topic_icon'>
        <button className='topic_btn'>
        <FontAwesomeIcon icon={faMedal} className='topic_icons' /> Sports</button>
        </div>

        <div className='topic_icon'>
        <button className='topic_btn'>
        <FontAwesomeIcon icon={faTv} className='topic_icons' /> Entertainment</button>
        </div>
       
        </section>

        <hr/>

       <button className='save_btn'>Save Interests</button>

      </div>

      {/* Topic Section Ends */}

      </section>

  </section>

</div>

  );
}

export default App;