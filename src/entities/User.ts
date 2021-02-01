import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryColumn()
    email: string

    @Column({nullable: false, unique: true})
    username: string 

    @Column({nullable:true})
    password?: string

    @Column({nullable:true})
    bio?: string

    @Column({nullable:true})
    image?: string

    token?: string

    constructor(email: string, username: string, password: string) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}