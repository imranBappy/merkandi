// components/Translate.js
import { useState, useEffect } from 'react';

const Translate = ({ auto, lang }) => {
  const [resultText, setResultText] = useState('');

  useEffect(() => {
    const translate = async () => {
      try {
        const response = await fetch(
          `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURI(auto)}`
        );

        const data = await response.json();
        setResultText(data[0][0][0]);
      } catch (error) {
        console.error('Translation error:', error);
      }
    };

    translate(); // Trigger translation when lang prop changes
  }, [auto, lang]);

  return (
    <div>
      <p>{resultText}</p>
    </div>
  );
};

export default Translate;
