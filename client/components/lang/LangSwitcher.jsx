"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";
const LanguageSwitcher = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languageConfig, setLanguageConfig] = useState();

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang) => () => {
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    window.location.reload();
    if (props.onChange) {
      props.onChange(lang);
    }
  };

  return (
    <div className="py-0">
      {languageConfig.languages.map((ld, i) => (
        <>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld) ? (
            <span
              key={`l_s_${ld}`}
              className="mx-3 text-blue-900 font-semibold"
            >
              {ld.title}
            </span>
          ) : (
            <p
              key={`l_s_${ld}`}
              onClick={switchLanguage(ld.name)}
              className="text-gray-700 cursor-pointer block px-4 py-2 text-sm hover:bg-[#1c6b8c] hover:text-white"
            >
              {ld.title}
            </p>
          )}
        </>
      ))}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
