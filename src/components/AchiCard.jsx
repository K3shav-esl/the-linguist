import React from 'react'

function
    AchiCard(props) {
    return (
        <div className='achiCard'>
            <div className='achiIcon'>{props.icon}</div>
            <div className='achiContent'>
                <div className='achiTitle'>{props.title}</div>
                <div className='achiProg'><span className='bold'>Progress: </span>{props.pro} Completed </div>
                <div className="achiNote">{props.note}</div>
            </div>
        </div>
    )
}

export default AchiCard
