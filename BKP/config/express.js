module.exports = () => {
  const express = require('express')
  const bodyParser = require('body-parser')
  const load = require('express-load')
  const app = express()

  app.set('PORT', 3000)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app)

  return app
}
