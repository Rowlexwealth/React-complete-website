import React from 'react'
import './Contact.css'

import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header_bg_2.jpg'
// import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}>
    Quae voluptatem sapiente deleniti expedita nostrum? Alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    </Header>
    <section className='contact'>
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:rowlandugiangbe@gmail.com" target='_blank' rel='noreferrer noopener'>
            <MdEmail/>
          </a>
          <a href="https://m.me/rowlandgentle" target='_blank' rel='noreferrer noopener'>
            <BsMessenger/>
          </a>
          <a href="https://wa.me/+2348109942450" target='_blank' rel='noreferrer noopener'>
            <IoLogoWhatsapp/>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact