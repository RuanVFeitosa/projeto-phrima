// pages/AtuacaoGlobalPage.jsx - Versão Mobile Optimizada
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { FaGlobe, FaHandshake, FaLanguage, FaUsers, FaPlane, FaMapMarkerAlt, FaBuilding, FaChevronDown, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import '../CSS/AtuacaoGlobalPage.css';

const AtuacaoGlobalPage = () => {
    const { t } = useTranslation();
    const [activeCountry, setActiveCountry] = useState('brasil');
    const [isMobile, setIsMobile] = useState(false);
    const [showCountryList, setShowCountryList] = useState(false);

    // Detectar se é mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Países com posições ajustadas para mobile
    const paises = [
        {
            id: 'brasil',
            name: t('global.map.countries.brasil.title'),
            flag: '🇧🇷',
            color: '#2E8B57',
            position: { top: '55%', left: '38%' },
            mobilePosition: { top: '60%', left: '40%' },
            description: t('global.map.countries.brasil.description'),
            
        },
        {
            id: 'portugal',
            name: t('global.map.countries.portugal.title'),
            flag: '🇵🇹',
            color: '#000766ff',
            position: { top: '28%', left: '48%' },
            mobilePosition: { top: '25%', left: '48%' },
            description: t('global.map.countries.portugal.description'),
           
        },
        {
            id: 'eua',
            name: t('global.map.countries.eua.title'),
            flag: '🇺🇸',
            color: '#3C3B6E',
            position: { top: '30%', left: '26%' },
            mobilePosition: { top: '35%', left: '20%' },
            description: t('global.map.countries.eua.description'),
           
        },
        {
            id: 'china',
            name: t('global.map.countries.china.title'),
            flag: '🇨🇳',
            color: '#DE2910',
            position: { top: '30%', left: '75%' },
            mobilePosition: { top: '35%', left: '75%' },
            description: t('global.map.countries.china.description'),
           
        }
    ];

    const servicos = [
        {
            icon: <FaHandshake />,
            title: t('global.services.cards.0.title'),
            description: t('global.services.cards.0.description'),
            color: '#2c5aa0'
        },
        {
            icon: <FaLanguage />,
            title: t('global.services.cards.1.title'),
            description: t('global.services.cards.1.description'),
            color: '#d35400'
        },
        {
            icon: <FaUsers />,
            title: t('global.services.cards.2.title'),
            description: t('global.services.cards.2.description'),
            color: '#27ae60'
        }
    ];

    const estatisticas = [
        { 
            valor: t('global.stats.continents.value'), 
            label: t('global.stats.continents.label'), 
            desc: t('global.stats.continents.description'),
            icon: ''
        },
        { 
            valor: t('global.stats.countries.value'), 
            label: t('global.stats.countries.label'), 
            desc: t('global.stats.countries.description'),
            icon: ''
        },
        { 
            valor: t('global.stats.support.value'), 
            label: t('global.stats.support.label'), 
            desc: t('global.stats.support.description'),
            icon: ''
        },
        { 
            valor: t('global.stats.clients.value'), 
            label: t('global.stats.clients.label'), 
            desc: t('global.stats.clients.description'),
            icon: ''
        }
    ];

    // Componente de Mapa para Desktop
    const DesktopMap = () => (
        <div className="mapa-wrapper">
            <div className="mapa-imagem-container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
                    alt="Mapa Mundi"
                    className="mapa-imagem"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e6f2ff'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='24' text-anchor='middle' fill='%232c5aa0'%3EMapa Mundi%3C/text%3E%3C/svg%3E";
                    }}
                />

                {paises.map((pais) => (
                    <button
                        key={pais.id}
                        className={`pais-marker ${activeCountry === pais.id ? 'active' : ''}`}
                        style={{
                            top: pais.position.top,
                            left: pais.position.left,
                            '--marker-color': pais.color
                        }}
                        onClick={() => setActiveCountry(pais.id)}
                        aria-label={`Ver informações sobre ${pais.name}`}
                    >
                        <div className="marker-dot"></div>
                        <div className="marker-pulse"></div>
                        <div className="marker-label">
                            <span className="marker-flag">{pais.flag}</span>
                            <span className="marker-name">{pais.name}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );

    // Componente de Mapa para Mobile
    const MobileMap = () => (
        <div className="mobile-map-container">
            {/* Alternativa 1: Mapa simplificado com lista */}
            <div className="mobile-map-simplified">
                <div className="world-icon">
                    <FaGlobe size={60} color="#2c5aa0" />
                </div>
                
                <div className="mobile-countries-list">
                    <button 
                        className="mobile-country-selector"
                        onClick={() => setShowCountryList(!showCountryList)}
                    >
                        <span className="selected-country">
                            <span className="country-flag">
                                {paises.find(p => p.id === activeCountry)?.flag}
                            </span>
                            <span className="country-name">
                                {paises.find(p => p.id === activeCountry)?.name}
                            </span>
                        </span>
                        <FaChevronDown className={`chevron ${showCountryList ? 'open' : ''}`} />
                    </button>
                    
                    {showCountryList && (
                        <div className="countries-dropdown">
                            {paises.map((pais) => (
                                <button
                                    key={pais.id}
                                    className={`mobile-country-option ${activeCountry === pais.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveCountry(pais.id);
                                        setShowCountryList(false);
                                    }}
                                >
                                    <span className="option-flag">{pais.flag}</span>
                                    <span className="option-name">{pais.name}</span>
                                    <span className="option-icon">{pais.icon}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mapa visual simplificado para mobile */}
                <div className="mobile-map-visual">
                    {paises.map((pais) => (
                        <div
                            key={pais.id}
                            className={`mobile-map-point ${activeCountry === pais.id ? 'active' : ''}`}
                            style={{
                                top: pais.mobilePosition.top,
                                left: pais.mobilePosition.left,
                                backgroundColor: pais.color
                            }}
                            onClick={() => setActiveCountry(pais.id)}
                        >
                            <span className="point-flag">{pais.flag}</span>
                            {activeCountry === pais.id && (
                                <div className="point-tooltip">
                                    {pais.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="atuacao-global-page">
            {/* Hero Section */}
            <section className="global-hero">
                <div className="hero-content">
                    
                </div>
            </section>

            {/* Mapa e Cards */}
            <section className="global-mapa-section">
                <div className="container">
                    <div className="mapa-container">
                        <h2 className="mapa-title">
                            <FaMapMarkerAlt />
                            <span>{t('global.map.title')}</span>
                            {isMobile && (
                                <span className="mobile-indicator">
                                    <FaMobileAlt /> Mobile
                                </span>
                            )}
                        </h2>

                        <div className="mapa-completo">
                            {isMobile ? <MobileMap /> : <DesktopMap />}

                           
                        </div>
                    </div>

                    {/* Estatísticas */}
                    <div className="estatisticas-container">
                        <h3 className="estatisticas-title">
                            <FaGlobe />
                            <span>Nossa Presença em Números</span>
                        </h3>
                        <div className="estatisticas-grid">
                            {estatisticas.map((estat, index) => (
                                <div key={index} className="estatistica-card">
                                    <div className="estatistica-icon">{estat.icon}</div>
                                    <div className="estatistica-valor">{estat.valor}</div>
                                    <div className="estatistica-label">{estat.label}</div>
                                    <div className="estatistica-desc">{estat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cards de Serviços */}
                    <h2 className="servicos-title">
                        <FaGlobe />
                        <span>{t('global.services.title')}</span>
                    </h2>
                    <div className="servicos-cards">
                        {servicos.map((servico, index) => (
                            <div key={index} className="servico-card">
                                <div className="card-icon" style={{ backgroundColor: servico.color }}>
                                    {servico.icon}
                                </div>
                                <h3 className="card-title">{servico.title}</h3>
                                <p className="card-description">{servico.description}</p>
                                <div className="card-arrow">
                                    <span>→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="global-cta">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <h2 className="cta-title">{t('global.cta.title')}</h2>
                            <p className="cta-subtitle">
                                {t('global.cta.subtitle')}
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <button className="cta-button primary">
                                <FaPlane />
                                <span>{t('global.cta.buttons.international')}</span>
                            </button>
                            <button className="cta-button secondary">
                                <FaBuilding />
                                <span>{t('global.cta.buttons.brazil')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AtuacaoGlobalPage;