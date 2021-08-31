/**
 * @param size: number
 * @returns pathWidht: number
 * @description Medal path width
 *
 */
export function getPathWidth(size: number): number {
  let width = 1;
  if (size >= 150) {
    width = 10;
  } else if (size >= 50 && size < 150) {
    width = 4;
  } else if (size >= 30 && size < 50) {
    width = 2;
  }
  return width;
}
