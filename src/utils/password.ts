import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export function hashPassword(password: string): Promise<string> {

    return new Promise<string>((resolve, reject) => {
        
        bcrypt.hash(password, SALT_ROUNDS, (err, encrypted) => {
            if(err) throw reject(err)

            resolve(encrypted)
        })
    })
}