import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { hashPassword } from "../utils/password";
import { sanitizeFields } from "../utils/security";

interface UserSignUpData {
    username: string
    passsword: string
    email: string
}

export async function createUser(data: UserSignUpData) {

    // if(!data.username) throw new Error('username is blank')
    // if(!data.passsword) throw new Error('password is blank')
    // if(!data.email) throw new Error('email is blank')

   try{

    const user = new User()

        user.username = data.username
        user.email = data.email
        user.password = await hashPassword(data.passsword)

        await getRepository(User).save(user)  
        console.log(sanitizeFields(user));
        
   }catch(e) {
       console.log(e);
       
   }
    
}