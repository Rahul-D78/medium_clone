import { getConnection, getRepository } from "typeorm";
import { Article } from "../entities/Article";
import { User } from "../entities/User";
import { sanitizeFields } from "../utils/security";
import { slugify } from "../utils/stringutils";

interface articleData{
    title: string
    description: string
    body: string
    taglist: string[]
}

export async function createArticle(data: articleData, email: string): Promise<Article> {

    if(!data.body) throw new Error("Article body is absent")
    if(!data.description) throw new Error("description body is absent")
    if(!data.title) throw new Error("title body is absent")

    const articleRepo = getRepository(Article)
    const userRepo = getRepository(User)

    try {
        const user = await userRepo.findOne(email)
        if(!user) throw new Error("user does not exists")
     
        const article = await articleRepo.save(new Article(
            await slugify(data.title),
            data.title,
            data.description,
            data.body,
            sanitizeFields(user)
        ))

        return article
    }catch(e) {
        throw e
    }

}

export async function getArticle(slug: string): Promise<Article> {
    
    const repo = getRepository(Article)
    
    //check for existance
    try {
        const article = await repo.findOne(slug)
        if(!article) throw new Error("article not found")

        return article
    }catch(e){
        throw e
    }}
export async function deleteArticle(slug: string){
    
    const repo = getRepository(Article)
    try {

       const articleToDelete = await repo.find({slug: slug})
       if(!articleToDelete) throw new Error("soory slug you have typed not available")

       return await repo.remove(articleToDelete)
    }catch(e) {
       throw e
   }}

// async function getUpdatedArticle(data: articleData, email: User, slug: string) {

//     const userRepo = getRepository(User)
//     const articleRepo = getRepository(Article)

//     //check for existance
//     try {
//         const user = await userRepo.findOne(email)
//         const article = await articleRepo.findOne(slug)
        
//         if(!user) throw new Error("User with this email not exists")
//         if(!slug) throw new Error("Slug does not exists")

//         if(data.body) article?.body == data.body
//         if(data.description) article?.description == data.description
//         if(data.title)
//         }
    
// }