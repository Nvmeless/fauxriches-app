import React, { Children, createContext, useContext } from "react";

const TranslateContext = createContext(null);

const TranslateProvider = ({ translation, children }) => {
  return (
    <TranslateContext.Provider value={translation}>
      {children}
    </TranslateContext.Provider>
  );
};

export { TranslateContext, TranslateProvider };
