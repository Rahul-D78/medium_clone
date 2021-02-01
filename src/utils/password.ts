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

export function matchPassword(hash: string, password: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
        bcrypt.compare(password, hash, (err, same) => {
            if(err) return reject(err)

            resolve(same)
        })
    })
}

/* only for testing purpose
async function test() {

    const pass = "hfjwnkjfnkwjnf"
    const hash = await hashPassword(pass)
    console.log(hash);
    
    const check1 = "hfjwnkjfnkwjnf"
    const match1 = await matchPassword(hash, check1)
    console.log(match1);
    
    const check2 = "ahfjwnkjfnkwjnf"
    const match2 = await matchPassword(hash, check2)
    console.log(match2);
}

test()
*/