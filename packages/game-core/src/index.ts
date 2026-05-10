/**
 * Пять Начал (стихий) мира Царства Пяти Начал.
 * Порядок соответствует каноническому циклу У-Синь.
 */
const ELEMENTS = ['Дерево', 'Огонь', 'Земля', 'Металл', 'Вода'] as const;

/**
 * Возвращает русское название стихии по её индексу.
 * @param index — число от 0 до 4
 * @returns название стихии
 * @throws RangeError если индекс вне допустимого диапазона
 */
export function getElementName(index: number): string {
  if (index < 0 || index >= ELEMENTS.length) {
    throw new RangeError(`Индекс стихии должен быть от 0 до ${ELEMENTS.length - 1}, получено ${index}`);
  }

  const name = ELEMENTS[index];
  if (!name) {
    throw new Error(`Не удалось найти стихию с индексом ${index}`);
  }
  return name;
}

export { ELEMENTS };
