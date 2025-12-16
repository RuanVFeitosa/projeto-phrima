// pages/HomePage.jsx
import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaGlobe, FaShieldAlt, FaCalendarCheck, FaRocket } from 'react-icons/fa';
import Footer from '../components/Footer'; // Com F maiúsculo se o arquivo for Footer.jsx
import '../CSS/App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Navbar from '../components/navBar';

import foto1 from '../assets/foto1.png'
import foto2 from '../assets/foto2.png'
import foto3 from '../assets/foto3.png'

function HomePage() {
  const slidesData = [
    { src: foto1, }, { src: foto2, }, { src: foto3, },
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
        <h1 className='bannerH1'>Blindamos pessoas, processos e relações em qualquer lugar do mundo.</h1>
        <p className="bannerP">
          PRHIMA 360° integra Recrutamento, Terceirização, Relações Trabalhistas,
          Compliance e Clima Organizacional em um único modelo estratégico.
        </p>
        <div className="bannerDescription">
          <p className="bannerDescription1">+200 empresas protegidas</p>
          <div className="vertical-line1"></div>

          <p className="bannerDescription2">Atuação Nacional e Internacional</p>
          <div className="vertical-line2"></div>

          <p className="bannerDescription3">98% de satisfação</p>
        </div>
      </div>

      <div className="home2-section">
        <div className="home2-container">

          {/* Cabeçalho Impactante */}
          <div className="home2-header">
            <div className="warning-badge">
              <i className="fas fa-exclamation-triangle"></i>
              <span>ALERTA DE SEGURANÇA</span>
            </div>

            <h2 className="home2-title">
              Sua empresa está
              <span className="title-highlight"> realmente segura?</span>
            </h2>

            <p className="home2-subtitle">
              Riscos invisíveis podem custar caro. Descubra se seu negócio está exposto.
            </p>


          </div>

          {/* Diagnóstico Rápido */}
          <div className="diagnostico-box">
            <h3 className="diagnostico-title">
              <i className="fas fa-clipboard-check"></i>
              Faça um diagnóstico rápido do seu negócio
            </h3>
            <p className="diagnostico-text">
              Responda mentalmente: seu negócio está exposto a algum desses riscos?
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
                  <div className="risco-tag">ALTA GRAVIDADE</div>
                </div>
                <h4 className="risco-title">Riscos Trabalhistas</h4>
                <p className="risco-desc">
                  Processos, multas e passivos trabalhistas que podem surgir a qualquer momento.
                </p>
                <div className="risco-exemplos">
                  <span className="exemplo-item">• Reclamações trabalhistas</span>
                  <span className="exemplo-item">• Multas por irregularidades</span>
                  <span className="exemplo-item">• Passivos ocultos</span>
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-clock"></i>
                  <span>Prejuízos: Imediatos e de longo prazo</span>
                </div>
              </div>

              {/* Risco 2 */}
              <div className="risco-card">
                <div className="risco-header">
                  <div className="risco-icon">
                    <i className="fas fa-file-excel"></i>
                  </div>
                  <div className="risco-tag tag-compliance">COMPLIANCE</div>
                </div>
                <h4 className="risco-title">Falhas em Compliance</h4>
                <p className="risco-desc">
                  Desconformidade com leis e regulamentos que podem paralisar suas operações.
                </p>
                <div className="risco-exemplos">
                  <span className="exemplo-item">• Sanções regulatórias</span>
                  <span className="exemplo-item">• Perda de certificações</span>
                  <span className="exemplo-item">• Restrições operacionais</span>
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-ban"></i>
                  <span>Consequência: Interdição da empresa</span>
                </div>
              </div>

              {/* Risco 3 */}
              <div className="risco-card">
                <div className="risco-header">
                  <div className="risco-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="risco-tag tag-lgpd">LGPD</div>
                </div>
                <h4 className="risco-title">Vulnerabilidade LGPD</h4>
                <p className="risco-desc">
                  Vazamento de dados e descumprimento da Lei Geral de Proteção de Dados.
                </p>
                <div className="risco-exemplos">
                  <span className="exemplo-item">• Multas de até R$ 50 milhões</span>
                  <span className="exemplo-item">• Danos à reputação</span>
                  <span className="exemplo-item">• Processos por danos morais</span>
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-user-secret"></i>
                  <span>Risco: Exposição de dados sensíveis</span>
                </div>
              </div>

              {/* Risco 4 */}
              <div className="risco-card">
                <div className="risco-header">
                  <div className="risco-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="risco-tag tag-operacional">OPERACIONAL</div>
                </div>
                <h4 className="risco-title">Ineficiência Operacional</h4>
                <p className="risco-desc">
                  Processos ineficientes que reduzem produtividade e aumentam custos.
                </p>
                <div className="risco-exemplos">
                  <span className="exemplo-item">• Baixa produtividade</span>
                  <span className="exemplo-item">• Custos desnecessários</span>
                  <span className="exemplo-item">• Perda de competitividade</span>
                </div>
                <div className="risco-alerta">
                  <i className="fas fa-chart-line-down"></i>
                  <span>Impacto: Redução de lucratividade</span>
                </div>
              </div>

            </div>
          </div>

          {/* Call to Action */}
          <div className="risco-cta">
            <div className="cta-content">
              <div className="cta-text">
                <h3>Identificou algum desses riscos?</h3>
                <p>Não espere o problema acontecer. A prevenção é a melhor estratégia.</p>
              </div>
              <div className="cta-buttons">
                <button className="btn-analise">
                  <i className="fas fa-search"></i>
                  Fazer Análise de Risco Gratuita
                </button>
                <button className="btn-fale-especialista">
                  <i className="fas fa-headset"></i>
                  Falar com Especialista
                </button>
              </div>
            </div>
          </div>

        </div>


        <div className="modelo-prhima">
          <div className="modelo-container">

            {/* Cabeçalho */}
            <div className="modelo-header">
              <div className="modelo-tag">NOSSO MODELO</div>
              <h2 className="modelo-title">O Modelo <span className="highlight">PRHIMA</span></h2>
              <p className="modelo-subtitle">
                A PRHIMA não aluga pessoas.<br />
                <strong>Nós assumimos o risco por você.</strong>
              </p>
            </div>

            {/* Comparação visual */}
            <div className="modelo-comparacao">
              <div className="comparacao-item empresa">
                <div className="comparacao-icon">
                  <i className="fas fa-building fa-2x"></i>
                </div>
                <h3 className="comparacao-titulo">Sua Empresa</h3>
                <p className="comparacao-desc">Foco no seu core business</p>
                <div className="comparacao-lista">
                  <div className="lista-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Crescimento sustentável</span>
                  </div>
                  <div className="lista-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Produtividade máxima</span>
                  </div>
                  <div className="lista-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Zero burocracia</span>
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
                <h3 className="comparacao-titulo">PRHIMA</h3>
                <p className="comparacao-desc">Assumimos todas as responsabilidades</p>
                <div className="comparacao-badge">
                  <i className="fas fa-medal"></i>
                  <span>Blindagem Total</span>
                </div>
              </div>
            </div>

            {/* Benefícios em grid */}
            <div className="modelo-beneficios">
              <h3 className="beneficios-titulo">Tudo que assumimos para você:</h3>

              <div className="beneficios-grid">

                {/* Benefício 1 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-file-contract fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">Vínculo Empregatício</h4>
                  <p className="beneficio-desc">
                    A PRHIMA é a empregadora legal, eliminando o vínculo direto com sua empresa.
                  </p>
                </div>

                {/* Benefício 2 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-calculator fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">Gestão de Folha</h4>
                  <p className="beneficio-desc">
                    Cuidamos de toda a burocracia salarial, impostos e contribuições.
                  </p>
                </div>

                {/* Benefício 3 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-gift fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">Benefícios</h4>
                  <p className="beneficio-desc">
                    Gerenciamento completo de benefícios e controle de jornada.
                  </p>
                </div>

                {/* Benefício 4 */}
                <div className="beneficio-card">
                  <div className="beneficio-icon">
                    <i className="fas fa-sync-alt fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">Substituições</h4>
                  <p className="beneficio-desc">
                    Garantia de continuidade operacional com reposição ágil de profissionais.
                  </p>
                </div>

                {/* Benefício 5 */}
                <div className="beneficio-card beneficio-destaque">
                  <div className="beneficio-icon">
                    <i className="fas fa-balance-scale fa-2x"></i>
                  </div>
                  <h4 className="beneficio-titulo">Risco Jurídico</h4>
                  <p className="beneficio-desc">
                    Assumimos a totalidade do risco trabalhista e previdenciário.
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
                <h3 className="cta-titulo">Pronto para focar no que realmente importa?</h3>
                <p className="cta-texto">
                  Deixe a burocracia e os riscos trabalhistas conosco. Sua empresa livre para crescer.
                </p>
                <button className="cta-button">
                  <i className="fas fa-handshake"></i>
                  Fale com um Especialista
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="resultados-completo">
          <h1 className="confiarH1">Por que confiar na PHRIMA?</h1>
          <div className="resultados-conteudo">

            <div className="caixas-container">
              <div className="caixas-grid">
                <div className="caixas-linha">
                  <div className="colaboradoresCaixa resultado-caixa">
                    <h1 className="colaboradoresGerenciados">Colaboradores Gerenciados</h1>
                    <h3 className="anosExelencia">+17 anos</h3>
                    <p className="colaboradoresP">de excelência</p>
                  </div>

                  <div className="reducaoCaixa resultado-caixa">
                    <h1 className="reducaoPassivo">Redução de Passivos</h1>
                    <h3 className="reducaoNum">-34,97%</h3>
                    <p className="reducaoP">de redução média</p>
                  </div>
                </div>

                <div className="caixas-linha">
                  <div className="slaCaixa resultado-caixa">
                    <h1 className="slaSub">SLA de Substituição</h1>
                    <h3 className="horaResposta">24h</h3>
                    <p className="repostaP">de resposta média</p>
                  </div>

                  <div className="clienteCaixa resultado-caixa">
                    <h1 className="satisfacaoCli">Satisfação do Cliente</h1>
                    <h3 className="satisPor">+90%</h3>
                    <p className="satisP">de aprovação</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prova-social-container">
              <div className="prova-social-card">
                <div className="prova-social-icon">
                  <i className="fas fa-medal fa-2x"></i>
                </div>

                <h2 className="prova-social-title">Prova Social</h2>

                <div className="prova-social-item">
                  <div className="item-icon">
                    <i className="fas fa-video"></i>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Vídeos Reais</h3>
                    <p className="item-desc">Depoimentos de clientes no nosso site</p>
                  </div>
                </div>

                <div className="prova-social-item">
                  <div className="item-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Resultados Concretos</h3>
                    <p className="item-desc">Imagens de operações reais</p>
                  </div>
                </div>

                <div className="prova-social-quote">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="quote-text">
                    Números não mentem.<br />
                    Confiança se constrói com<br />
                    <strong>resultado real.</strong>
                  </p>
                </div>

                <button className="prova-social-button">
                  <i className="fas fa-play-circle"></i>
                  Ver Depoimentos
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