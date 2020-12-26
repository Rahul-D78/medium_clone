import { Router } from 'express'

const route = Router()


//GET /user              
route.get('/', (req, res) => {    
    res.send('GET /user HIT')
    
})

export const userRoute = route
