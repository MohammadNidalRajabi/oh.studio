import React from 'react'

const VideoCard = ({video}) => {
  return (
    <div>
      <video src={video} autoPlay loop muted style={ {width: '100%' }} />
      <div className='flex justify-start items-start p-5 gap-5'>
          <img className='rounded-[8px] w-[50px]' src="https://framerusercontent.com/images/L3XJdzWxxgFgE41HxXll9ic.jpg" alt="" />
          <div>
            <h6 className='text-black'>Neon Horizons</h6>
            <span>Welcome to the cyberscape</span>
          </div>
        </div>
    </div>
  )
}

export default VideoCard
