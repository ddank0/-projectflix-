import React from 'react';

function ButttonLink(props) {
    return (
        <nav>
            <a href={props.href} className={props.className} >
                {props.children}
            </a>
        </nav> 
    );
}

export default ButttonLink;