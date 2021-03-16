interface Itranslate {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    }
  };
  
};

const translate: Itranslate = {
  header: {
    select: {
      en: 'Select language',
      ru: 'Выберите язык',
      be: 'Выбраць мову',
    },
    search: {
      en: 'Search...',
      ru: 'Поиск...',
      be: 'Пошук...',
    }, 
    singIn: {
      en: 'Sign in',
      ru: 'Войти',
      be: 'Увайсцi',
    },
    registration: {
      en: 'Registration',
      ru: 'Регистрация',
      be: 'Рэгiстрацыя',
    },
  }
}

export default translate;