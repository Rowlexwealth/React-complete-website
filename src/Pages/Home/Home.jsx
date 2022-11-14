import React from 'react'
import FAQs from '../../Components/FAQs'
import MainHeaders from '../../Components/MainHeaders'
import Programs from '../../Components/Programs'
import Testimonials from '../../Components/Testimonials'
import Values from '../../Components/Values'
import './home.css'

const Home = () => {
  return (
    <div>
      <h2>
        <MainHeaders/>
        <Programs/>
        <Values/>
        <FAQs/>
        <Testimonials/>
      </h2>
    </div>
  )
}

export default Home