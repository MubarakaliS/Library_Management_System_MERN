import React from 'react'
import photo from '../../Assets/pexels-photo-9455601 (1).jpeg'
import './Content2.css'
import imageOne from '../../Assets/imageOne.jpg'
import ImageTwo from '../../Assets/ImageTwo.jpg'
import ImageThree from '../../Assets/ImageThree.jpg'
import ImageFour from '../../Assets/ImageFour.jpg'
import ImageFive from '../../Assets/ImageFIve.jpg'
import ImageSix from '../../Assets/ImageSix.jpg'
const Content2 = () => {
  return (
    <>
    <div className='container m-5 img-container'>
        <img className='image-one' src={imageOne} alt='Book Image'/>
        <img className='image-two' src={ImageTwo} alt='Book Image'/>
        <img className='image-six' src={ImageSix} alt='Book Image'/>
        <img className='image-three' src={ImageThree} alt='Book Image'/>
        <img className='image-four' src={ImageFour} alt='Book Image'/>
        <img className='image-five' src={ImageFive} alt='Book Image'/>
        
      
        </div>
    </>
  )
}

export default Content2