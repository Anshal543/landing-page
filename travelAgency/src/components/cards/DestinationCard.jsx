import React from 'react'

const DestinationCard = ({imageUrl,highlighted}) => {
  return (
    <div className='relative'>
        <div>
            <img src={imageUrl} alt="" />
        </div>
        {highlighted && (
        <div className="absolute bottom-[10rem] right-[1rem] -z-10 hidden md:block">
          <img src="/images/stylish-ring.png" alt="curly ring" />
        </div>
      )}
    </div>
  )
}

export default DestinationCard