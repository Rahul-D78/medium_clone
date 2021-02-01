import { Router } from 'express';
import { getUpdatedUser, getUserByEmail } from '../controllers/user';
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

//PATCH /user update data of current user 

router.patch('/', authByToken, async (req, res) => {

   try {
       const user = await getUpdatedUser(req.body.user, (req as any).user.email)
       res.status(201).json({ user })
   }catch(e) {
       res.status(401).json({ 
        errors : {body : ["Could not update the user"]}
        })
   }

})

export const userRoute = router