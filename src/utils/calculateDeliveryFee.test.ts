import { calculateDeliveryFee } from './calculateDeliveryFee.ts';

describe('calculateDeliveryFee', () => {
    const testCases = [
      // Friday, not rush
      { values: { CartValue: '8.90', DeliveryDistance: '1499', AmountOfItems: '4', OrderTime: '2024-02-02T12:00:00Z' }, expected: 4.1, dayOfWeek: 'Friday', time: '14:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '8.90', DeliveryDistance: '1500', AmountOfItems: '4', OrderTime: '2024-02-02T12:00:00Z' }, expected: 4.1, dayOfWeek: 'Friday', time: '14:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '8.90', DeliveryDistance: '1501', AmountOfItems: '4', OrderTime: '2024-02-02T12:00:00Z' }, expected: 5.1, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '1000', AmountOfItems: '4', OrderTime: '2024-02-02T15:00:00Z' }, expected: 2.4, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '1500', AmountOfItems: '4', OrderTime: '2024-02-02T15:00:00Z' }, expected: 3.6, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '2000', AmountOfItems: '4', OrderTime: '2024-02-02T15:00:00Z' }, expected: 4.8, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '1000', AmountOfItems: '5', OrderTime: '2024-02-02T15:00:00Z' }, expected: 3, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '1000', AmountOfItems: '10', OrderTime: '2024-02-02T15:00:00Z' }, expected: 6, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '1000', AmountOfItems: '13', OrderTime: '2024-02-02T15:00:00Z' }, expected: 9.2, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '1000', AmountOfItems: '14', OrderTime: '2024-02-02T15:00:00Z' }, expected: 9.8, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '200', DeliveryDistance: '1000', AmountOfItems: '5', OrderTime: '2024-02-02T15:00:00Z' }, expected: 0, dayOfWeek: 'Friday', time: '17:00 PM', rushStatus: 'Not Rush' },

      // Saturday, not rush
      { values: { CartValue: '10', DeliveryDistance: '800', AmountOfItems: '5', OrderTime: '2024-02-03T15:00:00Z' }, expected: 2.5, dayOfWeek: 'Saturday', time: '15:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '11', DeliveryDistance: '1000', AmountOfItems: '10', OrderTime: '2024-02-03T15:00:00Z' }, expected: 5, dayOfWeek: 'Saturday', time: '15:00 PM', rushStatus: 'Not Rush' },

      // Sunday, not rush
      { values: { CartValue: '8.90', DeliveryDistance: '1499', AmountOfItems: '4', OrderTime: '2024-02-04T15:00:00Z' }, expected: 4.1, dayOfWeek: 'Sunday', time: '15:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '15', DeliveryDistance: '2000', AmountOfItems: '14', OrderTime: '2024-02-04T15:00:00Z' }, expected: 10.2, dayOfWeek: 'Sunday', time: '15:00 PM', rushStatus: 'Not Rush' },

      // Monday, not rush
      { values: { CartValue: '15', DeliveryDistance: '1500', AmountOfItems: '5', OrderTime: '2024-02-05T15:00:00Z' }, expected: 3.5, dayOfWeek: 'Monday', time: '15:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '200', DeliveryDistance: '1000', AmountOfItems: '5', OrderTime: '2024-02-05T15:00:00Z' }, expected: 0, dayOfWeek: 'Monday', time: '15:00 PM', rushStatus: 'Not Rush' },

      // Tuesday, not rush
      { values: { CartValue: '15', DeliveryDistance: '1500', AmountOfItems: '5', OrderTime: '2024-02-06T15:00:00Z' }, expected: 3.5, dayOfWeek: 'Tuesday', time: '15:00 PM', rushStatus: 'Not Rush' },
      { values: { CartValue: '8.90', DeliveryDistance: '1500', AmountOfItems: '5', OrderTime: '2024-02-06T15:01:00Z' }, expected: 4.6, dayOfWeek: 'Tuesday', time: '15:01 PM', rushStatus: 'Not Rush' },
    ];

    testCases.forEach(({ values, expected, dayOfWeek, time, rushStatus }) => {
      const comment = `${dayOfWeek} at ${time} - ${rushStatus} - Fee: ${expected}€`;
      test(comment, () => {
        const fee = calculateDeliveryFee(values);
        expect(fee).toBe(expected);
      });
    });
  });