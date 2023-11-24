import { map } from 'nanostores'
import type { Product } from '../types/products'

export interface CartItem {
  product: Product
  quantity: number
}

export const cart = map<Record<string, CartItem>>({})

export function addProduct(product: Product, quantity: number) {
  const existingProduct = cart.get()[product.id.toString()]

  if (existingProduct) {
    cart.setKey(product.id.toString(), {
      ...existingProduct,
      quantity: existingProduct.quantity + quantity
    })
  } else {
    cart.setKey(product.id.toString(), {
      product,
      quantity,
    })
  }
}
