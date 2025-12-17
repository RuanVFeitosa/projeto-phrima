// pages/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navbar from '../components/navBar';
import HistoryPage from './historyPages';
import HomePage from './homePage';
import ServicosPage from './servicosPages';
import AtuacaoGlobalPage from './atuacaoGlobalPage';
import FaleConoscoPage from '../pages/faleConoscoPage';

const CasesPage = () => <div style={{ padding: '40px' }}><h1>Cases</h1></div>;

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre-nos" element={<HistoryPage />} />
              <Route path="/servicos" element={<ServicosPage />} />
              <Route path="/atuacao-global" element={<AtuacaoGlobalPage />} />
              <Route path="/cases" element={<CasesPage />} />
              <Route path="/fale-conosco" element={<FaleConoscoPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;