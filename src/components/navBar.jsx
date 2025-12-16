// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/CSS/navBar.css';

import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    const menu = [
        { label: 'Sobre Nós', path: '/sobre-nos', className: 'about' },
        { label: 'Serviços', path: '/servicos', className: 'services' },
        { label: 'Atuação Global', path: '/atuacao-global', className: 'AGlobal' },
        { label: 'Cases', path: '/cases', className: 'cases' },
        { label: 'Fale Conosco', path: '/fale-conosco', className: 'contact' },
    ];

    const languages = ['PT-BR', 'EN-US', 'ES'];

    return (
        <div className="header">
            <Link to="/" className="logo-link">
                <img
                    src={logo}
                    alt="Logo"
                    className="logoHeader"
                />
            </Link>
            <nav className='headerLine'>
                {menu.map(item => (
                    <Link
                        key={item.label}
                        to={item.path}
                        className={`${item.className} ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="languages">
                {languages.map(lang => (
                    <a
                        key={lang}
                        href="#"
                        className={lang === 'PT-BR' ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            // Adicione aqui a lógica para trocar idioma
                            console.log('Mudar para idioma:', lang);
                        }}
                    >
                        {lang}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;