export function getCurrentLang(): string {
  const currentLangFromLS = localStorage.getItem('lang');
  return currentLangFromLS ? currentLangFromLS : 'en';
}