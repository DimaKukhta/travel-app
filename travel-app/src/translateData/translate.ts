interface Itranslate {
  [key: string]: {
    [key: string]: {
      [key: string]: string ;
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
    }
  }
}

export default translate;
