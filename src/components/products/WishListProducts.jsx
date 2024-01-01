import { useEffect, useState } from 'react'
import { currencyFormatter } from '../../lib/currency-formatter'

export default function WishListProducts() {
  const [wishlist, setWishList] = useState([])

  useEffect(() => {
    const wishListInStorage = localStorage.getItem('wishlist')

    if (wishListInStorage) {
      const wishlistStored = JSON.parse(wishListInStorage)
      setWishList(wishlistStored)
    } else {
      setWishList([])
    }
  }, [])

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId)
    setWishList(updatedWishlist)
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
  }

  const addToCart = (product) => {
    const cartInStorage = localStorage.getItem('cart')

    if (cartInStorage) {
      const cart = JSON.parse(cartInStorage)
      const existingProductIndex = cart.findIndex((item) => item.product.id === product.id)

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1
      } else {
        const newProduct = { product, quantity: 1 }
        cart.push(newProduct)
      }

      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      const cart = [{ product, quantity: 1 }]
      localStorage.setItem('cart', JSON.stringify(cart))
    }

    removeFromWishlist(product.id)
  }

  if (wishlist.length === 0) {
    return (
      <h3 className='text-2xl font-bold text-center'>
        No hay productos en tu lista de deseos.
      </h3>
    )
  }

  return (
    <section className='w-full md:flex-1 flex flex-col [&>*:nth-child(odd)]:bg-gray-100'>
      {wishlist.map((product) => (
        <article
          key={product.id}
          className='flex flex-row items-center justify-start w-full gap-4 px-4 py-2'
        >
          <picture>
            <img
              src={product.image}
              alt={product.name}
              title={product.name}
              className='w-64 aspect-[12/9] object-cover object-center rounded'
            />
          </picture>

          <section className='flex-1'>
            <h3 className='mb-1 text-xl font-medium text-slate-800'>
              {product.name}
            </h3>

            <p className='mb-2 font-normal text-slate-900 text-pretty'>
              {product['short-description']}
            </p>

            <div className='mb-2'>
              <p className='text-lg font-bold text-slate-700'>
                <span className='font-medium text-slate-900'>Precio: </span>
                {currencyFormatter.format(product.price)}
              </p>

              <p className='text-lg font-bold text-slate-700'>
                <span className='font-medium text-slate-900'>Modelo: </span>
                {product.model}
              </p>

              <p className='text-lg font-bold text-slate-700'>
                <span className='font-medium text-slate-900'>Disponibles: </span>
                {product.stock}
              </p>
            </div>

            <div className='flex flex-row items-center justify-start w-full gap-2'>
              <button
                className='px-4 py-1 text-white transition bg-red-500 rounded-md hover:bg-red-600 hover:shadow-lg hover:scale-105'
                onClick={() => removeFromWishlist(product.id)}
              >
                Eliminar
              </button>

              <button
                className='px-4 py-1 text-white transition bg-indigo-500 rounded-md hover:bg-indigo-700 hover:shadow-lg hover:scale-105'
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </section>
        </article>
      ))}
    </section>
  )
}
