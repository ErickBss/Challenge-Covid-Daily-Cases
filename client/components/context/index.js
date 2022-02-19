import { createContext, useState } from "react";

export const PreferencesContext = createContext();

export default function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState({
    cases: "count",
    dateValues: "2021-03-22",
  });

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
