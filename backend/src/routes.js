const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
//const crypto = require('crypto');

//const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/*
routes.get('/ongs', async (request, response) => {
  const ongs = await connection('ongs').select('*');

  return response.json(ongs);
});
*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
//routes.post('/ongs', OngController.create);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);

//routes.get('/profile', ProfileController.index);
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization:  Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

//routes.get('/incidents', IncidentController.index);
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);
//routes.delete('/incidents/:id', IncidentController.delete);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

module.exports = routes;