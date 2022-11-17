import React from 'react'
import './gallary.css'
import Image from "../../assets/images/gallery1.jpg"
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header_bg_3.jpg'
// import HeaderImage from '../../images/header_bg_3.jpg'
import { galleryImages } from '../../Components/data'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i=1; i<= galleryLength; i++) {
    images.push(`./src/assets/images/gallery${i}.jpg`)
    // images.push(`../../images/gallery${i}.jpg`)
  }
console.log(images, "imges")
  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
      Quaerat repellendus hic consectetur, ipsam ad quo necessitatibus, accusantium molestias, tempore corporis ratione.
      </Header>

      <section className='gallery'>
        <div className='container gallery_container'>
          {galleryImages.map((image, index)=>{
            return ( <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
            )
          })}
        </div>
      </section>
      
    </>
  )
}

export default Gallery