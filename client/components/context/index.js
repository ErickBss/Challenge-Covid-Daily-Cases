import { createContext, useState } from "react";

export const PreferencesContext = createContext();

export default function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState([]);

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        setPreferences,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}
