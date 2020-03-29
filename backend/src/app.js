const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/*
app.use(cors({
  origin: 'http://meuapp.com'
}));
*/

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota/Recurso
 */

 /**
  * Métodos HTTP:
  * GET:  Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT:  Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Típos de parâmetros:
   * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body:
   */
    
   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: Select * from users
     * Query Builder: table('users).select(*).where()
     */

     /*
  app.get('/users', (request, response) => {
    const params = request.query;
    console.log(params);
    //return response.send('Hello World');
    return response.send({
      evento: 'Semana Omnistack 11.0',
      aluno: 'Leonardo Saraiva Ota'
    });
  });

  app.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);
    //return response.send('Hello World');
    return response.send({
      evento: 'Semana Omnistack 11.0',
      aluno: 'Leonardo Saraiva Ota'
    });
  });

  app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);
    //return response.send('Hello World');
    return response.send({
      evento: 'Semana Omnistack 11.0',
      aluno: 'Leonardo Saraiva Ota'
    });
  });
*/

//app.listen(3333);
module.exports = app;