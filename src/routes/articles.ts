import { Router } from 'express'
import { createArticle } from '../controllers/articles.'
import { authByToken } from '../middlewares/auth'

const route = Router()

//POST /api/articles create a new article

route.post('/', authByToken,async(req, res) => {

    try {
    const article = await createArticle((req.body.article), (req as any).user.email)
    res.status(200).json({ article })
    }catch(e) {
        return res.status(401).json({
            errors : {body : ["could not create article", e.message]}
        })
    }
})

export const articleRouter = route