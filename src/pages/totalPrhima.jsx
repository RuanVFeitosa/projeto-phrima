// pages/TotalPrhima.jsx
import React, { useState } from 'react';
import '../CSS/TotalPrhima.css';
import { useTranslation } from '../hooks/useTranslation';

const TotalPrhima = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('transparencia');

  const sections = [
    { id: 'transparencia', label: 'Transparência Total PRHIMA' },
    { id: 'bares', label: 'Bares, Restaurantes e Hotéis' },
    { id: 'condominios', label: 'Condomínios' },
    { id: 'logistica', label: 'Logística' },
    { id: 'industria', label: 'Indústria' },
    { id: 'construcao', label: 'Construção Civil' },
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'transparencia':
        return (
          <div className="section-content">
            <div className="section-header">
              <h1 className="section-title">{t('totalPrhima.transparency.title')}</h1>
              <p className="section-tagline">{t('totalPrhima.transparency.tagline')}</p>
            </div>

            <div className="section-grid">
              <div className="card">
                <h3 className="card-title">{t('totalPrhima.transparency.relatorio.title')}</h3>
                <ul className="card-list">
                  <li>{t('totalPrhima.transparency.relatorio.analise')}</li>
                  <li>{t('totalPrhima.transparency.relatorio.aprovacao')}</li>
                  <li>{t('totalPrhima.transparency.relatorio.confirmacao')}</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card-title">{t('totalPrhima.transparency.comprovantes.title')}</h3>
                <ul className="card-list">
                  <li>{t('totalPrhima.transparency.comprovantes.salarios')}</li>
                  <li>{t('totalPrhima.transparency.comprovantes.fgts')}</li>
                  <li>{t('totalPrhima.transparency.comprovantes.encargos')}</li>
                  <li>{t('totalPrhima.transparency.comprovantes.previdenciarias')}</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card-title">{t('totalPrhima.transparency.prestacao.title')}</h3>
                <ul className="card-list">
                  <li>{t('totalPrhima.transparency.prestacao.detalhamento')}</li>
                  <li>{t('totalPrhima.transparency.prestacao.registro')}</li>
                  <li>{t('totalPrhima.transparency.prestacao.relatorios')}</li>
                  <li>{t('totalPrhima.transparency.prestacao.dashboard')}</li>
                </ul>
              </div>

              <div className="card benefits-card">
                <h3 className="card-title">{t('totalPrhima.transparency.beneficios.title')}</h3>
                <ul className="card-list">
                  <li>{t('totalPrhima.transparency.beneficios.controle')}</li>
                  <li>{t('totalPrhima.transparency.beneficios.transparencia')}</li>
                  <li>{t('totalPrhima.transparency.beneficios.eliminacao')}</li>
                  <li>{t('totalPrhima.transparency.beneficios.confiabilidade')}</li>
                </ul>
              </div>
            </div>

            <div className="section-footer">
              <div className="footer-tag">
                <span className="tag-icon">🔒</span>
                <span>{t('totalPrhima.transparency.seguranca')}</span>
              </div>
              <div className="footer-tag">
                <span className="tag-icon">📊</span>
                <span>{t('totalPrhima.transparency.relatoriosMensais')}</span>
              </div>
            </div>
          </div>
        );

      case 'bares':
        return (
          <div className="section-content">
            <div className="section-header">
              <h1 className="section-title">{t('totalPrhima.bares.title')}</h1>
            </div>

            <div className="pain-solution-grid">
              <div className="pain-section">
                <h2 className="pain-title">{t('totalPrhima.bares.dor.title')}</h2>
                <div className="pain-items">
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.bares.dor.faltasFds')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.bares.dor.faltasFdsDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.bares.dor.adicionalNoturno')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.bares.dor.adicionalNoturnoDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.bares.dor.cozinhaParada')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.bares.dor.cozinhaParadaDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.bares.dor.quartoNaoLiberado')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.bares.dor.quartoNaoLiberadoDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.bares.dor.avaliacoesNegativas')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.bares.dor.avaliacoesNegativasDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="solution-section">
                <h2 className="solution-title">{t('totalPrhima.bares.solucao.title')}</h2>
                <div className="solution-items">
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.bares.solucao.substituicao24h')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.bares.solucao.substituicao24hDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.bares.solucao.equipeTreinada')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.bares.solucao.equipeTreinadaDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.bares.solucao.encargosPrhima')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.bares.solucao.encargosPrhimaDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.bares.solucao.riscoApolice')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.bares.solucao.riscoApoliceDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-footer">
              <div className="highlight-tag">
                <span className="tag-icon">⚡</span>
                <span>{t('totalPrhima.bares.operacao24h')}</span>
              </div>
            </div>
          </div>
        );

      case 'condominios':
        return (
          <div className="section-content">
            <div className="section-header">
              <h1 className="section-title">{t('totalPrhima.condominios.title')}</h1>
            </div>

            <div className="pain-solution-grid">
              <div className="pain-section">
                <h2 className="pain-title">{t('totalPrhima.condominios.dor.title')}</h2>
                <div className="pain-items">
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.condominios.dor.faltasPorteiros')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.condominios.dor.faltasPorteirosDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.condominios.dor.limpezaComprometida')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.condominios.dor.limpezaComprometidaDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.condominios.dor.sindicoExposto')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.condominios.dor.sindicoExpostoDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="solution-section">
                <h2 className="solution-title">{t('totalPrhima.condominios.solucao.title')}</h2>
                <div className="solution-items">
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.condominios.solucao.equipeEstavel')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.condominios.solucao.equipeEstavelDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.condominios.solucao.substituicaoImediata')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.condominios.solucao.substituicaoImediataDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.condominios.solucao.protecaoJuridica')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.condominios.solucao.protecaoJuridicaDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-footer">
              <div className="footer-tag">
                <span className="tag-icon">🛡️</span>
                <span>{t('totalPrhima.condominios.seguranca')}</span>
              </div>
              <div className="footer-tag">
                <span className="tag-icon">⚖️</span>
                <span>{t('totalPrhima.condominios.protecao')}</span>
              </div>
            </div>
          </div>
        );

      case 'logistica':
        return (
          <div className="section-content">
            <div className="section-header">
              <h1 className="section-title">{t('totalPrhima.logistica.title')}</h1>
            </div>

            <div className="pain-solution-grid">
              <div className="pain-section">
                <h2 className="pain-title">{t('totalPrhima.logistica.dor.title')}</h2>
                <div className="pain-items">
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.logistica.dor.faltasTurnos')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.logistica.dor.faltasTurnosDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.logistica.dor.quebraEscala')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.logistica.dor.quebraEscalaDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.logistica.dor.metasComprometidas')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.logistica.dor.metasComprometidasDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="solution-section">
                <h2 className="solution-title">{t('totalPrhima.logistica.solucao.title')}</h2>
                <div className="solution-items">
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.logistica.solucao.equipesDedicadas')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.logistica.solucao.equipesDedicadasDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.logistica.solucao.substituicao24h')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.logistica.solucao.substituicao24hDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.logistica.solucao.gestaoTotal')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.logistica.solucao.gestaoTotalDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.logistica.solucao.blindagemSeguros')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.logistica.solucao.blindagemSegurosDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-footer">
              <div className="highlight-tag">
                <span className="tag-icon">🔄</span>
                <span>{t('totalPrhima.logistica.confiancaOperacional')}</span>
              </div>
            </div>
          </div>
        );

      case 'industria':
        return (
          <div className="section-content">
            <div className="section-header">
              <h1 className="section-title">{t('totalPrhima.industria.title')}</h1>
            </div>

            <div className="pain-solution-grid">
              <div className="pain-section">
                <h2 className="pain-title">{t('totalPrhima.industria.dor.title')}</h2>
                <div className="pain-items">
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.industria.dor.absenteismo')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.industria.dor.absenteismoDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.industria.dor.quebraTurno')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.industria.dor.quebraTurnoDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.industria.dor.riscosProdutivos')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.industria.dor.riscosProdutivosDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.industria.dor.passivosOcultos')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.industria.dor.passivosOcultosDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="solution-section">
                <h2 className="solution-title">{t('totalPrhima.industria.solucao.title')}</h2>
                <div className="solution-items">
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.industria.solucao.gestaoOperacional')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.industria.solucao.gestaoOperacionalDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.industria.solucao.supervisaoAtiva')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.industria.solucao.supervisaoAtivaDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.industria.solucao.substituicao24h')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.industria.solucao.substituicao24hDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.industria.solucao.blindagemContratual')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.industria.solucao.blindagemContratualDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-footer">
              <div className="highlight-box">
                <h3 className="highlight-title">{t('totalPrhima.industria.solucoesTerceirizacao')}</h3>
                <p className="highlight-stat">{t('totalPrhima.industria.colaboradoresGerenciados')}</p>
              </div>
            </div>
          </div>
        );

      case 'construcao':
        return (
          <div className="section-content">
            <div className="section-header">
              <h1 className="section-title">{t('totalPrhima.construcao.title')}</h1>
            </div>

            <div className="pain-solution-grid">
              <div className="pain-section">
                <h2 className="pain-title">{t('totalPrhima.construcao.dor.title')}</h2>
                <div className="pain-items">
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.construcao.dor.rotatividade')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.construcao.dor.rotatividadeDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.construcao.dor.fiscalizacoes')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.construcao.dor.fiscalizacoesDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.construcao.dor.acoesTrabalhistas')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.construcao.dor.acoesTrabalhistasDesc')}</p>
                  </div>
                  <div className="pain-item">
                    <h4 className="pain-item-title">{t('totalPrhima.construcao.dor.paralisacoes')}</h4>
                    <p className="pain-item-desc">{t('totalPrhima.construcao.dor.paralisacoesDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="solution-section">
                <h2 className="solution-title">{t('totalPrhima.construcao.solucao.title')}</h2>
                <div className="solution-items">
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.construcao.solucao.maoObraRegularizada')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.construcao.solucao.maoObraRegularizadaDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.construcao.solucao.substituicaoImediata')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.construcao.solucao.substituicaoImediataDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.construcao.solucao.coberturaApolice')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.construcao.solucao.coberturaApoliceDesc')}</p>
                  </div>
                  <div className="solution-item">
                    <h4 className="solution-item-title">{t('totalPrhima.construcao.solucao.segurancaJuridica')}</h4>
                    <p className="solution-item-desc">{t('totalPrhima.construcao.solucao.segurancaJuridicaDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-footer">
              <div className="highlight-box">
                <h3 className="highlight-title">{t('totalPrhima.construcao.solucoesSobMedida')}</h3>
                <p className="highlight-stat">{t('totalPrhima.construcao.colaboradoresGerenciados')}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="total-prhima-page">
      <header className="prhima-header">
        <h1 className="prhima-main-title">{t('totalPrhima.mainTitle')}</h1>
        <p className="prhima-subtitle">{t('totalPrhima.subtitle')}</p>
      </header>

      <div className="prhima-container">
        <nav className="prhima-nav">
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="prhima-main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default TotalPrhima;