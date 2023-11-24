'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { cart as cartStore } from '../../store/store'
import { currencyFormatter } from '../../lib/currency-formatter'
import AppPayPalButtons from './AppPayPalButtons'

export default function CartProducts({ clientId }) {
  const $cartItems = useStore(cartStore)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cartInStorage = window.localStorage.getItem('cart')

    if (cartInStorage) {
      const cartStored = JSON.parse(cartInStorage)
      setCart(cartStored)
    } else {
      setCart([])
    }
  }, [])

  return (
    <PayPalScriptProvider
      options={{
        'client-id': clientId,
        currency: 'MXN'
      }}
    >
      <div className='flex flex-row flex-nowrap justify-between items-start gap-4'>
        <section className='flex-1'>
          {cart.map(({ product, quantity }) => (
            <article key={product.id}>
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                />
              </figure>

              <section>
                <h3>
                  {product.name}
                </h3>

                <p>
                  {product['short-description']}
                </p>

                <p>
                  Cantidad: {quantity}
                </p>

                <p>
                  Precio: {currencyFormatter.format(product.price)}
                </p>

                <p>
                  Total a pagar: {currencyFormatter.format(product.price * quantity)}
                </p>
              </section>
            </article>
          ))}
        </section>

        <section className='w-[30%]'>
          <h3>
            Carrito de compras
          </h3>

          <section>
            <p>
              No. de productos: {cart.length}
            </p>

            <p>
              Total a pagar: {currencyFormatter.format(
                cart.reduce((acc, { product, quantity }) => acc + (product.price * quantity), 0)
              )}
            </p>
          </section>

          <section>
            <AppPayPalButtons
              total={
                cart
                  .reduce((acc, { product, quantity }) => acc + (product.price * quantity), 0)
                  .toString()
              }
              clearProducts={() => {
                localStorage.removeItem('cart')
                setCart([])
              }}
            />
          </section>
        </section>
      </div>
    </PayPalScriptProvider>
  )
}
