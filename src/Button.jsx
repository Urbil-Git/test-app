import React, { useState } from "react";

const Button = ({ language }) => {
  const [lang, setLanguage] = useState(language);
  return (
    <div
    /*onClick={() => {
        setLanguage(lang === "es" ? "en" : "es");
      }}*/
    >
      <header>
        <button
          onClick={() => {
            console.log("click");
            setLanguage(lang === "es" ? "en" : "es");
          }}
          data-testid="lgbutton"
        >
          {lang === "es" ? "cambia de idioma" : "change language"}
        </button>
      </header>
    </div>
  );
};

export default Button;
