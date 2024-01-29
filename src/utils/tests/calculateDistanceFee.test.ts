import { calculateDistanceFee } from '../calculateDistanceFee.ts';

describe('calculateDistanceFee', () => {
    const testCases = [
        { deliveryDistance: 800, expected: 2 },
        { deliveryDistance: 1000, expected: 2 },
        { deliveryDistance: 1499, expected: 3 },
        { deliveryDistance: 1500, expected: 3 },
        { deliveryDistance: 1501, expected: 4 },
        { deliveryDistance: 2000, expected: 4 },
        { deliveryDistance: 2001, expected: 5 },
    ];

    testCases.forEach(({ deliveryDistance, expected }) => {
        test(`Calculate distance fee for ${deliveryDistance} meters`, () => {
            const fee = calculateDistanceFee(deliveryDistance);
            expect(fee).toBe(expected);
        });
    });
});
