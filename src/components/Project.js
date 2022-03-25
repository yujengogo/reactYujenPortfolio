import React from 'react';

function Project(props) {
    return (
        <div class="previous-work-content">
        <a class= "projectTitle" href= {props.work.link}>
           {props.work.title}
        </a>
            <img class="PWImg" src={props.work.image}/>
    </div>
    );
}

export default Project;