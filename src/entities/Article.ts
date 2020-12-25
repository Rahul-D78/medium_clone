import { text } from "express";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";
import { User } from "./User";

@Entity()
export class Article {
    
    @PrimaryColumn({length: 40})
    slug: string

    @Column({length: 40})
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
}


    // "favorited": false, relationship with tag
    // "favoritesCount": 0, user
    // "author": { relationship with user
    //   "username": "jake",
    //   "bio": "I work at statefarm",
    //   "image": "https://i.stack.imgur.com/xHWG8.jpg",
    //   "following": false