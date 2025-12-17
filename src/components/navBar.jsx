// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import '../components/CSS/navBar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const { language, changeLanguage, t, isLoading } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Fechar menu ao mudar de rota
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Efeito de scroll para header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = [
        { code: 'pt', label: 'PT-BR' },
        { code: 'en', label: 'EN-US' },
        { code: 'es', label: 'ES' }
    ];

    const menu = [
        { key: 'about', path: '/sobre-nos', icon: 'fas fa-building' },
        { key: 'services', path: '/servicos', icon: 'fas fa-briefcase' },
        { key: 'global', path: '/atuacao-global', icon: 'fas fa-globe' },
        { key: 'contact', path: '/fale-conosco', icon: 'fas fa-envelope' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
                    <img src={logo} alt="Logo PRHIMA" className="logoHeader" />
                </Link>

                {/* Menu Desktop */}
                <nav className="nav-desktop">
                    {menu.map(item => (
                        <Link
                            key={item.key}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            <i className={item.icon}></i>
                            <span>{t(`common.nav.${item.key}`)}</span>
                        </Link>
                    ))}
                </nav>

                {/* Seletor de Idioma Desktop */}
                <div className="languages-desktop">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            className={`language-btn ${language === lang.code ? 'active' : ''}`}
                            onClick={() => changeLanguage(lang.code)}
                            disabled={isLoading}
                            aria-label={`Mudar para ${lang.label}`}
                        >
                            {lang.label}
                            {isLoading && language === lang.code && '...'}
                        </button>
                    ))}
                </div>

                {/* Botão Menu Hamburguer */}
                <button 
                    className="menu-toggle" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </span>
                </button>

                {/* Overlay do Menu Mobile */}
                <div 
                    className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Mobile */}
                <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header">
                        <Link to="/" className="mobile-logo-link" onClick={() => setIsMenuOpen(false)}>
                            <img src={logo} alt="Logo" className="mobile-logo" />
                        </Link>
                        <button 
                            className="menu-close"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Fechar menu"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="mobile-menu-content">
                        {menu.map(item => (
                            <Link
                                key={item.key}
                                to={item.path}
                                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <i className={item.icon}></i>
                                <span>{t(`common.nav.${item.key}`)}</span>
                                <i className="fas fa-chevron-right"></i>
                            </Link>
                        ))}

                        <div className="mobile-languages">
                            <div className="languages-title">Idioma</div>
                            <div className="languages-buttons">
                                {languages.map(lang => (
                                    <button
                                        key={lang.code}
                                        className={`mobile-language-btn ${language === lang.code ? 'active' : ''}`}
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                            setIsMenuOpen(false);
                                        }}
                                        disabled={isLoading}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mobile-current-language">
                            <i className="fas fa-language"></i>
                            <span>Idioma atual: {language.toUpperCase()}</span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;