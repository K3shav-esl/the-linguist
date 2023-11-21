import React from 'react'
import "../styles/NotFound.css"
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <div id='body404'>
                <div id='container404'>
                    <div className='icon404'>あ</div>
                    <div className='info404'>
                        <div id='heading404'>Error 404</div>
                        <div id='text404'>Sorry the page you were looking for does not exist, please try going back to home and navigate from there. </div>
                        <div id='name404'>
                            <Link style={{textDecoration:"none", color:'inherit'}} to="/">
                                The Linguist
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NotFound