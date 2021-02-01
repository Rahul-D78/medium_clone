import { getRepository } from "typeorm"
import { Article } from "../entities/Article"
import { Comment } from "../entities/Comment"
import { User } from "../entities/User"
import { sanitizeFields } from "../utils/security"

interface commentBody {
  id: string 
  body: string
}

export async function createComment(data: commentBody, slug: string, email: string): Promise<Comment> {

    if(!data.body) throw new Error("Comment body is absent")

    const articleRepo = getRepository(Article)
    const userRepo = getRepository(User)
    const commentRepo = getRepository(Comment)

    try {
        const existing = await articleRepo.findOne(slug) 
        if(!existing) throw new Error("Invalid")

        const user = await userRepo.findOne(email)
        if(!user) throw new Error("user does not exists")
     
        const comment = await commentRepo.save(new Comment(
            data.id,
            data.body,
            sanitizeFields(user)
        ))

        return comment
    }catch(e) {
        throw e
    }
}

export async function deleteComment(id: string){
    const commentRepo = getRepository(Comment)
    try {
        const commentToDelete = await commentRepo.find({id: id})
        if(!commentToDelete) throw new Error("Give a Proper comment id")
        
        const deletedComment = await commentRepo.remove(commentToDelete)
        return deletedComment

    }catch(e) {
        throw e
    }
}
