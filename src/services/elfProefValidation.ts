import { ElfproefType } from '@/types/ElfProefType';

export function elfProefValidation(value: string, type: ElfproefType): boolean {
  let returnValue = false;
  if (!value || value?.length === 0) {
    return true;
  }
  if (value === '00000000000' || value.length !== 9) {
    return false;
  }
  const values = value.split('');
  const firstCharacter = parseInt(values[0], 10);
  const lastCharacter = parseInt(values[values.length - 1], 10);
  const [a, b, c, d, e, f, g, h, i] = values.map((char: string) => parseInt(char, 10));
  let result = 0;

  if (type === ElfproefType.bsn) {
    result = 9 * a + 8 * b + 7 * c + 6 * d + 5 * e + 4 * f + 3 * g + 2 * h + -1 * i;
    returnValue = result > 0 && result % 11 === 0;
  }
  else if (type === ElfproefType.own) {
    result = 9 * a + 8 * b + 7 * c + 6 * d + 5 * e + 4 * f + 3 * g + 2 * h;
    returnValue = result > 0 && firstCharacter === 1 && result % 11 === lastCharacter + 5;
  }
  else {
    returnValue = false;
  }

  return returnValue;
}
