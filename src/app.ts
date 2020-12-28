import express from 'express'
import {createConnection} from "typeorm";
import { Article } from './entities/Article';
import { User } from './entities/User';
import { userRoute } from './routes/user';
import { usersRoute } from './routes/users';

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello")
});


app.use('/api/users', usersRoute)
app.use('/api/user', userRoute)

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