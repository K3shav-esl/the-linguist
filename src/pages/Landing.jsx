import React from 'react'
import "../styles/main.css"
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function Landing() {
    return (
        <div>
            <main>
                <Navbar />
                <section class="section-1">
                    <div class="section-1-div1">
                        <p class="div1p1">あ</p>
                        <p class="div1p2">Б</p>
                        <p class="div1p3">C</p>
                    </div>
                    <div class="section-1-div2">
                        <h1>Becoming the Linguist</h1>
                        <p>Learning a language is difficult no more!
                            With us, you can also become a multilingual
                            you can also become The Linguist.
                        </p>
                        <Link to='/login' style={{textDecoration:'none', color:'inherit'}}>
                            <button id="hero-button">Join Us Now</button>
                        </Link>
                    </div>
                </section>

            </main>

        </div>
    )
}

export default Landing