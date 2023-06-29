/**
 * PAD Left completa a string com caracteres a esquerda
 * @param str string
 * @param size repetições máxima
 * @param char elemento que será repetido
 * @returns
 */
export function padLeft(str: string, size: number, char?: string): string {
  if (!char) {
    char = '0';
  }
  let s = str + '';
  while (s.length < size) {
    s = char + s;
  }
  return s;
}
