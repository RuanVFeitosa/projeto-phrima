// pages/HomePage.jsx
import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation';
import Footer from '../components/Footer';
import '../CSS/App.css'
import Navbar from '../components/navBar';

import foto1 from '../assets/foto1.png'
import foto2 from '../assets/foto2.png'
import foto3 from '../assets/foto3.png'

function HomePage() {
  const { t } = useTranslation();
  const slidesData = [
    { src: foto1 }, { src: foto2 }, { src: foto3 },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length)
    }, 4000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  const goToSlide = (index) => setCurrentSlide(index)

  return (
    <div className="homepage">
      <Navbar />

      <div className="banner">
        {/* Slideshow */}
        <div className="slideshow-container">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`mySlides fade`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <img src={slide.src} alt={slide.caption} className='slideshowDecoration' />
            </div>
          ))}
        </div>

        {/* <h1 className='bannerH1'>
          {t('home.banner.title')}
        </h1>
        <p className="bannerP">
          {t('home.banner.description')}
        </p>
        <div className="bannerDescription">
          <p className="bannerDescription1">
            {t('home.banner.stats.companies')}
          </p>
          <div className="vertical-line1"></div>

          <p className="bannerDescription2">
            {t('home.banner.stats.coverage')}
          </p>
          <div className="vertical-line2"></div>

          <p className="bannerDescription3">
            {t('home.banner.stats.satisfaction')}
          </p>
        </div> */}
      </div>

      <div className="home2-section">
        <div className="home2-container">
          {/* Cabeçalho Impactante */}
          <div className="home2-header">
            <div className="warning-badge">
              <i className="fas fa-exclamation-triangle"></i>
              <span>{t('home.security.alert')}</span>
            </div>

            <h2 className="home2-title">
              {t('home.security.question')}
              <span className="title-highlight"></span>
            </h2>

            <p className="home2-subtitle">
              {t('home.security.subtitle')}
            </p>
          </div>

          {/* Diagnóstico Rápido */}
          <div className="diagnostico-box">
            <h3 className="diagnostico-title">
              <i className="fas fa-clipboard-check"></i>
              {t('home.security.diagnosis.title')}
            </h3>
            <p className="diagnostico-text">
              {t('home.security.diagnosis.text')}
            </p>
          </div>

          {/* Riscos em Cards */}
          <div className="riscos-container">
            <div className="riscos-grid">
              {/* Risco 1 */}
              <div className="risco-card">
                <div className="risco-header">
                  <div className="risco-icon">
                    <i className="fas fa-hard-hat"></i>
                  </div>
                  <div className="risco-tag">{t('home.risks.tags.highGravity')}</div>
                </div>
                <h4 className="risco-title">
                  {t('home.risks.labor.title')}
                </h4>
                <p className="risco-desc">
                  {t('home.risks.labor.description')}
                </p>
                <div className="risco-exemplos">
                  {t('home.risks.labor.examples.0') && (
                    <span className="exemplo-item">• {t('home.risks.labor.examples.0')}</span>
                  )}
                  {t('home.risks.labor.examples.1') && (
                    <span className="exemplo-item">• {t('home.risks.labor.examples.1')}</span>
                  )}
                  {t('home.risks.labor.examples.2') && (
                    <span className="exemplo-item">• {t('home.risks.labor.examples.2')}</span>
                  )}
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-clock"></i>
                  <span>{t('home.risks.labor.alert')}</span>
                </div>
              </div>

              {/* Risco 2 */}
              <div className="risco-card">
                <div className="risco-header">
                  <div className="risco-icon">
                    <i className="fas fa-file-excel"></i>
                  </div>
                  <div className="risco-tag tag-compliance">
                    {t('home.risks.tags.compliance')}
                  </div>
                </div>
                <h4 className="risco-title">
                  {t('home.risks.compliance.title')}
                </h4>
                <p className="risco-desc">
                  {t('home.risks.compliance.description')}
                </p>
                <div className="risco-exemplos">
                  {t('home.risks.compliance.examples.0') && (
                    <span className="exemplo-item">• {t('home.risks.compliance.examples.0')}</span>
                  )}
                  {t('home.risks.compliance.examples.1') && (
                    <span className="exemplo-item">• {t('home.risks.compliance.examples.1')}</span>
                  )}
                  {t('home.risks.compliance.examples.2') && (
                    <span className="exemplo-item">• {t('home.risks.compliance.examples.2')}</span>
                  )}
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-ban"></i>
                  <span>{t('home.risks.compliance.alert')}</span>
                </div>
              </div>

              {/* Risco 3 */}
              <div className="risco-card">
                <div className="risco-header">
                  <div className="risco-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="risco-tag tag-lgpd">
                    {t('home.risks.tags.lgpd')}
                  </div>
                </div>
                <h4 className="risco-title">
                  {t('home.risks.lgpd.title')}
                </h4>
                <p className="risco-desc">
                  {t('home.risks.lgpd.description')}
                </p>
                <div className="risco-exemplos">
                  {t('home.risks.lgpd.examples.0') && (
                    <span className="exemplo-item">• {t('home.risks.lgpd.examples.0')}</span>
                  )}
                  {t('home.risks.lgpd.examples.1') && (
                    <span className="exemplo-item">• {t('home.risks.lgpd.examples.1')}</span>
                  )}
                  {t('home.risks.lgpd.examples.2') && (
                    <span className="exemplo-item">• {t('home.risks.lgpd.examples.2')}</span>
                  )}
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-user-secret"></i>
                  <span>{t('home.risks.lgpd.alert')}</span>
                </div>
              </div>

              {/* Risco 4 */}
              <div className="risco-card">
      <div className="risco-header">
        <div className="risco-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="risco-tag tag-operacional">
          {t('home.risks.tags.operational')}
        </div>
      </div>
      <h4 className="risco-title">
        {t('home.risks.operational.title')}
      </h4>
                <p className="risco-desc">
                  {t('home.risks.operational.description')}
                </p>
                <div className="risco-exemplos">
                  {t('home.risks.operational.examples.0') && (
                    <span className="exemplo-item">• {t('home.risks.operational.examples.0')}</span>
                  )}
                  {t('home.risks.operational.examples.1') && (
                    <span className="exemplo-item">• {t('home.risks.operational.examples.1')}</span>
                  )}
                  {t('home.risks.operational.examples.2') && (
                    <span className="exemplo-item">• {t('home.risks.operational.examples.2')}</span>
                  )}
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-chart-line-down"></i>
                  <span>{t('home.risks.operational.alert')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="risco-cta">
            <div className="cta-content">
              <div className="cta-text">
                <h3>{t('home.risks.cta.title')}</h3>
                <p>{t('home.risks.cta.description')}</p>
              </div>
              <div className="cta-buttons">
                <button className="btn-analise">
                  <i className="fas fa-search"></i>
                  {t('common.buttons.freeAnalysis')}
                </button>
                <button className="btn-fale-especialista">
                  <i className="fas fa-headset"></i>
                  {t('common.buttons.speakExpert')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modelo PRHIMA */}
        <div className="modelo-prhima">
          <div className="modelo-container">
            {/* Cabeçalho */}
            <div className="modelo-header">
              <div className="modelo-tag">{t('home.model.tag')}</div>
              <h2 className="modelo-title">
                {t('home.model.title')} <span className="highlight">PRHIMA</span>
              </h2>
              <p className="modelo-subtitle">
                {t('home.model.subtitle')}
              </p>
            </div>

            {/* Comparação visual */}
            <div className="modelo-comparacao">
              <div className="comparacao-item empresa">
                <div className="comparacao-icon">
                  <i className="fas fa-building fa-2x"></i>
                </div>
                <h3 className="comparacao-titulo">
                  {t('home.model.comparison.company.title')}
                </h3>
                <p className="comparacao-desc">
                  {t('home.model.comparison.company.description')}
                </p>
                <div className="comparacao-lista">
                  <div className="lista-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{t('home.model.comparison.company.benefits.0')}</span>
                  </div>
                  <div className="lista-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{t('home.model.comparison.company.benefits.1')}</span>
                  </div>
                  <div className="lista-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{t('home.model.comparison.company.benefits.2')}</span>
                  </div>
                </div>
              </div>

              <div className="comparacao-seta">
                <i className="fas fa-arrow-right fa-2x"></i>
              </div>

              <div className="comparacao-item prhima">
  <div className="comparacao-icon">
    <i className="fas fa-shield-alt fa-2x"></i>
  </div>
  <h3 className="comparacao-titulo">
    {t('home.model.comparison.prhima.title')}
  </h3>
  <p className="comparacao-desc">
    {t('home.model.comparison.prhima.description')}
  </p>
  <div className="comparacao-badge">
    <i className="fas fa-medal"></i>
    <span>{t('home.model.badges.totalShielding')}</span>
  </div>
</div>
            </div>

            {/* Benefícios em grid */}
            <div className="modelo-beneficios">
              <h3 className="beneficios-titulo">
                {t('home.model.benefits.title')}
              </h3>

              <div className="beneficios-grid">
                {/* Benefício 1 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-file-contract fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">
                    {t('home.model.benefits.employment.title')}
                  </h4>
                  <p className="beneficio-desc">
                    {t('home.model.benefits.employment.description')}
                  </p>
                </div>

                {/* Benefício 2 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-calculator fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">
                    {t('home.model.benefits.payroll.title')}
                  </h4>
                  <p className="beneficio-desc">
                    {t('home.model.benefits.payroll.description')}
                  </p>
                </div>

                {/* Benefício 3 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-gift fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">
                    {t('home.model.benefits.benefits.title')}
                  </h4>
                  <p className="beneficio-desc">
                    {t('home.model.benefits.benefits.description')}
                  </p>
                </div>

                {/* Benefício 4 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-sync-alt fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">
                    {t('home.model.benefits.replacements.title')}
                  </h4>
                  <p className="beneficio-desc">
                    {t('home.model.benefits.replacements.description')}
                  </p>
                </div>

                {/* Benefício 5 */}
                <div className="beneficio-card beneficio-destaque">
                  <div className="beneficio-icon">
                    <i className="fas fa-balance-scale fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">
                    {t('home.model.benefits.legal.title')}
                  </h4>
                  <p className="beneficio-desc">
                    {t('home.model.benefits.legal.description')}
                  </p>
                  <div className="beneficio-badge">
                    <i className="fas fa-shield"></i>
                    <span>Proteção Total</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="modelo-cta">
              <div className="cta-content">
                <h3 className="cta-titulo">
                  {t('home.model.cta.title')}
                </h3>
                <p className="cta-texto">
                  {t('home.model.cta.description')}
                </p>
                <button className="cta-button">
                  <i className="fas fa-handshake"></i>
                  {t('common.buttons.speakExpert')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="resultados-completo">
          <h1 className="confiarH1">
            {t('home.results.title')}
          </h1>
          <div className="resultados-conteudo">
            <div className="caixas-container">
              <div className="caixas-grid">
                <div className="caixas-linha">
                  <div className="colaboradoresCaixa resultado-caixa">
                    <h1 className="colaboradoresGerenciados">
                      {t('home.results.stats.managed.title')}
                    </h1>
                    <h3 className="anosExelencia">
                      {t('home.results.stats.managed.value')}
                    </h3>
                    <p className="colaboradoresP">
                      {t('home.results.stats.managed.description')}
                    </p>
                  </div>

                  <div className="reducaoCaixa resultado-caixa">
                    <h1 className="reducaoPassivo">
                      {t('home.results.stats.reduction.title')}
                    </h1>
                    <h3 className="reducaoNum">
                      {t('home.results.stats.reduction.value')}
                    </h3>
                    <p className="reducaoP">
                      {t('home.results.stats.reduction.description')}
                    </p>
                  </div>
                </div>

                <div className="caixas-linha">
                  <div className="slaCaixa resultado-caixa">
                    <h1 className="slaSub">
                      {t('home.results.stats.sla.title')}
                    </h1>
                    <h3 className="horaResposta">
                      {t('home.results.stats.sla.value')}
                    </h3>
                    <p className="repostaP">
                      {t('home.results.stats.sla.description')}
                    </p>
                  </div>

                  <div className="clienteCaixa resultado-caixa">
                    <h1 className="satisfacaoCli">
                      {t('home.results.stats.satisfaction.title')}
                    </h1>
                    <h3 className="satisPor">
                      {t('home.results.stats.satisfaction.value')}
                    </h3>
                    <p className="satisP">
                      {t('home.results.stats.satisfaction.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prova-social-container">
              <div className="prova-social-card">
                <div className="prova-social-icon">
                  <i className="fas fa-medal fa-2x"></i>
                </div>

                <h2 className="prova-social-title">
                  {t('home.results.social.title')}
                </h2>

                <div className="prova-social-item">
                  <div className="item-icon">
                    <i className="fas fa-video"></i>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">
                      {t('home.results.social.videos.title')}
                    </h3>
                    <p className="item-desc">
                      {t('home.results.social.videos.description')}
                    </p>
                  </div>
                </div>

                <div className="prova-social-item">
                  <div className="item-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">
                      {t('home.results.social.results.title')}
                    </h3>
                    <p className="item-desc">
                      {t('home.results.social.results.description')}
                    </p>
                  </div>
                </div>

                <div className="prova-social-quote">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="quote-text">
                    {t('home.results.social.quote')}
                  </p>
                </div>

                <button className="prova-social-button">
                  <i className="fas fa-play-circle"></i>
                  {t('common.buttons.watchTestimonials')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage