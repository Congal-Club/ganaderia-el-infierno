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
  id:                  number
  name:                string
  email:               string
  review:              string
  rate:                number
}

export interface Order {
  id: number
  nameClient: string
  colonia: string
  street: string
  streetNumber: string
  suitNumber: string
  country: string
  city: string
  postalCode: string
  numProducts: number
  status: string
  total: number
  date: string 
  products: Products[]
}

export interface Products {
  id: number
  name: string
  model: string
  quantity: number
  price: number
}

