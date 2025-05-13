import React from 'react'

const Card = ({title, subtitle, icon, img, video}) => {
  return (
    <div className='card'>
      <div className='head'>
        <img src={icon} alt="" />
        <div className='text'>
            <h6>{title}</h6>
            <span>{subtitle}</span>
        </div>
      </div>
      {
        img?<img src={img} alt="" />:<video src={video} autoPlay loop muted style={{ width: '100%' }} />

      }
      
      
    </div>
  )
}

export default Card
