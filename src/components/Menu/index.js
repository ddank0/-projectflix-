import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css'
import Buttton from '../Button'


function Menu() {
    return (
        <nav className="Menu">
            <a>
             <img className="Logo" src={Logo} alt="projectflix logo"/>
            </a>
            <Buttton as='a' className="ButtonLink" href="/">
                Novo vídeo
            </Buttton>
        </nav>


    );
}

export default Menu; 