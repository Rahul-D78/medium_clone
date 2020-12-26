import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface UserSignUpData {
    username: string
    // passsword: string securly handeled later using oauth
    email: string
}

export async function createUser(data: UserSignUpData) {

    const user = await getRepository(User).save({

        username: data.username,
        email: data.email
    })

    return user
    
}