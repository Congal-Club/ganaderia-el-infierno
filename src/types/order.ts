import type { Address } from './address'
import type { Product } from './product'
import type { User } from './user'

export interface Order {
  id:          number
  user:        User
  date:        string
  address:     Address
  status:      string
  subtotal:    number
  tax:         number
  total:       number
  products:    { quantity: number, product: Product }[]
  created_at?: string
}
