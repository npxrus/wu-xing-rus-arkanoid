/**
 * Пять Начал (стихий) мира Царства Пяти Начал.
 * Порядок соответствует каноническому циклу У-Син.
 */
export const ELEMENTS = ['Дерево', 'Огонь', 'Земля', 'Металл', 'Вода'] as const;

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

export function getElementIndex(name: string): number {
  const index = ELEMENTS.indexOf(name as (typeof ELEMENTS)[number]);
  if (index === -1) {
    throw new Error(`Стихия "${name}" не найдена`);
  }
  return index;
}
