import type { Order } from '../types/order'
import { products } from './products'
import { users } from './users'

export const orders: Order[] = [
  {
    id: 1,
    user: users[3],
    date: '2023-11-28',
    status: 'PENDING',
    subtotal: 259.98,
    total: 259.98,
    tax: 0,
    products: [
      {
        product: products[0],
        quantity: 2
      }
    ],
    address: {
      id: 1,
      city: 'Aguascalientes',
      country: 'México',
      no_out: '48',
      phone: '4491009999',
      street: 'San Justino de Orona Madrigal',
      zip: '20196',
    }
  },
  {
    id: 2,
    user: users[3],
    date: '2023-11-28',
    status: 'PAID',
    subtotal: 60259.98,
    total: 60259.98,
    tax: 0,
    products: [
      {
        product: products[0],
        quantity: 2
      },
      {
        product: products[1],
        quantity: 1
      }
    ],
    address: {
      id: 1,
      city: 'Aguascalientes',
      country: 'México',
      no_out: '48',
      phone: '4491009999',
      street: 'San Justino de Orona Madrigal',
      zip: '20196',
    }
  }
]
