import express from 'express';
import path from 'path';
import cors from 'cors';

// import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';


const app = express(); // helps us deal with REQ 

app.use(cors()); // todos os front ends acessam a nossa API
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


app.listen(3333);