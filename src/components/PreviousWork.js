import React from 'react';
import RedesignB from '../image/redesignB.png';
import Password from '../image/Password.png';
import DaySchedule from '../image/dayschedule.png';
import CarEz from '../image/screenshot1.png';
import Project from './Project';

function PreviousWork(props) {
    const projectArray = [
        {
            title: 'Redesigned Broccoli',
            link: 'https://yujengogo.github.io/redesigned-broccoli/',
            image: RedesignB,
        },
        {
            title: 'Password That No One Remembers',
            link: 'https://yujengogo.github.io/PasswordThatNoOneRemembers/',
            image: Password,
        },
        {
            title: 'Day Planner',
            link: 'https://yujengogo.github.io/dPlanner/',
            image: DaySchedule,
        },
        {
            title: 'CarEz',
            link: 'https://whispering-wave-49734.herokuapp.com',
            image: CarEz,
        },
    ]
    return (
        <div class="previous-work">
            <div class="aside">
                <h2>Previous Work</h2>
            </div>
            <div class= "previous-project">
            {
                projectArray.map((project) => {
                    return <Project work={project} />
                })
            }
</div>
        </div>
    );
}

export default PreviousWork;