import React from 'react'

function IconDiv(props) {
    return (
        <div className='iconDiv'>
            <div className='iconDivIcon'>{props.icon}</div>
            <div className='iconDivText'>{props.text}</div>
        </div>
    )
}

export default IconDiv