import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSelector">
      <Button onClick={() => changeLanguage('de')}>de</Button>
      <Button onClick={() => changeLanguage('en')}>en</Button>
    </div>
  );
}
