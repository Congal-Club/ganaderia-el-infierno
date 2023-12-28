import type { Category } from './category'
import type { Image } from './image'
import type { Review } from './review'

export interface Product {
  id:                  number
  model:               string
  slug:                string
  stock:               number
  image:               string
  images:              Image[]
  price:               number
  weight:              number
  length:              number
  width:               number
  height:              number
  status:              string
  description:         string
  'short-description': string
  name:                string
  tag:                 string[]
  categories:          Category[]
  reviews:             Review[]
}
