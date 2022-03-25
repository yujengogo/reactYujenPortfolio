import React from 'react';
import SelfPhoto from '../image/selfPhoto.jpg'
function AboutMe(props) {
    return (
        <div class="about-me">
            <div class="aside">
                <h2>About Me</h2>
            </div>
            <div class="about-me-content">
                <img src={SelfPhoto}
                    alt="" id="about-me-img"/>
                <p>Yujen Chen is a manager of store development with experience managing national retail operation and
                    construction field. His background in construction management, bid leveling, and negotiation skills
                    inform his mindful but pompetitive approach.</p>
            </div>
        </div>
    );
}

export default AboutMe;