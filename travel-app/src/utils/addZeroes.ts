export function addZeroes(num: string | number): string {
  return +num < 10 ? `0${num}` : `${num}`;
}