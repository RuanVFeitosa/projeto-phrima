// pages/HistoryPage.jsx
import React from 'react';
import '../CSS/HistoryPage.css';
import Footer from '../components/Footer';
import { useTranslation } from '../hooks/useTranslation';

const HistoryPage = () => {
  const { t } = useTranslation();

  return (
    <div className="history-page">
      <header className="history-header">
        <h1 className="history-main-title">{t('history.title')}</h1>
        <p className="history-subtitle">
          {t('history.subtitle')}
        </p>
      </header>

      <div className="history-content">
        {/* Timeline vertical no lado esquerdo */}
        <div className="history-timeline">
          <div className="timeline-item">
            <h2 className="timeline-year">2015</h2>
            <div className="timeline-content">
              <h3 className="timeline-title">{t('history.timeline.2015.title')}</h3>
              <p className="timeline-text">
                {t('history.timeline.2015.text')}
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <h2 className="timeline-year">2020</h2>
            <div className="timeline-content">
              <h3 className="timeline-title">{t('history.timeline.2020.title')}</h3>
              <p className="timeline-text">
                {t('history.timeline.2020.text')}
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <h2 className="timeline-year">2023</h2>
            <div className="timeline-content">
              <h3 className="timeline-title">{t('history.timeline.2023.title')}</h3>
              <p className="timeline-text">
                {t('history.timeline.2023.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Visão no lado direito */}
        <div className="history-vision">
          <div className="vision-container">
            <h2 className="vision-title">{t('history.vision.title')}</h2>
            <p className="vision-text">
              {t('history.vision.text')}
            </p>

            <div className="mission-values">
              <div className="mission-card">
                <h3 className="mission-title">{t('history.mission.title')}</h3>
                <p className="mission-text">
                  {t('history.mission.text')}
                </p>
              </div>

              <div className="vision-card">
                <h3 className="mission-title">{t('history.companyVision.title')}</h3>
                <p className="mission-text">
                  {t('history.companyVision.text')}
                </p>
              </div>

              <div className="values-card">
                <h3 className="mission-title">{t('history.values.title')}</h3>
                <div className="values-list">
                  {t('history.values.items', []).map((item, index) => (
                    <span key={index} className="value-item">
                      {item}
                    </span>
                  ))}
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