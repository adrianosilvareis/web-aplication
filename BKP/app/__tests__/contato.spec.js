const { expect } = require('chai')
const request = require('supertest')
const app = require('@/config/express')()

const controller = require('./../controllers/contato')(app)

describe('Contato CRUD', () => {
  describe('Smoke Tests', () => {
    it('listarContatos', () => {
      expect(controller.listarContatos).to.be.exist
    })

    it('obterContato', () => {
      expect(controller.obterContato).to.be.exist
    })

    it('salvarContato', () => {
      expect(controller.salvarContato).to.be.exist
    })

    it('removerContato', () => {
      expect(controller.removerContato).to.be.exist
    })
  })

  describe('integration tests', () => {
    let mongoDb

    beforeAll(() => {
      mongoDb = require('@/config/database.js')('mongodb://localhost:27017/contato')
    })

    afterAll(() => {
      mongoDb.disconnect()
    })

    describe('listarContatos', () => {
      it('should receive default list of contacts', async () => {
        const { body, statusCode } = await request(app).get('/contato/list')
        expect(statusCode).to.equal(200)

        expect(body).to.have.property('result')
        expect(body).to.have.property('count')
        expect(body).to.have.property('_page')
        expect(body).to.have.property('_limit')
        expect(body).to.have.property('_columns')
        expect(body).to.have.property('_filter')
        expect(body).to.have.property('_sort')

        expect(body.result).to.be.an('array')
        expect(body.count).to.be.a('number')
      })
    })

    describe('it should receive a valid contact when there is', async () => {
      const contato = {}

      const { body, statusCode } = await request(app).get('/contato/list')
      expect(statusCode).to.equal(200)

      expect(body.count).to.equal(1)
      expect(body.result[0]).to.equal(contato)
    })
  })
})
