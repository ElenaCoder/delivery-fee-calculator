import { calculateItemsSurcharge } from '../calculateItemsSurcharge.ts';

describe('calculateItemsSurcharge', () => {
    const testCases = [
      { amountOfItems: 4, expected: 0 },
      { amountOfItems: 5, expected: 0.5 },
      { amountOfItems: 10, expected: 3 },
      { amountOfItems: 13, expected: 5.7 },
      { amountOfItems: 14, expected: 6.2 },
      { amountOfItems: 0, expected: 0 },
      { amountOfItems: 1, expected: 0 },
    ];

    testCases.forEach(({ amountOfItems, expected }) => {
      test(`Items: ${amountOfItems} - Surcharge: ${expected}`, () => {
        const result = calculateItemsSurcharge(amountOfItems);
        expect(result).toBe(expected);
      });
    });
  });