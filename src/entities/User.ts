import { Column, Entity, PrimaryColumn } from "typeorm";
import { userRoute } from "../routes/user";

@Entity()
export class User {

    @PrimaryColumn()
    email: string

    @Column({unique:true, nullable: false})
    username: string

    @Column({nullable:true})
    password ?: string

    @Column({type: 'text', nullable:true})
    bio ?: string

    @Column({nullable:true})
    image ?: string

    token ?: string

    constructor(email: string, username: string, password: string) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

/*
"email": "jake@jake.jake",
    "token": "jwt.token.here",
    ": "jake",
    "bio": "I work at statefarm",
    "image": null
    */