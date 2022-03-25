import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (
        <div class="header">
            <div>
                <h1 id="my-name">Yujengogo</h1>
            </div>
            <Navigation setCurrentPage={props.setCurrentPage}/>

        </div>
    );
}

export default Header;