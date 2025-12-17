// pages/ServicosPage.jsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { FaUsers, FaShieldAlt, FaBalanceScale, FaChartLine, FaHeartbeat, FaRobot, FaHandshake, FaFileContract, FaClipboardCheck, FaHeadset } from 'react-icons/fa';
import '../CSS/ServicosPage.css';

const ServicosPage = () => {
  const { t } = useTranslation();

  const servicos = [
    {
      id: 1,
      icon: <FaRobot className="servico-icon" />,
      title: t('services.services.recruitment.title'),
      tag: t('services.services.recruitment.tag'),
      description: t('services.services.recruitment.description'),
      features: t('services.services.recruitment.features', []),
      cta: t('services.benefits.cta.speakExpert'),
      ctaIcon: <FaHeadset />,
      color: '#2c5aa0'
    },
    {
      id: 2,
      icon: <FaShieldAlt className="servico-icon" />,
      title: t('services.services.outsourcing.title'),
      tag: t('services.services.outsourcing.tag'),
      description: t('services.services.outsourcing.description'),
      features: t('services.services.outsourcing.features', []),
      cta: t('services.benefits.cta.requestProposal'),
      ctaIcon: <FaFileContract />,
      color: '#d35400'
    },
    {
      id: 3,
      icon: <FaBalanceScale className="servico-icon" />,
      title: t('services.services.labor.title'),
      tag: t('services.services.labor.tag'),
      description: t('services.services.labor.description'),
      features: t('services.services.labor.features', []),
      cta: t('services.benefits.cta.speakExpert'),
      ctaIcon: <FaHeadset />,
      color: '#27ae60'
    },
    {
      id: 4,
      icon: <FaChartLine className="servico-icon" />,
      title: t('services.services.compliance.title'),
      tag: t('services.services.compliance.tag'),
      description: t('services.services.compliance.description'),
      features: t('services.services.compliance.features', []),
      cta: t('services.benefits.cta.requestProposal'),
      ctaIcon: <FaFileContract />,
      color: '#8e44ad'
    },
    {
      id: 5,
      icon: <FaHeartbeat className="servico-icon" />,
      title: t('services.services.wellness.title'),
      tag: t('services.services.wellness.tag'),
      description: t('services.services.wellness.description'),
      features: t('services.services.wellness.features', []),
      cta: t('services.benefits.cta.speakExpert'),
      ctaIcon: <FaHeadset />,
      color: '#e74c3c'
    }
  ];

  return (
    <div className="servicos-page">
      {/* Hero Section */}
      <section className="servicos-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FaShieldAlt />
            <span>{t('services.hero.badge')}</span>
          </div>
          <h1 
            className="hero-title" 
            dangerouslySetInnerHTML={{ 
              __html: t('services.hero.title') 
            }}
          />
          <p className="hero-subtitle">
            {t('services.hero.subtitle')}
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">{t('services.stats.compliance')}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">360º</span>
            <span className="stat-label">{t('services.stats.coverage')}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">{t('services.stats.monitoring')}</span>
          </div>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="servicos-grid-section">
        <div className="servicos-grid">
          {servicos.map((servico) => (
            <div 
              key={servico.id} 
              className="servico-card"
            >
              <div className="card-header">
                <div className="card-icon" style={{ backgroundColor: servico.color }}>
                  {servico.icon}
                </div>
                <div className="card-tag" style={{ backgroundColor: servico.color }}>
                  {servico.tag}
                </div>
              </div>
              
              <div className="card-body">
                <h3 className="card-title">{servico.title}</h3>
                <p className="card-description">{servico.description}</p>
                
                <div className="card-features">
                  <h4 className="features-title">{t('services.benefits.title')}:</h4>
                  <ul className="features-list">
                    {Array.isArray(servico.features) && servico.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <FaClipboardCheck className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card-footer">
                <button 
                  className="cta-button"
                  style={{ backgroundColor: servico.color }}
                >
                  {servico.ctaIcon}
                  <span>{servico.cta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="diferenciais-section">
        <div className="diferenciais-container">
          <div className="diferenciais-header">
            <h2 
              className="diferenciais-title" 
              dangerouslySetInnerHTML={{ 
                __html: t('services.differentiators.title') 
              }}
            />
            <p className="diferenciais-subtitle">
              {t('services.differentiators.subtitle')}
            </p>
          </div>
          
          <div className="diferenciais-grid">
            {t('services.differentiators.items', []).map((diferencial, index) => (
              <div key={index} className="diferencial-card">
                <div className="diferencial-icon">
                  <FaHandshake />
                </div>
                <h3>{diferencial.title}</h3>
                <p>{diferencial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="servicos-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">{t('services.cta.title')}</h2>
            <p className="cta-text">
              {t('services.cta.text')}
            </p>
            <div className="cta-buttons">
              <button className="cta-button-primary">
                <FaHeadset />
                <span>{t('services.cta.buttons.speakExpert')}</span>
              </button>
              <button className="cta-button-secondary">
                <FaFileContract />
                <span>{t('services.cta.buttons.requestProposal')}</span>
              </button>
            </div>
          </div>
          <div className="cta-decoration">
            <FaShieldAlt className="cta-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosPage;