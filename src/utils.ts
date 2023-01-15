import { Busy, Cost, NewLocation } from "./types"

const isNumber = (number: any): number => {
    if(typeof number === 'number') return number
    throw Error('Key received for number is not a number')
}

const isString = (string: any): string => {
    if (typeof string === 'string') return string 
    throw Error('Key received for string is not a string')
}

const isBusy = (busy: any): Busy => {
    if (Object.keys(Busy).includes(busy)) return busy
    throw Error('Key received for busy is not valid')
}

const isCost = (cost:any): Cost => {
    if (Object.keys(Cost).includes(cost)) return cost
    throw Error('Key received for cost is not valid')
}

const toNewLocation = (object: any): NewLocation => {
    const locationToAdd: NewLocation = {
        latitude: isNumber(object.latitude),
        longitude: isNumber(object.longitude),
        description: isString(object.description),
        busy: isBusy(object.busy),
        cost: isCost(object.cost)
    } 
    return locationToAdd
}

export default toNewLocation