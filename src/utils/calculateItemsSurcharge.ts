export function calculateItemsSurcharge(amountOfItems: number): number {
    const ITEMS_SURCHARGE_THRESHOLD = 5;
    const ITEMS_SURCHARGE_RATE = 0.5;
    const MAX_ITEMS_SURCHARGE = 1.2;
    const BULK_ITEMS_THRESHOLD = 12;

    let itemsSurcharge: number = 0;

    if (amountOfItems >= ITEMS_SURCHARGE_THRESHOLD) {
        itemsSurcharge = (amountOfItems - (ITEMS_SURCHARGE_THRESHOLD - 1)) * ITEMS_SURCHARGE_RATE;

        if (amountOfItems > BULK_ITEMS_THRESHOLD) {
            itemsSurcharge += MAX_ITEMS_SURCHARGE;
        }
    }

    return itemsSurcharge;
}