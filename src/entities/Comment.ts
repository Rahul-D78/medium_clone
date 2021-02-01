import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity('comments')
export class Comment {

    @PrimaryGeneratedColumn()
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({type: 'text'})
    body: string

    @ManyToOne(() => User)
    author: User    

    constructor(id: string, body: string, author: User) {
        this.id = id;
        this.body = body;
        this.author = author
    }

}

/*
{
    "comment": {
      "id": 1,
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:22:56.637Z",
      "body": "It takes a Jacobian",
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }
  }
*/  