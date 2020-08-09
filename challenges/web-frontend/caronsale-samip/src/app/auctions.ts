export interface Auctions {
    "label": string,
    "associatedVehicle": {
        "make": string,
        "model": string,
        "vehicleImages": Array<
        {
            "uuid": string,
            "rawData": string,
            "url": string,
            "_fk_associatedVehicle": number,
            "_fk_uuid_vehicle": string,
            "perspective": number,
            "encoding": string,
            "mimeType": string
        }
        >,
        "mileageInKm": number,
        "category": number,
        "fuelType": number,
        "transmission": number,
        "ez": string
    },
    "endingTime": string,
    "remainingTimeInSeconds": number,
    "currentHighestBidValue": number
}
