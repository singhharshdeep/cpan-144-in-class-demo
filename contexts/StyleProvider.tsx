import { createContext, ReactNode, useState } from "react";

interface IStyleContext {
  bgColor: string;
  currentFont: string;
  isDarkModeEnabled: boolean;
  setIsDarkModeEnabled: (isEnabled: boolean) => void;
}

export const StyleContext = createContext<IStyleContext>({
  bgColor: "",
  currentFont: "",
  isDarkModeEnabled: false,
  setIsDarkModeEnabled: (_: boolean) => {},
});

export default function StyleProvider({ children }: { children: ReactNode }) {
  const bgColor = "white";
  const currentFont = "Ariel";
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  return (
    <StyleContext.Provider
      value={{
        bgColor,
        currentFont,
        isDarkModeEnabled,
        setIsDarkModeEnabled,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
}
