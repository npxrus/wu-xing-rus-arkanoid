import { describe, it, expect } from 'vitest';
import { getElementName, getElementIndex } from '../src/utils/elements';

describe('Game Core - Базовые утилиты', () => {
  it('getElementName возвращает правильное имя для числа 0', () => {
    const result = getElementName(0);
    expect(result).toBe('Дерево');
  });

  it('getElementName возвращает правильное имя для числа 1', () => {
    const result = getElementName(1);
    expect(result).toBe('Огонь');
  });

  it('getElementName выбрасывает ошибку для неверного индекса', () => {
    expect(() => getElementName(-1)).toThrow();
    expect(() => getElementName(5)).toThrow();
  });

  it('getElementIndex возвращает правильный индекс для строки Дерево', () => {
    const result = getElementIndex('Дерево');
    expect(result).toBe(0);
  });

  it('getElementIndex возвращает правильный индекс для строки Огонь', () => {
    const result = getElementIndex('Огонь');
    expect(result).toBe(1);
  });

  it('getElementIndex выбрасывает ошибку для несуществующего элемента', () => {
    expect(() => getElementIndex('Воздух')).toThrow();
  });
});
