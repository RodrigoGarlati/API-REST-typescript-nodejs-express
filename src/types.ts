export enum Busy {
    high= "high",
    medium= "medium",
    low= "low"
}
export enum Cost {
    expensive= "expensive",
    cheap= "cheap",
    free= "free"
}

export interface Location {
    latitude: number,
    longitude: number,
    city: string,
    description: string,
    busy: Busy,
    cost: Cost
}

export type LocationsWhitoutCost = Omit<Location, 'cost'>

export type NewLocation = Omit<Location, 'city'>

