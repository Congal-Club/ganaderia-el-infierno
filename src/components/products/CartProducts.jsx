'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { currencyFormatter } from '../../lib/currency-formatter'
import Trash from '../icons/Trash'

const LazyPayPalButtons = lazy(() => import('./PayPalButtons'))

export default function CartProducts({ clientId }) {
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

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(({product}) => product.id !== productId)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  return (
    <PayPalScriptProvider
      options={{
        'client-id': clientId,
        currency: 'MXN'
      }}
    >
      <div className='flex flex-row flex-wrap md:flex-nowrap justify-between items-start gap-6'>
        <section className='w-full md:flex-1 flex flex-col gap-2'>
          {cart.map(({ product, quantity }) => (
            <article
              key={product.id}
              className='w-full flex flex-row justify-start gap-4 items-center bg-gray-100 py-2 px-4 shadow-sm rounded-md'
            >
              <picture>
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  className='w-56 aspect-[12/9] object-cover object-center rounded'
                />
              </picture>

              <section className='flex-1'>
                <h3 className='text-xl font-medium text-slate-800 mb-1'>
                  {product.name}
                </h3>

                <p className='font-normal text-slate-900 mb-2 text-pretty'>
                  {product['short-description']}
                </p>

                <section className='flex justify-between items-center'>
                  <div>
                    <p className='text-lg font-bold mt-4 text-slate-700'>
                      <span className='font-medium text-slate-900'>Cantidad: </span>
                      {quantity}
                    </p>

                    <p className='text-lg font-bold text-slate-700'>
                      <span className='font-medium text-slate-900'>Precio: </span>
                      {currencyFormatter.format(product.price)}
                    </p>

                    <p className='text-lg font-bold text-slate-700'>
                      <span className='font-medium text-slate-900'>Total a pagar: </span>
                      {currencyFormatter.format(product.price * quantity)}
                    </p>
                  </div>

                  <button
                    className='flex gap-1 text-white border border-red-500 rounded-md bg-red-500 p-2 hover:bg-red-600'
                    onClick={()=>removeFromCart(product.id)}
                  >
                    <Trash />{' '}
                    Eliminar
                  </button>
                </section>
              </section>
            </article>
          ))}
        </section>

        <section className='w-full md:w-[30%] border border-slate-400 rounded-md'>
          <h3 className='p-2 border-b border-slate-400 text-2xl text-slate-800 text-center font-semibold'>
            Carrito de compras
          </h3>

          <section className='p-2 border-b border-slate-400'>
            <p className='text-lg font-semibold text-slate-700'>
              <span className='font-medium text-slate-900'>No. de productos: </span>
              {cart.length}
            </p>

            <p className='text-lg font-bold text-slate-700'>
              <span className='font-medium text-slate-900'>Total a pagar: </span>
              {currencyFormatter.format(
                cart.reduce((acc, { product, quantity }) => acc + (product.price * quantity), 0)
              )}
            </p>
          </section>

          <section className='p-2 pt-4'>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyPayPalButtons
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
            </Suspense>
          </section>
        </section>
      </div>
    </PayPalScriptProvider>
  )
}
