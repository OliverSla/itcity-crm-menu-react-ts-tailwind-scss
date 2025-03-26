'use client'

import React from 'react'
import Script from 'next/script'



const ThemeInitializer = () => {
  // Script musí byť `beforeInteractive` aby sa spustil pred renderovaním stránky
  return (
    <>
      <Script
        id="theme-initializer"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                // Skontrolujeme localStorage a preferovaný systémový režim
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                // Použijeme uloženú tému alebo preferovaný systémový režim
                let theme = 'light';
                if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                  theme = 'dark';
                }
                
                // Aplikujeme triedu na hlavný element
                document.documentElement.classList.add(theme);
              } catch (e) {
                // V prípade chyby (napr. localStorage nie je dostupný)
                console.error('Error setting initial theme:', e);
              }
            })();
          `
        }}
      />
    </>
  )
}

export default ThemeInitializer
