/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import MensajesIngles from "../../translations/en.json";
import MensajesEspañol from "../../translations/es.json";
import { IntlProvider, IntlConfig } from "react-intl";
import { createContext, useState, ReactNode } from "react";

interface LangContextProps {
  establecerLenguaje: (lenguaje: string) => void;
}

export const langContext = createContext<LangContextProps>({ establecerLenguaje: () => {} });

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider = ({ children }: LangProviderProps) => {
  let localePorDefecto: string | undefined;
  let mensajesPorDefecto: any;
  const lang = localStorage.getItem("lang");

  if (lang) {
    localePorDefecto = lang;

    if (lang === "es-ES") {
      mensajesPorDefecto = MensajesEspañol;
    } else if (lang === "en-EN") {
      mensajesPorDefecto = MensajesIngles;
    } else {
      localePorDefecto = "en-EN";
      mensajesPorDefecto = MensajesIngles;
    }
  }

  const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
  const [locale, establecerLocale] = useState<string>(localePorDefecto || "en-EN");

  const establecerLenguaje = (lenguaje: string) => {
    switch (lenguaje) {
      case "es-ES":
        establecerMensajes(MensajesEspañol);
        establecerLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      case "en-EN":
        establecerMensajes(MensajesIngles);
        establecerLocale("en-EN");
        localStorage.setItem("lang", "en-EN");
        break;
      default:
        establecerMensajes(MensajesIngles);
        establecerLocale("en-EN");
        localStorage.setItem("lang", "en-EN");
    }
  };

  const intlConfig: IntlConfig = {
    locale,
    messages: mensajes,
  };

  return (
    <langContext.Provider value={{ establecerLenguaje }}>
      <IntlProvider {...intlConfig}>{children}</IntlProvider>
    </langContext.Provider>
  );
};
