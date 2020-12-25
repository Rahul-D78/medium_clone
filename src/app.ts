import express from 'express'
import {createConnection} from "typeorm";
import { Article } from './entities/Article';
import { User } from './entities/User';


const app = express()


app.get('/', (req, res) => {
    res.send("Hello")
});

async function start() {
    await createConnection({
        type: "postgres",
        username: "conduit",
        password: "conduit",
        database: "conduit",
        entities: [Article, User],
        synchronize:true,
        logging: true,
        logger: "advanced-console",
    })
    app.listen(3000, () => {
        console.log(`Sever is running on http://localhost:3000`);
    })
}

start()