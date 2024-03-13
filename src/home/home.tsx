
import './home.css';
import React, { useState } from 'react';
// import face from '../publicImages/face.png'


/**
 * This is the highest level component!
 * https://drive.google.com/file/d/1nKdYawoPQJTvu_DjRbzmn-9AGfRoDy_B/view?usp=sharing
 * 
 */
const Home: React.FC = () => {

    return (
        <div className='whole'>
            <div className='me'>
                <img
                    // src='https://i.postimg.cc/nrYNJ1Nk/face.png'
                    src='https://i.postimg.cc/vBNSdZY0/trial4.png'
                    className='myImage'
                    alt='an image of me from my linkedin'>
                </img>
                {/* <div className='socials'> */}
                    <a href="https://github.com/acodjoe25" className="git">GitHub</a>
                    <a className='link' href="https://www.linkedin.com/in/ariana-codjoe-771603230/">Linkedin</a>
                {/* </div> */}
            </div>
            <div className='bioText'>
                <p>
                    As a junior at Brown University majoring in Computer Science and Applied Mathematics, I'm deeply intrigued by the analytical nature of mathematics and the creative expression found in theater. I see parallels between structured problem-solving in mathematics and individual interpretation in theater, which led me to pursue computer science. I'm fascinated by the blend of structure and creativity in software engineering, likening it to crafting characters in a play.
        Moreover, I'm drawn to exploring storytelling through computer science, particularly in mediums like virtual reality. I'm also passionate about the ethical considerations in computer science and actively involved in diversity-related efforts within the field. I relish the collaborative aspect of software engineering, particularly in daily standup sessions where teamwork and knowledge sharing thrive. Witnessing my contributions seamlessly integrate into larger projects is deeply fulfilling, reminiscent of my experiences in high school crew.
        Overall, I find software engineering's dynamic nature, collective accomplishments, and opportunities for personal growth and creativity a perfect fit for my diverse interests and strengths. Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                </p>
            </div>
        </div>
    );
  }
  
  export default Home;





