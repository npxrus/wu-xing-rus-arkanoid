import { describe, it, expect } from 'vitest';
import { getElementName } from '../src/index';

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
});
