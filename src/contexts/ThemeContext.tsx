"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
}

interface Theme {
  name: string;
  colors: ThemeColors;
}

const themes: Theme[] = [
  {
    name: "default",
    colors: {
      primary: "bg-slate-900",
      secondary: "bg-slate-800",
      accent: "bg-pink-500",
      text: "text-white",
    },
  },
  {
    name: "rose",
    colors: {
      primary: "bg-rose-900",
      secondary: "bg-rose-800",
      accent: "bg-rose-400",
      text: "text-white",
    },
  },
  {
    name: "purple",
    colors: {
      primary: "bg-purple-900",
      secondary: "bg-purple-800",
      accent: "bg-purple-400",
      text: "text-white",
    },
  },
  {
    name: "emerald",
    colors: {
      primary: "bg-emerald-900",
      secondary: "bg-emerald-800",
      accent: "bg-emerald-400",
      text: "text-white",
    },
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(0);

  const switchTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: themes[themeIndex],
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
