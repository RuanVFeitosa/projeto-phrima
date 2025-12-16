// pages/HistoryPage.jsx
import React from 'react';
import '../CSS/HistoryPage.css';
import Footer from '../components/Footer';

const HistoryPage = () => {
  return (
    <div className="history-page">
      <header className="history-header">
        <h1 className="history-main-title">Nossa História</h1>
        <p className="history-subtitle">
          Uma trajetória marcada por inovação, expansão e compromisso com a excelência
        </p>
      </header>

      <div className="history-content">
        {/* Timeline vertical no lado esquerdo */}
        <div className="history-timeline">
          <div className="timeline-item">
            <h2 className="timeline-year">2015</h2>
            <div className="timeline-content">
              <h3 className="timeline-title">Consolidação Nacional</h3>
              <p className="timeline-text">
                Expandimos nossa atuação para os principais estados do Brasil,
                consolidando a marca como referência em gestão de pessoas e compliance.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <h2 className="timeline-year">2020</h2>
            <div className="timeline-content">
              <h3 className="timeline-title">O ecossistema 360°</h3>
              <p className="timeline-text">
                Lançamos o modelo PRINMA 360°, integrando Recrutamento, Terceirização,
                Compliance e Clima Organizacional em um ecossistema estratégico.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <h2 className="timeline-year">2023</h2>
            <div className="timeline-content">
              <h3 className="timeline-title">Expansão Internacional</h3>
              <p className="timeline-text">
                Iniciamos nossa expansão global com bases estratégicas nos EUA e em Portugal,
                oferecendo suporte e clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Visão no lado direito */}
        <div className="history-vision">
          <div className="vision-container">
            <h2 className="vision-title">Nossa Visão Global</h2>
            <p className="vision-text">
              Ser a maior rede de blindagem corporativa integrando soluções personalizadas
              para cada cliente.
            </p>

            <div className="mission-values">
              <div className="mission-card">
                <h3 className="mission-title">Missão</h3>
                <p className="mission-text">
                  Blindar empresas e pessoas através da gestão ética e inteligente.
                </p>
              </div>

              <div className="vision-card">
                <h3 className="mission-title">Visão</h3>
                <p className="mission-text">
                  Ser a referência global em blindagem corporativa, expandindo nosso impacto
                  através de uma rede de franqueados de alta performance.
                </p>
              </div>

              <div className="values-card">
                <h3 className="mission-title">Valores</h3>
                <div className="values-list">
                  <span className="value-item">Integridade</span>
                  <span className="value-item">Inovação</span>
                  <span className="value-item">Humanidade</span>
                  <span className="value-item">Resultado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerHP">
        <Footer />
      </div>
    </div>
  );
};

export default HistoryPage;