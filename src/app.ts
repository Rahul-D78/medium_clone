import express from 'express'
import {createConnection} from 'typeorm'
import { Article } from './entities/Article'
import { Comment } from './entities/Comment'
import { User } from './entities/User'
import { articleRoute } from './routes/articles'
import { userRoute } from './routes/user'
import { usersRoute } from './routes/users'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/api/user', userRoute);
app.use('/api/users', usersRoute);
app.use('/api/articles', articleRoute);

async function start() {
    
    const connection = await createConnection({
        type: 'postgres',
        username: 'conduit',
        password: 'conduit',
        database: 'conduit',
        entities:[User, Article, Comment],
        synchronize:true,
        logging: true,
        logger: "advanced-console",

    })
    app.listen(3000, () => {
    console.log(`server is running on http://localhost:3000`);
})
}

start()
