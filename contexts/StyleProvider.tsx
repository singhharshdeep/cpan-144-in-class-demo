import { createContext, ReactNode, useState } from "react";

export const StyleContext = createContext<{
  bgColor: string;
  currentFont: string;
  isDarkModeEnabled: boolean;
  setIsDarkModeEnabled: (isEnabled: boolean) => void;
}>({
  bgColor: "",
  currentFont: "",
  isDarkModeEnabled: false,
  setIsDarkModeEnabled: (_: boolean) => {},
});

export default function StyleProvider({ children }: { children: ReactNode }) {
  const bgColor = "white";
  const currentFont = "Ariel";
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

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
