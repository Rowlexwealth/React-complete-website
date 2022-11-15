import React from 'react'
import './gallary.css'

import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header_bg_3.jpg'
// import HeaderImage from '../../images/header_bg_3.jpg'


const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i=1; i<= galleryLength; i++) {
    images.push(`./src/assets/images/gallery${i}.jpg`)
    // images.push(`../../images/gallery${i}.jpg`)
  }

  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
      Quaerat repellendus hic consectetur, ipsam ad quo necessitatibus, accusantium molestias, tempore corporis ratione.
      </Header>

      <section className='gallery'>
        <div className='container gallery_container'>
          {images.map((images, index)=>{
            return ( <article key={index}>
              <img src={images} alt={`Gallery Image ${index + 1}`} />
            </article>
            )
          })}
        </div>
      </section>
      
    </>
  )
}

export default Gallery