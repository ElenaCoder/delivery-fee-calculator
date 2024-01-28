export function isDuringRushHours(date: Date): boolean {
    const currentHour: number = date.getHours();
    const isFriday: boolean = date.getDay() === 5;

    const rushHoursStart: number = 15;
    const rushHoursEnd: number = 19;

    return (
        isFriday && rushHoursStart <= currentHour && currentHour < rushHoursEnd
    );
}
