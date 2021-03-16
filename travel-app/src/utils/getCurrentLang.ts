export function getCurrentLang(): string {
  const currentLangFromLS = localStorage.getItem('lang');
  return currentLangFromLS ? currentLangFromLS : 'en';
  // const keyArray = Object.keys(languages)
  // return (currentLangFromLS in languages) ? currentLangFromLS : 'en';
  // return currentLangFromLS : 'en';
  // return 'en';
  // return currentLangFromLS || 'en';
}