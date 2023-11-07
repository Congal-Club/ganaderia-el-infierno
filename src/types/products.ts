export interface Product {
  id:                  number
  model:               string
  slug:                string
  stock:               number
  image:               string
  images:              string[]
  price:               number
  weight:              number
  length:              number
  width:               number
  height:              number
  status:              string
  description:         string
  "short-description": string
  name:                string
  tag:                 string[]
  categories:          string[]
  reviews?:            Review[]        
}
export interface Review {
  name:                string
  email:               string
  review:              string
  rate:                number
}
