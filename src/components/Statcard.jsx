import React from 'react'

function Statcard(props) {
  return (
    <div className='statCard'>
        <div className='iconName bold'>{props.Icon}</div>
        <div className='statContent'>
            <p className='statTitle'>{props.Title}</p>
            <p className='statDesc'>{props.Desc}</p>
        </div>
    </div>
  )
}

export default Statcard