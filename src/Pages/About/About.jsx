import React from 'react'
import Header from '../../Components/Header'
import './About.css'

import HeaderImage from '../../assets/images/header_bg_1.jpg'
import StoryImage from '../../assets/images/about1.jpg'
import VisionImage from '../../assets/images/about2.jpg'
import MissionImage from '../../assets/images/about3.jpg'

const About = () => {
  return (
    <>
    <Header title='About Us' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias numquam consectetur ex laudantium unde!
    </Header>

    <section className='about_story'>
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>  
        <div className='about_section-content'>
          <h1>Our Story</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, accusamus incidunt. Pariatur sint atque, quam laudantium inventore hic voluptatum repellendus.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore beatae deleniti vitae nam asperiores. Voluptatem quae cupiditate illo ducimus vero quis repellat quasi voluptas!</p>
        
          <p>Voluptatem quae cupiditate illo ducimus vero quis repellat quasi voluptas!</p>
        </div>
      </div>    
    </section>

    <section className='about_vision'>  
      <div className='container about_vision-container'>
        <div className='about_section-content'>
          <h1>Our Vision</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, accusamus incidunt. Pariatur sint atque, quam laudantium inventore hic voluptatum repellendus.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore beatae deleniti vitae nam asperiores. Voluptatem quae cupiditate illo ducimus vero quis repellat quasi voluptas!</p>
        </div>

        <div className="about_section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div> 
      </div> 
    </section>
    
    <section className='about_mission'>
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>  
        <div className='about_section-content'>
          <h1>Our Mission</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, accusamus incidunt. Pariatur sint atque, quam laudantium inventore hic voluptatum repellendus.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore beatae deleniti vitae nam asperiores. Voluptatem quae cupiditate illo ducimus vero quis repellat quasi voluptas!</p>
        
          <p>Voluptatem quae cupiditate illo ducimus vero quis repellat quasi voluptas!</p>
        </div>
      </div>    
    </section>
    </>
  )
}

export default About