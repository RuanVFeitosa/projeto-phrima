// components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaShieldAlt, FaCalendarCheck, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import '../components/CSS/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-message">
            <h2 className="footer-title">
              <span className="title-line1">{t('footer.title.line1')}</span>
              <span className="title-line2">
                {t('footer.title.line2')} <strong>PRHIMA</strong>
              </span>
            </h2>

            <div className="footer-description">
              <p className="description-text">
                {t('footer.description.line1')}
              </p>
              <p className="description-text">
                {t('footer.description.line2')}
              </p>
            </div>
          </div>

          <div className="footer-cta">
            <button className="cta-buttonFooter solicitar">
              <FaShieldAlt className="button-icon" />
              <span>{t('footer.buttons.proposal')}</span>
            </button>

            <button className="cta-buttonFooter agendar">
              <FaCalendarCheck className="button-icon" />
              <span>{t('footer.buttons.meeting')}</span>
            </button>

            <button className="cta-buttonFooter iniciar">
              <FaRocket className="button-icon" />
              <span>{t('footer.buttons.start')}</span>
            </button>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider"></div>

        {/* Seção de contato e links */}
        <div className="footer-bottom">
          <div className="footer-contact">
            <h3 className="contact-title">{t('footer.contact.title')}</h3>

            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+5521966286353" className="contact-link">
                  {t('footer.contact.phone')}
                </a>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:comercial@prhima.com.br" className="contact-link">
                  {t('footer.contact.email')}
                </a>
              </div>

              <div className="contact-item">
                <FaGlobe className="contact-icon" />
                <a href="https://www.prhima.com.br" target="_blank" rel="noopener noreferrer" className="contact-link">
                  {t('footer.contact.website')}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-quick-links">
            <h3 className="links-title">{t('footer.quickLinks.title')}</h3>
            <ul className="links-list">
              <li><Link to="/sobre-nos">{t('footer.quickLinks.about')}</Link></li>
              <li><Link to="/servicos">{t('footer.quickLinks.services')}</Link></li>
              <li><Link to="/atuacao-global">{t('footer.quickLinks.global')}</Link></li>
              <li><Link to="/cases">{t('footer.quickLinks.cases')}</Link></li>
              <li><Link to="/fale-conosco">{t('footer.quickLinks.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3 className="services-title">{t('footer.services.title')}</h3>
            <ul className="services-list">
              <li><a href="#compliance">{t('footer.services.compliance')}</a></li>
              <li><a href="#riscos">{t('footer.services.risk')}</a></li>
              <li><a href="#lgpd">{t('footer.services.lgpd')}</a></li>
              <li><a href="#terceirizacao">{t('footer.services.outsourcing')}</a></li>
              <li><a href="#auditoria">{t('footer.services.audit')}</a></li>
            </ul>
          </div>

          <div className="footer-certifications">
            <div className="cert-badge">
              <i className="fas fa-shield-check fa-2x"></i>
              <span>{t('footer.certifications.certified')}</span>
            </div>
            <div className="cert-badge">
              <i className="fas fa-award fa-2x"></i>
              <span>{t('footer.certifications.excellence')}</span>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="footer-end">
          <div className="footer-copyright">
            <p>{t('footer.copyright.line1', { year: new Date().getFullYear() })}</p>
            <p>{t('footer.copyright.line2')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;