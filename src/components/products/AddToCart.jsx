import { useState } from 'react'
import toast from 'react-hot-toast'

export default function AddToCart({ stock, product }) {
  const [quantity, setQuantity] = useState(0)

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    const cartInStorage = localStorage.getItem('cart')
    toast.success('Producto agregado al Carrito de Producto', {
      duration: 5000,
      position: 'bottom-right',
    })

    if (cartInStorage) {
      const cart = JSON.parse(cartInStorage)
      const existingProductIndex = cart.findIndex((item) => item.product.id === product.id)

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1
      } else {
        const newProduct = { product, quantity }
        cart.push(newProduct)
      }

      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      const cart = [{ product, quantity }]
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }

  return (
    <section className='flex items-center justify-start w-full gap-12 mt-6 mb-6'>
      <div className='flex items-center justify-between gap-3'>
        <button
          className='p-2 font-bold text-white transition-colors bg-indigo-500 rounded-full hover:bg-indigo-700'
          onClick={handleDecrease}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-minus' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M5 12l14 0'></path>
          </svg>
        </button>

        <span className='w-8 text-5xl font-black leading-none text-center text-indigo-500'>
          {quantity}
        </span>

        <button
          className='p-2 font-bold text-white transition-colors bg-indigo-500 rounded-full hover:bg-indigo-700'
          onClick={handleIncrease}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-plus' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M12 5l0 14'></path>
            <path d='M5 12l14 0'></path>
          </svg>
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className='flex items-center justify-start gap-2 px-2 py-1 text-base font-bold text-white transition bg-indigo-500 rounded-md hover:scale-105 hover:shadow-lg hover:bg-indigo-700'
      >
        Agregar al carrito
      </button>
    </section>
  )
}
