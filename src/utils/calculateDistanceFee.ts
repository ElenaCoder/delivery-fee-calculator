export function calculateDistanceFee(deliveryDistance: number): number {
    const BASE_DELIVERY_DISTANCE = 1000;
    const ADDITIONAL_DISTANCE_FEE_PER_UNIT = 1;
    const BASE_DELIVERY_FEE = 2;

    if (deliveryDistance <= BASE_DELIVERY_DISTANCE) {
        return BASE_DELIVERY_FEE;
    }

    const additionalDistance = deliveryDistance - BASE_DELIVERY_DISTANCE;
    const additionalDistanceUnits = Math.ceil(additionalDistance / 500);

    const additionalDistanceFee =
        additionalDistanceUnits * ADDITIONAL_DISTANCE_FEE_PER_UNIT;

    return BASE_DELIVERY_FEE + additionalDistanceFee;
}
