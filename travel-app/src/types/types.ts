export type TCountries = 'Australia' | 'Cambodia' | 'Germany' | 'France' | 'Spain' | 'Italy' | 'Japan' | 'Switzerland';

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

export enum capitals {
  Australia = 'Canberra',
  Cambodia = 'Phnom Penh',
  Germany = 'Berlin',
  France = 'Paris',
  Spain = 'Madrid',
  Italy = 'Rome',
  Japan = 'Tokyo',
  Switzerland = 'Bern',
}

export enum countryCodes {
  Australia = 'AU',
  Cambodia = 'KH',
  Germany = 'DE',
  France = 'FR',
  Spain = 'ES',
  Italy = 'IT',
  Japan = 'JP',
  Switzerland = 'CH',
}

export enum daysOfWeek {
  Sun, Mon, Tue, Wen, Thu, Fri, Sat, 
}

export enum months {
  Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Okt, Nov, Dec,
}

export const languagesOptions: object[] = [
  { key: 'en', value: 'en', text: 'English' },
  { key: 'ru', value: 'ru', text: 'Русский' },
  { key: 'be', value: 'be', text: 'Беларуская' },
]


// export type languages = 'en' | 'ru' | 'be';
// export type Tlanguages = keyof(typeof languages);
// export interface languages {[key: string]: string };
