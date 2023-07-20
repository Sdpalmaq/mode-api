import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import cors from 'cors'

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express()

app.use(cors())

app.set('pkg', pkg);

app.use(express.json());
 
app.use(morgan('dev'));

//routas 
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
});


app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


export default app;