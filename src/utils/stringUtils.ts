import { ChangeStream } from "typeorm";

export async function slugify(title: string) {

    //article title -- this is my new article
    // return -- this-is-my-new-article

    const slugger = []
    
    for(let i =0; i<= title.length;i++) {
        if(i >= 30) break;

        let char = title[i].toLowerCase()
        if(char >= "a" && char <= "z") {
            slugger.push(char)
        }else{
            slugger.push('-')
        }
    }
    return slugger.join(' ')
}