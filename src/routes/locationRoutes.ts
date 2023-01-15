import express from 'express'
import * as locationServices from '../services/locationServices'
import toNewLocation from '../utils'

const router = express.Router()

router.get('/', (_req, res)=>{
    res.json(locationServices.getLocationsWhitoutCost())
})

router.get('/:lati', (req, res)=> {
    const location = locationServices.findByLatitude(Number(req.params.lati))
    location? res.json(location) : res.sendStatus(404)
})

router.post('/', (req, res)=>{
    try{
        const newLocation = toNewLocation(req.body)
        const locationsWhitNewLocation = locationServices.addLocationInMadrid(newLocation)
        res.json(locationsWhitNewLocation)
    }
    catch(error:any){
        res.json({error: error.message})
    }
})

export default router