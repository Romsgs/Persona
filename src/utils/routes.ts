import {Express, Request, Response} from 'express'
import { createUserHandler } from '../controller/user.controller'
import validateResourcesMeddleware from '../middleware/validateResourceMiddleware'
import { createUserSchema } from '../schema/user.Schema'

function routes(app: Express){
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

  app.post('/api/users', validateResourcesMeddleware(createUserSchema), createUserHandler)
}

export default routes