import React from 'react';

function Navigation(props) {
    return (
        
          <div class="navbar">
            <a class="nav-item" href="#" onClick={()=>{props.setCurrentPage("About")}}>About Me</a>
            <a class="nav-item" href="#" onClick={()=>{props.setCurrentPage("Work")}}>Previous Work</a>
            <a class="nav-item" href="#" onClick={()=>{props.setCurrentPage("Contact")}}>Contact</a>
        </div>  
       
    );
}

export default Navigation;