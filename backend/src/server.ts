import express from 'express';
import './database/connection';
import routes from './routes';

const app = express(); // helps us deal with REQ 

app.use(express.json());
app.use(routes);


app.listen(3333);

// driver nativo, Query builder, ORM --> niveis de abstracoes para manipular BD

// ORM --> um relacionamento de objecto para cada tabela
// Object Relational Mapping