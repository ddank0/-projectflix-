import React from 'react';
import { Link } from  'react-router-dom'
import Logo from '../../assets/img/logo.png';
import './menu.css'
import Buttton from '../Button'


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/" >
             <img className="Logo" src={Logo} alt="projectflix logo"/>
            </Link>
            <Buttton as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Buttton>
        </nav>


    );
}

export default Menu; 