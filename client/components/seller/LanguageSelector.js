// components/LanguageSelector.js
import React from 'react';

const LanguageSelector = ({ onLanguageChange, onSetDefaultLanguage }) => {
  return (
    <div className='gap-4 flex'>
        <button onClick={onSetDefaultLanguage}>Default</button>
        <button onClick={() => onLanguageChange('ar')}>Arabic</button>
        <button onClick={() => onLanguageChange('bn')}>Bengali</button>      
    </div>
  );
};

export default LanguageSelector;
