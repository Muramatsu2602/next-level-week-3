import express from 'express';
import './database/connection';
import path from 'path';

import routes from './routes';
import errorHandler from './errors/handler';


const app = express(); // helps us deal with REQ 

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


app.listen(3333);