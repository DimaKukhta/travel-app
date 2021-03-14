export type TCountries = 'Australia' | 'Canada' | 'Germany' | 'France' | 'Spain' | 'Italy' | 'Japan' | 'Switzerland';

export enum currencies {
  Australia = 'AUD',
  Canada = 'CAD',
  Germany = 'EUR',
  France = 'EUR',
  Spain = 'EUR',
  Italy = 'EUR',
  Japan = 'JPY',
  Switzerland = 'CHF',
}

export enum capitals {
  Australia = 'Canberra',
  Canada = 'Ottawa',
  Germany = 'Berlin',
  France = 'Paris',
  Spain = 'Madrid',
  Italy = 'Rome',
  Japan = 'Tokyo',
  Switzerland = 'Bern',
}

export enum countryCodes {
  Australia = 'AU',
  Canada = 'CA',
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

export const languages: object[] = [
  { key: 'en', value: 'en', text: 'English' },
  { key: 'ru', value: 'ru', text: 'Русский' },
  { key: 'by', value: 'by', text: 'Беларуская' },
]