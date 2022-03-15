import express from 'express'
import config from 'config'
import connect from './utils/connect'
import log from './utils/logger'
import routes from './utils/routes'

const port = config.get<number>('port')
const host = config.get<string>('host')

const app = express()
app.use(express.json())

app.listen(port, async ()=> {
  log.info(`server rodando em http://${host}:${port}`)
  await connect();
  routes(app)
})