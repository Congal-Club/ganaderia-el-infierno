'use client'

import { useStore } from '@nanostores/react'
import { cart } from '../../store/store'
import { currencyFormatter } from '../../lib/currency-formatter'

export default function ProductsInCart() {
  const $cartItems = useStore(cart)

  return (
    <span>
      {Object.values($cartItems).length}{' '}
      Artículos -{' '}
      {currencyFormatter.format(
        Object
          .values($cartItems)
          .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      )}{' '}
    </span>
  )
}
