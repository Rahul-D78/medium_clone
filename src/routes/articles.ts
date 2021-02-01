import { Router } from 'express'
import { createArticle, deleteArticle, getArticle } from '../controllers/article'
import { createComment, deleteComment } from '../controllers/comments'
import { authByToken } from '../middlewares/auth'

const route = Router()

//POST /articles           create a new article

route.post('/', authByToken, async(req, res) => {
    // try{
    //     const article = await createArticle(req.body.article, (req as any).user.email)
    //     res.status(201).json({ article })
    // }catch(e) {
    //     return res.status(401).json({
    //         errors : {body : ["Could not create an article"]}
    //     })}
})

//PATCH    /api/article/:slug    update an article
route.patch('/:slug', (req, res) => {


})

//DELETE    delete an a rticle
route.delete('/:slug', authByToken,async (req, res) => {
    try {
        const article = await deleteArticle(req.params.slug)
        res.status(201).json({body :["sucessfully deleted"]})
    }catch(e) {
        res.status(401).json({
            errors : {body : ["No such user exists"]}
        })}
})

//GET /articles            get all articles
route.get('/' , async (req, res) => {

})

//GET /api/articles/feed       Feed articles for given user
route.get('/fedd', async (req, res) => {

})

//GET /api/articles/slug       Get a single article
route.get('/:slug', async (req, res) => {
  try {
      const article = await getArticle(req.params.slug)
      if(!article) throw new Error("No such article exists")
      return res.status(200).json({article})
  } catch(e) {
      res.status(401).json({
        errors : {body : ["No such user exists"]}
      })
  } 
})


//POST /api/articles/:slug/comment POST a comment
route.post('/:slug/:comment', authByToken,async(req, res) => {
    try {
        const comment = await createComment(req.body.comment, req.params.slug, (req as any).user.email)
        return res.status(201).json({comment})  
    }catch(e) {
        res.status(401).json({
            errors : {body : ["No such path exists"]}
        })
    }
})

route.delete('/:slug/comments/:id', authByToken, async(req, res) => {
    try {
        const commnet = await deleteComment(req.body.id)
        return res.status(201).json({body: [`sucessfully deleted ${commnet}`]})
    }catch(e) {
        res.status(401).json({
            errors : {body : ["No such comment exists"]}
        })   
    }
})

export const articleRoute = route