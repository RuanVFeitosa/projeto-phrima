// pages/FaleConoscoPage.jsx
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import '../CSS/faleConoscoPage.css';

const FaleConoscoPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    interesse: '',
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert(t('contact.form.success'));
    setFormData({
      interesse: '',
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <div className="fale-conosco-container">
      <div className="fale-conosco-hero">
        <h1>{t('contact.hero.title')}</h1>
        <p className="hero-subtitle">
          {t('contact.hero.subtitle')}
        </p>
      </div>

      <div className="fale-conosco-content">
        <div className="form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="interesse">{t('contact.form.subject.label')}</label>
              <select
                id="interesse"
                name="interesse"
                value={formData.interesse}
                onChange={handleChange}
                required
                className="form-select"
              >
                {t('contact.form.subject.options', []).map((assunto, index) => (
                  <option key={index} value={assunto}>
                    {assunto}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nome">{t('contact.form.name.label')}</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder={t('contact.form.name.placeholder')}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email.label')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.form.email.placeholder')}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">{t('contact.form.message.label')}</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                placeholder={t('contact.form.message.placeholder')}
                rows="30"
                className="form-textarea"
              />
            </div>

            <button type="submit" className="submit-button">
              {t('contact.form.submit')}
            </button>
          </form>
        </div>

        <div className="info-section">
          <div className="contact-info-card">
            <h3 className="info-title">{t('contact.info.address.title')}</h3>
            <div className="address-info">
              <div className="map-container">
                <div className="map-tags">
                  {t('contact.info.address.tags', []).map((tag, index) => (
                    <span key={index} className="map-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="map-preview">
                  <p className="map-address">
                    <a 
                      href="https://maps.google.com/?q=Avenida+Ayrton+Senna+2500+Barra+da+Tijuca+Rio+de+Janeiro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{t('contact.info.address.street')}</strong>
                    </a>
                  </p>
                  
                  {t('contact.info.address.notes', []).map((note, index) => (
                    <p key={index} className="map-note">
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="info-title">{t('contact.info.emails.title')}</h3>
            <div className="emails-list">
              {t('contact.info.emails.list', []).map((item, index) => (
                <div key={index} className="email-item">
                  <strong>{item.department}:</strong>
                  <a href={`mailto:${item.email}`} className="email-link">
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConoscoPage;