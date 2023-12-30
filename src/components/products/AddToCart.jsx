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
    <section className='w-full flex justify-start gap-12 mt-6 mb-6 items-center'>
      <div className='flex justify-between items-center gap-3'>
        <button
          className='p-2 bg-indigo-500 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors'
          onClick={handleDecrease}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-minus' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M5 12l14 0'></path>
          </svg>
        </button>

        <span className='text-5xl w-8 text-center text-indigo-500 font-black leading-none'>
          {quantity}
        </span>

        <button
          className='p-2 bg-indigo-500 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors'
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
        className='text-base flex justify-start items-center gap-2 bg-indigo-500 text-white font-bold py-1 px-2 rounded-md hover:scale-105 hover:shadow-lg hover:bg-indigo-700 transition'
      >
        Agregar al carrito
      </button>
    </section>
  )
}
