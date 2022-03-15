import {Response, Request} from 'express'
import {omit} from 'lodash'
import { CreateUserInput } from '../schema/user.Schema'
import { createUser } from '../service/user.service'
import log from '../utils/logger'

export async function createUserHandler(req:Request<{},{}, CreateUserInput['body']>, res: Response){
  try {
    const user = await createUser(req.body) // call create user service
    return res.send(omit(user.toJSON(), "password"))
  } catch (error) {
    log.error(error)
    return res.sendStatus(409).send(error)
  }

}