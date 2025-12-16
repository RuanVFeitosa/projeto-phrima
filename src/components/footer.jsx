// components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaShieldAlt, FaCalendarCheck, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../components/CSS/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-message">
            <h2 className="footer-title">
              <span className="title-line1">O Risco Você Já Conhece.</span>
              <span className="title-line2">A Proteção Tem Nome: <strong>PRHIMA</strong></span>
            </h2>

            <div className="footer-description">
              <p className="description-text">
                A terceirização exposta a riscos sem proteção adequada pode comprometer sua empresa
              </p>
              <p className="description-text">
                A PRHIMA oferece a solução completa para a sua blindagem jurídica
              </p>
            </div>
          </div>

          <div className="footer-cta">
            <button className="cta-button solicitar">
              <FaShieldAlt className="button-icon" />
              <span>Solicite sua Proposta Blindada</span>
            </button>

            <button className="cta-button agendar">
              <FaCalendarCheck className="button-icon" />
              <span>Agende uma Reunião Estratégica</span>
            </button>

            <button className="cta-button iniciar">
              <FaRocket className="button-icon" />
              <span>Inicie sua Blindagem Agora</span>
            </button>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider"></div>

        {/* Seção de contato e links */}
        <div className="footer-bottom">
          <div className="footer-contact">
            <h3 className="contact-title">Contato</h3>

            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+5521966286353" className="contact-link">
                  (21) 96628-6353
                </a>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:comercial@prhima.com.br" className="contact-link">
                  comercial@prhima.com.br
                </a>
              </div>

              <div className="contact-item">
                <FaGlobe className="contact-icon" />
                <a href="https://www.prhima.com.br" target="_blank" rel="noopener noreferrer" className="contact-link">
                  www.prhima.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="footer-quick-links">
            <h3 className="links-title">Links Rápidos</h3>
            <ul className="links-list">
              <li><Link to="/sobre-nos">Sobre Nós</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/atuacao-global">Atuação Global</Link></li>
              <li><Link to="/cases">Cases</Link></li>
              <li><Link to="/fale-conosco">Fale Conosco</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3 className="services-title">Nossos Serviços</h3>
            <ul className="services-list">
              <li><a href="#compliance">Compliance Corporativo</a></li>
              <li><a href="#riscos">Gestão de Riscos</a></li>
              <li><a href="#lgpd">Consultoria LGPD</a></li>
              <li><a href="#terceirizacao">Terceirização Blindada</a></li>
              <li><a href="#auditoria">Auditoria Trabalhista</a></li>
            </ul>
          </div>

          <div className="footer-certifications">
            <div className="cert-badge">
              <i className="fas fa-shield-check fa-2x"></i>
              <span>Empresa Certificada</span>
            </div>
            <div className="cert-badge">
              <i className="fas fa-award fa-2x"></i>
              <span>Excelência em Compliance</span>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="footer-end">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} PRHIMA 360°. Todos os direitos reservados.</p>
            <p>Especialistas em blindagem jurídica e compliance trabalhista.</p>
          </div>

          <div className="footer-social">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;