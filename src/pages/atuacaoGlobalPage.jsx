// pages/AtuacaoGlobalPage.jsx
import React, { useState } from 'react';
import { FaGlobe, FaHandshake, FaLanguage, FaUsers, FaPlane, FaMapMarkerAlt, FaBuilding, FaFlag } from 'react-icons/fa';
import '../CSS/AtuacaoGlobalPage.css';


const mapaMundiUrl = "https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg";

const AtuacaoGlobalPage = () => {
    const [activeCountry, setActiveCountry] = useState('brasil');

    const paises = [
        {
            id: 'brasil',
            name: 'Brasil',
            flag: '🇧🇷',
            color: '#2E8B57',
            position: { top: '80%', left: '38%' },
        },
        {
            id: 'portugal',
            name: 'Portugal',
            flag: '🇵🇹',
            color: '#000766ff',
            position: { top: '40%', left: '50%' },
        },
        {
            id: 'eua',
            name: 'Estados Unidos',
            flag: '🇺🇸',
            color: '#3C3B6E',
            position: { top: '42%', left: '24%' },
        },
        {
            id: 'china',
            name: 'China',
            flag: '🇨🇳',
            color: '#DE2910',
            position: { top: '40%', left: '80%' },
        }
    ];

    const servicos = [
        {
            icon: <FaHandshake />,
            title: 'Parcerias Internacionais',
            description: 'Nossa rede de parceiros globais garante conformidade com as leis locais e acesso aos melhores talentos em cada mercado.',
            color: '#2c5aa0'
        },
        {
            icon: <FaLanguage />,
            title: 'Atendimento Multilíngue',
            description: 'Nossa equipe está preparada para atender sua empresa em Português, Inglês e Espanhol, quebrando barreiras de comunicação.',
            color: '#d35400'
        },
        {
            icon: <FaUsers />,
            title: 'Modelos de Terceirização Global',
            description: 'Oferecemos soluções de terceirização para empresas globais operando no Brasil e para empresas brasileiras expandindo para o exterior.',
            color: '#27ae60'
        }
    ];

    const estatisticas = [
        { valor: '4', label: 'Continentes', desc: 'Américas, Europa, Ásia' },
        { valor: '12+', label: 'Países', desc: 'Rede de parceiros globais' },
        { valor: '24/7', label: 'Suporte', desc: 'Atendimento em múltiplos fusos' },
        { valor: '50+', label: 'Clientes', desc: 'Empresas internacionais' }
    ];

    return (
        <div className="atuacao-global-page">
            {/* Hero Section */}
            <section className="global-hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <FaGlobe />
                        <span>PRESENÇA GLOBAL</span>
                    </div>
                    <h1 className="hero-title">
                        Nossa <span className="highlight">Atuação Global</span>
                    </h1>
                    <p className="hero-subtitle">
                        Com bases estratégicas nas Américas, Europa e Ásia, oferecemos um ecossistema
                        verdadeiramente global para a gestão de talentos e operações.
                    </p>
                </div>
            </section>

            {/* Mapa e Cards */}
            <section className="global-mapa-section">
                <div className="container">
                    <div className="mapa-container">
                        <h2 className="mapa-title">
                            <FaMapMarkerAlt />
                            <span>Nossa Presença Global</span>
                        </h2>

                        <div className="mapa-completo">
                            {/* Container do mapa com pontos */}
                            <div className="mapa-wrapper">
                                <div className="mapa-imagem-container">
                                    <img
                                        src={mapaMundiUrl}
                                        alt="Mapa Mundi"
                                        className="mapa-imagem"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e6f2ff'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='24' text-anchor='middle' fill='%232c5aa0'%3EMapa Mundi%3C/text%3E%3C/svg%3E";
                                        }}
                                    />

                                    {/* Pontos de marcação */}
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

                                {/* Info do país ativo */}

                            </div>
                        </div>
                    </div>

                    {/* Cards de Serviços */}
                    <h2 className="servicos-title">
                        <FaGlobe />
                        <span>Soluções Globais</span>
                    </h2>
                    <div className="servicos-cards">

                        {servicos.map((servico, index) => (
                            <div
                                key={index}
                                className="servico-card"              >
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
                            <h2 className="cta-title">Pronto para Expandir Globalmente?</h2>
                            <p className="cta-subtitle">
                                Conte com nossa expertise para levar sua empresa para o mundo com segurança
                                e conformidade.
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <button className="cta-button primary">
                                <FaPlane />
                                <span>Expansão Internacional</span>
                            </button>
                            <button className="cta-button secondary">
                                <FaBuilding />
                                <span>Operações no Brasil</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="footerAG">
                <Footer />
            </div> */}
        </div>
    );
};

export default AtuacaoGlobalPage;