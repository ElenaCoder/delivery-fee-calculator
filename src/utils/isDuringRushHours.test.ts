import { isDuringRushHours } from './isDuringRushHours';

// Test cases for isDuringRushHours function
describe('isDuringRushHours', () => {
    const testCases = [
    { dateString: '2024-02-04T15:00:00', comment: 'Sunday at 3:00 PM - Not rush hours', expected: false },
    { dateString: '2024-02-04T03:00:00', comment: 'Sunday at 3:00 AM - Not rush hours', expected: false },
    { dateString: '2024-02-04T19:00:00', comment: 'Sunday at 7:00 PM - Not rush hours', expected: false },
    { dateString: '2024-02-04T07:00:00', comment: 'Sunday at 7:00 AM - Not rush hours', expected: false },
    { dateString: '2024-02-04T15:01:00', comment: 'Sunday at 3:01 PM - Not rush hours', expected: false },
    { dateString: '2024-02-04T14:59:00', comment: 'Sunday at 2:59 PM - Not rush hours', expected: false },
    { dateString: '2024-02-04T03:01:00', comment: 'Sunday at 3:01 AM - Not rush hours', expected: false },
    { dateString: '2024-02-04T02:59:00', comment: 'Sunday at 2:59 AM - Not rush hours', expected: false },
    { dateString: '2024-02-04T19:01:00', comment: 'Sunday at 7:01 PM - Not rush hours', expected: false },
    { dateString: '2024-02-04T18:59:00', comment: 'Sunday at 6:59 PM - Not rush hours', expected: false },
    { dateString: '2024-02-04T07:01:00', comment: 'Sunday at 7:01 AM - Not rush hours', expected: false },
    { dateString: '2024-02-04T06:59:00', comment: 'Sunday at 6:59 AM - Not rush hours', expected: false },

    { dateString: '2024-02-05T15:00:00', comment: 'Monday at 3:00 PM - Not rush hours', expected: false },
    { dateString: '2024-02-05T03:00:00', comment: 'Monday at 3:00 AM - Not rush hours', expected: false },
    { dateString: '2024-02-05T19:00:00', comment: 'Monday at 7:00 PM - Not rush hours', expected: false },
    { dateString: '2024-02-05T07:00:00', comment: 'Monday at 7:00 AM - Not rush hours', expected: false },
    { dateString: '2024-02-05T15:01:00', comment: 'Monday at 3:01 PM - Not rush hours', expected: false },
    { dateString: '2024-02-05T14:59:00', comment: 'Monday at 2:59 PM - Not rush hours', expected: false },
    { dateString: '2024-02-05T03:01:00', comment: 'Monday at 3:01 AM - Not rush hours', expected: false },
    { dateString: '2024-02-05T02:59:00', comment: 'Monday at 2:59 AM - Not rush hours', expected: false },
    { dateString: '2024-02-05T19:01:00', comment: 'Monday at 7:01 PM - Not rush hours', expected: false },
    { dateString: '2024-02-05T18:59:00', comment: 'Monday at 6:59 PM - Not rush hours', expected: false },
    { dateString: '2024-02-05T07:01:00', comment: 'Monday at 7:01 AM - Not rush hours', expected: false },
    { dateString: '2024-02-05T06:59:00', comment: 'Monday at 6:59 AM - Not rush hours', expected: false },

    { dateString: '2024-01-30T15:00:00', comment: 'Tuesday at 3:00 PM - Not rush hours', expected: false },
    { dateString: '2024-01-30T03:00:00', comment: 'Tuesday at 3:00 AM - Not rush hours', expected: false },
    { dateString: '2024-01-30T19:00:00', comment: 'Tuesday at 7:00 PM - Not rush hours', expected: false },
    { dateString: '2024-01-30T07:00:00', comment: 'Tuesday at 7:00 AM - Not rush hours', expected: false },
    { dateString: '2024-01-30T15:01:00', comment: 'Tuesday at 3:01 PM - Not rush hours', expected: false },
    { dateString: '2024-01-30T14:59:00', comment: 'Tuesday at 2:59 PM - Not rush hours', expected: false },
    { dateString: '2024-01-30T03:01:00', comment: 'Tuesday at 3:01 AM - Not rush hours', expected: false },
    { dateString: '2024-01-30T02:59:00', comment: 'Tuesday at 2:59 AM - Not rush hours', expected: false },
    { dateString: '2024-01-30T19:01:00', comment: 'Tuesday at 7:01 PM - Not rush hours', expected: false },
    { dateString: '2024-01-30T18:59:00', comment: 'Tuesday at 6:59 PM - Not rush hours', expected: false },
    { dateString: '2024-01-30T07:01:00', comment: 'Tuesday at 7:01 AM - Not rush hours', expected: false },
    { dateString: '2024-01-30T06:59:00', comment: 'Tuesday at 6:59 AM - Not rush hours', expected: false },

    { dateString: '2024-01-31T15:00:00', comment: 'Wednesday at 3:00 PM - Not rush hours', expected: false },
    { dateString: '2024-01-31T03:00:00', comment: 'Wednesday at 3:00 AM - Not rush hours', expected: false },
    { dateString: '2024-01-31T19:00:00', comment: 'Wednesday at 7:00 PM - Not rush hours', expected: false },
    { dateString: '2024-01-31T07:00:00', comment: 'Wednesday at 7:00 AM - Not rush hours', expected: false },
    { dateString: '2024-01-31T15:01:00', comment: 'Wednesday at 3:01 PM - Not rush hours', expected: false },
    { dateString: '2024-01-31T14:59:00', comment: 'Wednesday at 2:59 PM - Not rush hours', expected: false },
    { dateString: '2024-01-31T03:01:00', comment: 'Wednesday at 3:01 AM - Not rush hours', expected: false },
    { dateString: '2024-01-31T02:59:00', comment: 'Wednesday at 2:59 AM - Not rush hours', expected: false },
    { dateString: '2024-01-31T19:01:00', comment: 'Wednesday at 7:01 PM - Not rush hours', expected: false },
    { dateString: '2024-01-31T18:59:00', comment: 'Wednesday at 6:59 PM - Not rush hours', expected: false },
    { dateString: '2024-01-31T07:01:00', comment: 'Wednesday at 7:01 AM - Not rush hours', expected: false },
    { dateString: '2024-01-31T06:59:00', comment: 'Wednesday at 6:59 AM - Not rush hours', expected: false },

    { dateString: '2024-02-01T15:00:00', comment: 'Thursday at 3:00 PM - Not rush hours', expected: false },
    { dateString: '2024-02-01T03:00:00', comment: 'Thursday at 3:00 AM - Not rush hours', expected: false },
    { dateString: '2024-02-01T19:00:00', comment: 'Thursday at 7:00 PM - Not rush hours', expected: false },
    { dateString: '2024-02-01T07:00:00', comment: 'Thursday at 7:00 AM - Not rush hours', expected: false },
    { dateString: '2024-02-01T15:01:00', comment: 'Thursday at 3:01 PM - Not rush hours', expected: false },
    { dateString: '2024-02-01T14:59:00', comment: 'Thursday at 2:59 PM - Not rush hours', expected: false },
    { dateString: '2024-02-01T03:01:00', comment: 'Thursday at 3:01 AM - Not rush hours', expected: false },
    { dateString: '2024-02-01T02:59:00', comment: 'Thursday at 2:59 AM - Not rush hours', expected: false },
    { dateString: '2024-02-01T19:01:00', comment: 'Thursday at 7:01 PM - Not rush hours', expected: false },
    { dateString: '2024-02-01T18:59:00', comment: 'Thursday at 6:59 PM - Not rush hours', expected: false },
    { dateString: '2024-02-01T07:01:00', comment: 'Thursday at 7:01 AM - Not rush hours', expected: false },
    { dateString: '2024-02-01T06:59:00', comment: 'Thursday at 6:59 AM - Not rush hours', expected: false },

      { dateString: '2024-02-02T15:00:00', comment: 'Friday at 3:00 PM - Rush hours', expected: true },
      { dateString: '2024-02-02T03:00:00', comment: 'Friday at 3:00 AM - Not rush hours', expected: false },
      { dateString: '2024-02-02T19:00:00', comment: 'Friday at 7:00 PM - Not rush hours', expected: false },
      { dateString: '2024-02-02T07:00:00', comment: 'Friday at 7:00 AM - Not rush hours', expected: false },
      { dateString: '2024-02-02T15:01:00', comment: 'Friday at 3:01 PM - Rush hours', expected: true },
      { dateString: '2024-02-02T14:59:00', comment: 'Friday at 2:59 PM - Not rush hours', expected: false },
      { dateString: '2024-02-02T03:01:00', comment: 'Friday at 3:01 AM - Not rush hours', expected: false },
      { dateString: '2024-02-02T02:59:00', comment: 'Friday at 2:59 AM - Not rush hours', expected: false },
      { dateString: '2024-02-02T19:01:00', comment: 'Friday at 7:01 PM - Not rush hours', expected: false },
      { dateString: '2024-02-02T18:59:00', comment: 'Friday at 6:59 PM - Rush hours', expected: true },
      { dateString: '2024-02-02T07:01:00', comment: 'Friday at 7:01 AM - Not rush hours', expected: false },
      { dateString: '2024-02-02T06:59:00', comment: 'Friday at 6:59 AM - Not rush hours', expected: false },

      { dateString: '2024-02-03T15:00:00', comment: 'Saturday at 3:00 PM - Not rush hours', expected: false },
      { dateString: '2024-02-03T03:00:00', comment: 'Saturday at 3:00 AM - Not rush hours', expected: false },
      { dateString: '2024-02-03T19:00:00', comment: 'Saturday at 7:00 PM - Not rush hours', expected: false },
      { dateString: '2024-02-03T07:00:00', comment: 'Saturday at 7:00 AM - Not rush hours', expected: false },
      { dateString: '2024-02-03T15:01:00', comment: 'Saturday at 3:01 PM - Not rush hours', expected: false },
      { dateString: '2024-02-03T14:59:00', comment: 'Saturday at 2:59 PM - Not rush hours', expected: false },
      { dateString: '2024-02-03T03:01:00', comment: 'Saturday at 3:01 AM - Not rush hours', expected: false },
      { dateString: '2024-02-03T02:59:00', comment: 'Saturday at 2:59 AM - Not rush hours', expected: false },
      { dateString: '2024-02-03T19:01:00', comment: 'Saturday at 7:01 PM - Not rush hours', expected: false },
      { dateString: '2024-02-03T18:59:00', comment: 'Saturday at 6:59 PM - Not rush hours', expected: false },
      { dateString: '2024-02-03T07:01:00', comment: 'Saturday at 7:01 AM - Not rush hours', expected: false },
      { dateString: '2024-02-03T06:59:00', comment: 'Saturday at 6:59 AM - Not rush hours', expected: false },

    ];

    testCases.forEach(({ dateString, comment, expected }) => {
      test(comment, () => {
        const date = new Date(dateString);
        expect(isDuringRushHours(date)).toBe(expected);
      });
    });
});
