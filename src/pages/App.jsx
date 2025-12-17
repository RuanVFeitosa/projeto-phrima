// pages/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ← HashRouter
import Navbar from '../components/navBar';
import HistoryPage from './historyPages';
import HomePage from './homePage';
import ServicosPage from './servicosPage';
import AtuacaoGlobalPage from './atuacaoGlobalPage';

// Páginas temporárias
const CasesPage = () => <div style={{ padding: '40px' }}><h1>Cases</h1></div>;
const FaleConoscoPage = () => <div style={{ padding: '40px' }}><h1>Fale Conosco</h1></div>;

function App() {
  return (
    <Router> {/* HashRouter */}
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;