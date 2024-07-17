import React, { act, useEffect, useState } from 'react'
import CarouselIndicators from './CarouselIndicators'



const Carousel = ({images,interval = 5000}) => {
    const [activeIndex,setActiveIndex] = useState(0)
    const nextSlide = () => {
        setActiveIndex((prevIndex)=>
            prevIndex === images.length-1 ? 0:  prevIndex + 1
        )
    }
    const prevSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }
    // useEffect(() => {
    //     const autoPlayInterval = () => {
    //         setInterval(nextSlide,interval)
    //         return () => {
    //             clearInterval(autoPlayInterval)
    //         };
    //     }
    // },[interval])

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, interval);

        // Cleanup function to clear interval
        return () => clearInterval(intervalId);
    }, [interval, images.length]);
    
    const goToSlide = (index) => {
        setActiveIndex(index)
    }
  return (
    <div className='carousel'>Carousel
    <button className='carousel_btn carousel_btn--prev' onClick={prevSlide}>&lt;</button>
    <img src={images[activeIndex]} className='carousel_img'/>
    <button className='carousel_btn carousel_btn--next' onClick={nextSlide}>&gt;</button>
    <CarouselIndicators
    images={images}
    activeIndex={activeIndex}
    onClick={goToSlide}
    />
    </div>
  )
}

export default Carousel