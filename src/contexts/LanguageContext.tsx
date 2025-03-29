import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": {
    zh: "首页",
    en: "Home",
  },
  "nav.about": {
    zh: "关于我们",
    en: "About Us",
  },
  "nav.about.company": {
    zh: "公司简介",
    en: "Company Profile",
  },
  "nav.about.team": {
    zh: "团队介绍",
    en: "Our Team",
  },
  "nav.about.capabilities": {
    zh: "企业能力",
    en: "Capabilities",
  },
  "nav.solutions": {
    zh: " 解决方案",
    en: " Solutions",
  },
  "nav.solutions.tokenization": {
    zh: " 资产数字化",
    en: " Tokenization",
  },
  "nav.solutions.technology": {
    zh: "核心技术",
    en: "Core Technology",
  },
  "nav.solutions.features": {
    zh: "产品功能",
    en: "Features",
  },
  "nav.case-studies": {
    zh: "案例研究",
    en: "Case Studies",
  },
  "nav.certifications": {
    zh: "资质认证",
    en: "Certifications",
  },
  "nav.contact": {
    zh: "联系我们",
    en: "Contact Us",
  },
  // Common buttons
  "button.contact": {
    zh: "联系我们",
    en: "Contact Us",
  },
  "nav.pages": {
    zh: " 页面",
    en: " Pages",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
