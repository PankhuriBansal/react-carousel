import React from 'react'

const CarouselIndicators = ({images,activeIndex,onClick}) => {
  return (
    <div className='carousel_indicators'>
        {
            images.map((_,index) => (
                <span key={index} 
                className={`carousel_indicator ${
                    index === activeIndex ? 'active' : ''
                }`}
                onClick={() => onClick(index)}
                />
            ))
        }
    </div>
  )
}

export default CarouselIndicators