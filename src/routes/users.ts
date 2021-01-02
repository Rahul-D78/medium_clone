import { Router } from 'express'
import { createUser, loginUser } from '../controllers/users'

const route = Router()

// /POST /users/login          Login
route.post('/login', async(req, res) => {
    try {
        const user = await loginUser(req.body.user)
        return res.status(200).json({user})
    }catch(e) {
        return res.status(422).json({
            errors : {body : ["login failed ", e.message]}
        })
    }
})


//POST users/login               Login 
route.post('/', async(req, res) => {    
    
    try{
        const user = await createUser(req.body.user)
         return res.send(user)
    }
    catch(e) {
        console.error(e);
        
        res.status(422).json({
            errors : {body : ["could not create user "]}
        })
    }
    
})

//POST /users                   Register a new user 
route.post('/', (req, res) => {

})

//GET /user


export const usersRoute = route