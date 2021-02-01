import { Router } from 'express'
import { createUser, loginUser } from '../controllers/user'

const router = Router()

// /POST /users/login          Login
router.post('/login', async(req, res) => {
    try {
        const user = await loginUser(req.body.user)
        return res.status(200).json({user})
    }catch(e) {
        return res.status(422).json({
            errors : {body : ["login failed ", e.message]}
        })
    }
})

//POST Register new user
router.post('/' , async(req, res) =>{

    try{
        const user = await createUser((req as any).user.email)
        return res.send(user)
    }
    catch(e) {
       res.status(422).json({
           errors: {body: ["could not create user"]}
        })
    }
})

export const usersRoute = router