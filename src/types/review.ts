import type { User } from './user'

export interface Review {
  id:                  number
  name:                string
  email:               string
  user:                User
  review:              string
  rate:                number
  created_at?:         string
}
