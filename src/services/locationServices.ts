import { Location, LocationsWhitoutCost,NewLocation } from '../types'
import locationData from './locations.json'

const locations: Location[] = locationData as Location[]

export const getLocations = (): Location[] => locations

export const getLocationsWhitoutCost = (): LocationsWhitoutCost[] => {
    return locations.map(({latitude, longitude,city,description,busy }) => {
        return {
        latitude,
        longitude,
        city,
        description,
        busy,
        }
    })
}

export const findByLatitude = (lati: number): Location | undefined => {
    const locationSearched = locations.find(location => location.latitude == lati)
    return locationSearched 
}

export const addLocationInMadrid = (newLocation: NewLocation) => {
    locations.push({...newLocation, city: 'Madrid'})
    return locations
}