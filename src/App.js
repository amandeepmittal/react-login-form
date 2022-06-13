import { useTranslation } from 'react-i18next';

import './App.css';

const langs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
};

function App() {
  const { t, i18n } = useTranslation();

  const handleSubmit = event => {
    event.preventDefault();
    alert('Your form is submitted!');
  };

  return (
    <div className="app">
      <div className="form">
        <h1>{t('formTitle')}</h1>
        <p className="subtitle">{t('description')}</p>
        <div>
          Choose a language to continue:{' '}
          {Object.keys(langs).map(lang => (
            <button
              key={lang}
              style={{
                fontWeight: i18n.resolvedLanguage === lang ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lang)}
            >
              {langs[lang].nativeName}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input type="text" name="email" required />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <button className="button-container" type="submit">
            <p className="button-text">{t('buttonText')}</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
