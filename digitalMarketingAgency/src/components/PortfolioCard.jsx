import React from 'react'

const PortfolioCard = ({img}) => {
  return (
    <div className=''>
        <img className='w-[400px] object-contain rounded-3xl' src={img} alt="" />
    </div>
  )
}

export default PortfolioCard