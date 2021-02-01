import { Column, CreateDateColumn, Entity,  ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";


@Entity('articles')
export class Article {
   
   @PrimaryColumn()
   slug: string
   
   @Column({length: 50})
   title?: string

   @Column({length: 100, nullable:true})
   description: string

   @Column({type: 'text'})
   body: string

   @CreateDateColumn()
   createdAt: Date

   @UpdateDateColumn()
   updatedAt: Date

   @ManyToOne(() => User)
   author: User

   constructor (slug: string, title: string, description: string, body: string, author: User) {
     this.slug = slug
     this.title =title
     this.description = description
     this.body = body
     this.author = author
   }
}

/*
{
    "article": {
      
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }
  }
  */