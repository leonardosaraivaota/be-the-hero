const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      //.set('Authorization', '85e6017f')
      .send({
        name: "APAD",
        email: "CONTATO@TESTE.COM",
        whatsapp: "47000000000",
        city: "RIO DO SUL",
        uf: "SC",
      });

      //console.log(response.body);
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLenght(8);
  });
});