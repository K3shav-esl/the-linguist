import React from 'react'
import "../styles/home.css"
import Navbar from '../components/Navbar'
import Profle from '../resources/profile.jpg'
import Statcard from '../components/Statcard'
import AchiCard from '../components/AchiCard'
import IconDiv from '../components/IconDiv'
function Home() {
    return (
        <div className='body'>
            <Navbar />
            <div className='sectionContainer'>
                <div className='section1'>
                    <ul className='mainMenu'>
                        <li className='mainMenuItem' id='firstItem'>Learn</li>
                        <li className='mainMenuItem'>Practice</li>
                        <li className='mainMenuItem'>Leaderboards</li>
                        <li className='mainMenuItem'>Quizzes</li>
                        <li className='mainMenuItem'>Quests</li>
                        <li className='mainMenuItem'>Progress</li>
                    </ul>
                </div>
                <div className='section2'>
                    <div className="profileSection">
                        <div className='userInfo'>
                            <p className="username">Kartik Singh</p>
                            <p className="joinDate"> <span className='bold'>Joined: </span>5th Novemeber 2022</p>
                            <p className="langLearning"><span className='bold'>Language: </span>  Deutsch</p>
                        </div>
                        <div className='userPicture'>
                            <img className='userPictureImage' src={Profle} alt="" />
                        </div>
                    </div>
                    <div className='statSection'>
                        <p className="boldHeading">Statistics</p>
                        <div className='statArea'>
                            <Statcard Icon="!" Title="Berserker" Desc="XP: 3433" />
                            <Statcard Icon="!!" Title="Stormbreaker" Desc="Acc: 100%" />
                            <Statcard Icon="!!!" Title="Timekeeper" Desc="Time: 59s" />
                            {/* <Statcard Icon="!V" Title="Dreamer" Desc="Lessons: 10" /> */}
                        </div>
                    </div>
                    <div className="achievements">
                        <p className="boldHeading">Achievements</p>
                        <div className="achiArea">
                            <AchiCard icon='🔥' title='100 Days Streak' note="6 days Remaining" pro='94%'></AchiCard>
                            <AchiCard icon='🤯' title='3 Lessons with no mistakes' note="1 Lesson Remaining" pro='66%'></AchiCard>
                            <AchiCard icon='📚' title='Attmept 5 Quizzes in one Day' note="2 Quizzes Remaining" pro='60%'></AchiCard>
                        </div>
                    </div>
                </div>
                <div className="section3">
                    <div className="iconDivCon">
                        <IconDiv icon="⚡" text=": 7678" />
                        <IconDiv icon="💖" text=": 5" />
                        <IconDiv icon="💎" text=": 290" />
                    </div>
                    <div className="infoDiv friendDiv">
                        <div className='infoDivTitle'>Friends</div>
                        <div className='friendName'><span className='friendNameIcon'>🧑 </span>Joshua</div>
                        <div className='friendName'><span className='friendNameIcon'>🧑 </span>Adren</div>
                        <div className='friendName'><span className='friendNameIcon'>👩 </span>Rihanna</div>
                        <div className="friendLastDiv friendName">
                            View 2 More <button className='viewBtn'> {'>'} </button>
                        </div>

                    </div>
                    <div className="actionDiv infoDiv">
                        <div className="infoDivTitle">Add Friends</div>
                        <div className='friendName'><span className='friendNameIcon'>🔎 </span>Find Friends</div>
                        <div className='friendName'><span className='friendNameIcon'>✉️ </span>Invite Friends</div>
                        <div className='friendName'><span className='friendNameIcon'>😶‍🌫️ </span>Add Stranger</div>

                    </div>
                    <div className="footer">
                        <div className="footerRow">
                            <span className='footerSpan'>about</span>
                            <span className='footerSpan'>blog</span>
                            <span className='footerSpan'>careers</span>
                            <span className='footerSpan'>efficacy</span>

                        </div>
                        <div className="footerRow">
                            <span className='footerSpan'>stores</span>
                            <span className='footerSpan'>investors</span>
                            <span className='footerSpan'>privacy</span>
                        </div>
                        <div className="footerRow">
                            <span className='footerSpan'>terms</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home