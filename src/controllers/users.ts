import { sign } from "../utils/jwt";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { hashPassword, matchPassword } from "../utils/password";
import { sanitizeFields } from "../utils/security";

interface userSignUpData {

    username: string,
    password: string, 
    email: string
}

interface userLoginData {

    password: string,
    email: string
}


export async function createUser(data: userSignUpData) {



    // 1. Check for data validity 

    if(!data.username) throw new Error("username is blank")
    if(!data.email) throw new Error("Email field is blank")
    if(!data.password) throw new Error("password is blank")

    // 2. check if user exists

    const repo = await getRepository(User)

    const existing = await repo.findOne(data.email)

    if(existing) throw new Error("User with this Email exists")

    try {

    // 3. create user and sends back

        const user = await repo.save(new User(
           data.email,
           data.username,
           await hashPassword(data.password)
       ))

    

        // const user = new User()

        // user.username = data.username
        // user.password = await hashPassword(data.password)
        // user.email = data.email

        // await getRepository(User).save(user)

        // console.log(user);

        console.log(sanitizeFields(user));
        user.token = await sign(user)
        
        return user
    }
    catch(e) {
        console.error(e)
    }
    
}

export async function loginUser(data: userLoginData): Promise<User> {

    if(!data.email) throw new Error("Email field is blank")
    if(!data.password) throw new Error("password is blank")

    const repo  = getRepository(User)

    //check for existing
    try {
    const user = await repo.findOne(data.email)

    if(!user) throw new Error("No user with this Email");

    //check if password mathches
    const passMatch = await matchPassword(user.password!, data.password)
    if(passMatch === false) throw new Error("Wrong password");

    user.token = await sign(user)

    return sanitizeFields(user)
    }catch(e) {
        throw e
    }
}

export async function getUserByEmail(email:string): Promise<User> {
    

    const repo  = getRepository(User)

    //check for existing
    try{
    const user = await repo.findOne(email)

    if(!user) throw new Error("No user with this Email");

    //check if password mathches

    return sanitizeFields(user)
    }catch(e) {
        throw e
    }
}