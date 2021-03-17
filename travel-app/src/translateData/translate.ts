interface Itranslate {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    }
  },
};

interface IWidget {
  [key: string]: {
    [key: string]: {
      [key: string]: string[],
    },
  },
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
    logout: {
      en: 'Logout',
      ru: 'Выход',
      be: 'Выхад',
    },
    registration: {
      en: 'Registration',
      ru: 'Регистрация',
      be: 'Рэгiстрацыя',
    },
  },
  footer: {
    create: {
      en: 'Created by',
      ru: 'Сделано',
      be: 'Створана',
    },
    for: {
      en: 'for',
      ru: 'для',
      be: 'для',
    }
  },
  CountriesCards: {
    emptySearch: {
      en: 'No data available for this search query...',
      ru: 'По вашему поисковому запросу ничего не нашлось...',
      be: 'Няма дадзеных па вашаму запросу...',
    }
  },
  registration: {
    head: {
      en: 'Registration',
      ru: 'Регистрация',
      be: 'Рэгістрацыя',
    },
    avatar: {
      en: 'Add photo',
      ru: 'Добавить фото',
      be: 'Дадаць фота',
    },
    login: {
      en: 'Login',
      ru: 'Логин',
      be: 'Логін',
    },
    password: {
      en: 'Password',
      ru: 'Пароль',
      be: 'Пароль',
    },
    submit: {
      en: 'Submit',
      ru: 'Зарегистрироваться',
      be: 'Зарэгістрыраваць',
    },
  },
  signIn: {
    head: {
      en: 'Sign In',
      ru: 'Войти',
      be: 'Уваход',
    },
    login: {
      en: 'Login',
      ru: 'Логин',
      be: 'Логін',
    },
    password: {
      en: 'Password',
      ru: 'Пароль',
      be: 'Пароль',
    },
    submit: {
      en: 'Submit',
      ru: 'Войти',
      be: 'Уваход',
    },
  },
  widget: {
    weather: {
      en: 'Weather',
      ru: 'Погода',
      be: 'Пагода',
    },  
  },
}


export const translateWidget: IWidget = {
  clock: {
    daysOfWeek: {
      en: ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"],
      ru: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      be: ["Нядзеля", "Пянядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"],
    },
    months: {
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      be: ["Студзень", "Люты", "Сакавік", "Красавік", "Май", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"],
    },
  },  
}

export const translateCurrencies: {
  [key: string]: {
    [key: string]: string
  }
} = {
  AUD: {
    en: 'AUD',
    ru: 'доллар Австралии',
    be: 'даляр Аустраліі',
  },
  KHR: {
    en: 'KHR',
    ru: 'Камбоджийский риель',
    be: 'Камбаджыйскі рыель',
  },
  EUR: {
    en: 'EUR',
    ru: 'Евро',
    be: 'Еўра',
  },
  JPY: {
    en: 'JPY',
    ru: 'Японская иена',
    be: 'Японская ена',
  },
  CHF: {
    en: 'CHF',
    ru: 'Швейцарский франк',
    be: 'Швейцарскі франк',
  },
}

export enum currencies {
  Australia = 'AUD',
  Cambodia = 'KHR',
  Germany = 'EUR',
  France = 'EUR',
  Spain = 'EUR',
  Italy = 'EUR',
  Japan = 'JPY',
  Switzerland = 'CHF',
}

export default translate;
