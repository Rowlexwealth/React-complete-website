import React from 'react'
import './trainers.css'

import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../Components/data'
import {BsInstagram} from 'react-icons/bs'
import Trainer from '../../Components/Trainer'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const Trainers = () => {
  return (
    <>
    <Header title='Our Trainers' image={HeaderImage}>
    Modi, commodi tempora consectetur beatae nulla fugit numquam repudiandae nihil, tenetur, magni reiciendis totam animi sunt quidem itaque expedita illum tempore obcaecati neque! Quis libero cum aliquid culpa,
    </Header>
    
    <section className='trainers'>
      <div className='container trainers_container'>
        {trainers.map(({id, image, name, job, socials}) => {
          return <Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon: <BsInstagram/>, link: socials[0]},
              {icon: <AiOutlineTwitter/>, link: socials[1]},
              {icon: <FaFacebookF/>, link: socials[2]},
              {icon: <FaLinkedin/>, link: socials[3]}
            ]
          }/>
        })}
      </div>
    </section>
    </>
  )
}

export default Trainers