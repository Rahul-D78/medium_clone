import { Router } from 'express';
import { getUserByEmail } from '../controllers/users';
import { authByToken } from '../middlewares/auth';

const router = Router()

//we can check if the user exists or not

router.get('/', authByToken, async (req, res) => {

    try{

        const user = await getUserByEmail((req as any).user.email)
        if(!user) throw new Error("no such user found")
        return res.status(200).json(user)
    }catch(e) {
 
        return res.status(401).json({
            errors : {body : ["No such user exists"]}
        })
    }
})

router.patch('/', (req, res) => {
   
})

export const userRoute = router