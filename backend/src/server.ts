
// O node funciona em um ciclo de REQ // RES
// .localhost:3333

import express from 'express';

const app = express(); // helps us deal with REQ 

app.use(express.json());


/**
 * REQUISICAO:
 * - Front->Back
 * - Dados, informacao, parametro
 * RESPONSE:
 * - Como o back vai confirmar/responder
 */

// Rota = conjunto
// Recurso = usuario

// Metodos HTTP = GET, POST, PUT, DELETE
// semantica eh oq diferencia cada um
// GET    --> buscar uma informacao 
// POST   --> criando uma informacao nova (o navegador nao acessa)
// PUT    --> editando uma informacao
// DELETE --> autoexplicativo 
// Parametros 
// - Query Params: https://localhost:3333/users?search=diago&age=28
// - Route Params: https://localhost:3333/users/1  (identificar um recurso)
// - Body        : http: https://localhost:333/users/ ==> informacoes complexas

app.get('/users/:id', (request, response) => {

    console.log(request.query);
    console.log(request.params);
    console.log(request.body);



    return response.json({ message: 'Hello World' });
});



app.listen(3333);