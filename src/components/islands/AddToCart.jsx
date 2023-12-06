import { useState } from "react"
import toast from "react-hot-toast"

export default function AddToCart({ id, stock, product, clientId, updatedCart }) {
  const [quantity, setQuantity] = useState(0)

  return (
    <section className="w-full flex justify-between gap-4 mt-6 mb-6 items-center">
      <div className="flex justify-start items-center gap-3">
        <button
          className="p-2 bg-slate-700 text-white rounded-full shadow-sm"
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1)
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
          </svg>
        </button>

        <span className="text-5xl text-slate-700 font-semibold leading-none">
          {quantity}
        </span>

        <button
          className="p-2 bg-slate-700 text-white rounded-full shadow-sm"
          onClick={() => {
            if (quantity < stock) {
              setQuantity(quantity + 1)
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
        </button>
      </div>

      <button
        onClick={() => {
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
        }}
        className="bg-slate-700 text-white py-1 px-4 rounded-md shadow-md"
      >
        Agregar al carrito
      </button>
    </section>
  )
}
