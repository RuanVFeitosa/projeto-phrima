// pages/ServicosPage.jsx
import React from 'react';
import { FaUsers, FaShieldAlt, FaBalanceScale, FaChartLine, FaHeartbeat, FaRobot, FaHandshake, FaFileContract, FaClipboardCheck, FaHeadset } from 'react-icons/fa';
import '../CSS/ServicosPage.css';

const ServicosPage = () => {
  const servicos = [
    {
      id: 1,
      icon: <FaRobot className="servico-icon" />,
      title: 'Recrutamento Inteligente',
      tag: 'INOVAÇÃO',
      description: 'Utilizamos IA e análise de fit cultural para encontrar os talentos certos, reduzindo o tempo de contratação e o turnover.',
      features: [
        'Garantimos o SLA de contratação para posições estratégicas',
        'Análise preditiva de desempenho',
        'Matching inteligente com cultura organizacional'
      ],
      cta: 'Falar com especialista',
      ctaIcon: <FaHeadset />,
      color: '#2c5aa0'
    },
    {
      id: 2,
      icon: <FaShieldAlt className="servico-icon" />,
      title: 'Terceirização Blindada',
      tag: 'PROTEÇÃO TOTAL',
      description: 'Oferecemos modelos operacionais flexíveis com compliance ativo, assegurando escalabilidade segura para operações nacionais e internacionais.',
      features: [
        'Seguro de Responsabilidade Civil',
        'Seguro Garantia Contratual',
        'Proteção contra multas e penalidades',
        'Continuidade operacional garantida'
      ],
      cta: 'Solicitar proposta',
      ctaIcon: <FaFileContract />,
      color: '#d35400'
    },
    {
      id: 3,
      icon: <FaBalanceScale className="servico-icon" />,
      title: 'Relações Trabalhistas Estratégicas',
      tag: 'PREVENÇÃO',
      description: 'Atuamos com mediação preventiva e auditorias de processos para reduzir litígios e passivos, transformando as relações de trabalho em um ativo estratégico.',
      features: [
        'Mediação preventiva de conflitos',
        'Auditorias de processos trabalhistas',
        'Redução de passivos trabalhistas',
        'Transformação de RH em vantagem competitiva'
      ],
      cta: 'Falar com especialista',
      ctaIcon: <FaHeadset />,
      color: '#27ae60'
    },
    {
      id: 4,
      icon: <FaChartLine className="servico-icon" />,
      title: 'Compliance Trabalhista',
      tag: 'CONFORMIDADE',
      description: 'Oferecemos monitoramento contínuo, dashboards com indicadores de risco e consultoria para manter sua empresa 100% em conformidade com a legislação.',
      features: [
        'Monitoramento contínuo 24/7',
        'Dashboards com indicadores de risco',
        'Consultoria especializada em legislação',
        'Auditorias de conformidade regulares'
      ],
      cta: 'Solicitar proposta',
      ctaIcon: <FaFileContract />,
      color: '#8e44ad'
    },
    {
      id: 5,
      icon: <FaHeartbeat className="servico-icon" />,
      title: 'Clima Organizacional e Saúde Mental',
      tag: 'BEM-ESTAR',
      description: 'Desenvolvemos programas de engajamento, bem-estar e saúde corporativa integrada para aumentar a produtividade e reter seus melhores talentos.',
      features: [
        'Programas de engajamento personalizados',
        'Saúde mental corporativa',
        'Pesquisas de clima organizacional',
        'Estratégias de retenção de talentos'
      ],
      cta: 'Falar com especialista',
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
            <span>SOLUÇÕES INTEGRADAS</span>
          </div>
          <h1 className="hero-title">
            Serviços <span className="highlight">PRHIMA 360º</span>
          </h1>
          <p className="hero-subtitle">
            Nossas soluções são desenhadas para criar uma verdadeira blindagem corporativa, 
            integrando pessoas, processos e tecnologia em um modelo estratégico de atuação global.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Conformidade</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">360º</span>
            <span className="stat-label">Cobertura</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Monitoramento</span>
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
                  <h4 className="features-title">Benefícios:</h4>
                  <ul className="features-list">
                    {servico.features.map((feature, index) => (
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
            <h2 className="diferenciais-title">
              Por que escolher a <span className="highlight">PRHIMA 360º</span>?
            </h2>
            <p className="diferenciais-subtitle">
              Nossa abordagem integrada garante uma blindagem corporativa completa
            </p>
          </div>
          
          <div className="diferenciais-grid">
            <div className="diferencial-card">
              <div className="diferencial-icon">
                <FaHandshake />
              </div>
              <h3>Parceria Estratégica</h3>
              <p>Não somos apenas fornecedores, somos parceiros no crescimento do seu negócio</p>
            </div>
            
            <div className="diferencial-card">
              <div className="diferencial-icon">
                <FaShieldAlt />
              </div>
              <h3>Blindagem Completa</h3>
              <p>Proteção jurídica, financeira e operacional em um único modelo</p>
            </div>
            
            <div className="diferencial-card">
              <div className="diferencial-icon">
                <FaChartLine />
              </div>
              <h3>Tecnologia Avançada</h3>
              <p>Plataformas inteligentes e IA para tomada de decisão estratégica</p>
            </div>
            
            <div className="diferencial-card">
              <div className="diferencial-icon">
                <FaUsers />
              </div>
              <h3>Atendimento Personalizado</h3>
              <p>Consultores especializados dedicados ao seu negócio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="servicos-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para blindar seu negócio?</h2>
            <p className="cta-text">
              Entre em contato com nossa equipe de especialistas e descubra como podemos 
              transformar sua gestão de pessoas em uma vantagem competitiva.
            </p>
            <div className="cta-buttons">
              <button className="cta-button-primary">
                <FaHeadset />
                <span>Falar com Especialista</span>
              </button>
              <button className="cta-button-secondary">
                <FaFileContract />
                <span>Solicitar Proposta Personalizada</span>
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