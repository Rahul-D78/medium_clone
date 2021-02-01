import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";

export async function authByToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization')?.split(' ')
    if(!authHeader) return res.status(401).json({
        errors : {body : ["Authorization failed"]}
    })

    if(authHeader[0] != 'Token') return res.status(401).json({
        errors : {body : ["Authorization failed", "Token missing"]}
    })

    const token = authHeader[1];
    try{
       const user = await decode(token);
       if(!user) throw new Error("no user found in token")
       ;(req as any).user = user
       next()
    }catch(e){
      return res.status(401).json({
        errors : {body : ["login failed ", e.message]}
      })
    }
}