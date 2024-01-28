import { FormValues } from '../components/DeliveryFeeCalculator';
import { isDuringRushHours } from './isDuringRushHours';
import { calculateItemsSurcharge } from './calculateItemsSurcharge';
import { calculateDistanceFee } from './calculateDistanceFee';

export const calculateDeliveryFee = (values: FormValues): number => {
    const cartValue: number = parseFloat(values.CartValue);
    const deliveryDistance: number = parseInt(values.DeliveryDistance);
    const amountOfItems: number = parseInt(values.AmountOfItems);
    const orderTime: Date = new Date(values.OrderTime);

    const SMALL_ORDER_THRESHOLD: number = 10;
    const MAX_TOTAL_FEE: number = 15;
    const RUSH_TIME_MULTIPLIER: number = 1.2;
    const FREE_DELIVERY_CART_VALUE: number = 200;

    // Rule 6: Friday rush
    const isRushTime: boolean = isDuringRushHours(orderTime);

    // Rule 5: Cart value 200€ or more - free delivery
    if (cartValue >= FREE_DELIVERY_CART_VALUE) {
        return 0;
    }

    // Rule 1: Small order surcharge
    const smallOrderSurcharge: number = parseFloat(
        Math.max(0, SMALL_ORDER_THRESHOLD - cartValue).toFixed(2),
    );

    // Rule 2: Distance fee
    const distanceFee: number = calculateDistanceFee(deliveryDistance);

    // Rule 3: Number of items surcharge
    const itemsSurcharge: number = calculateItemsSurcharge(amountOfItems);

    // Combine all fees and surcharges
    let totalFee: number = smallOrderSurcharge + distanceFee + itemsSurcharge;

    // Rule 4: Limit total fee to 15€
    totalFee = Math.min(totalFee, MAX_TOTAL_FEE);

    // Rule 6: Rush time multiplier
    if (isRushTime) {
        totalFee *= RUSH_TIME_MULTIPLIER;
        totalFee = Math.min(totalFee, MAX_TOTAL_FEE);
    }

    const roundedTotalFee = parseFloat(totalFee.toFixed(1));

    return roundedTotalFee;
};
