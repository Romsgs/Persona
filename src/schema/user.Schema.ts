
import {object, string, TypeOf} from 'zod'

export const createUserSchema = object({
  body: object({
    name: string({required_error: 'name is required'
  }),
    password: string({
      required_error: 'password is required'
    }).min(6, 'Password too short. minumum of 6 chars'),
    passwordConfirmation: string({
      required_error: 'password confirmation is required'
    }),
    email: string({
      required_error: 'email is required'
    }).email('not a valid email')
  }).refine((data)=>{data.password === data.passwordConfirmation, {
    message: 'password do not match',
    path: ["passwordConfirmation"]
  }
}),
})

export type CreateUserInput = TypeOf<typeof createUserSchema>