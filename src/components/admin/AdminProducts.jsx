import { useState } from 'react'

import Plus from '../icons/Plus'
import Pencil from '../icons/Pencil'
import Trash from '../icons/Trash'
import { categories } from '../../data/categories'

export default function AdminProducts({ products }) {
  const [adminProducts, setAdminProducts] = useState(products)
  const [activeProduct, setActiveProduct] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleAddProduct = (product) => {
    setAdminProducts([...adminProducts, product])
  }

  const handleEditProduct = (product) => {
    setAdminProducts(
      adminProducts.map((p) => (p.id === product.id ? product : p))
    )

    setIsEditing(false)
    setActiveProduct(null)
  }

  const handleDeleteProduct = (id) => {
    setAdminProducts(adminProducts.filter((p) => p.id !== id))
  }

  return (
    <div className='w-full flex flex-row justify-between items-start gap-4'>
      <FormProducts
        activeProduct={activeProduct}
        isEditing={isEditing}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
      />

      <TableOfProducts
        products={adminProducts}
        onClickProduct={(p) => {
          setActiveProduct(p)
          setIsEditing(true)
        }}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  )
}

function FormProducts({ activeProduct, isEditing, onAddProduct, onEditProduct }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const product = Object.fromEntries(data)

    const imagesNames = product.images.split(',').map((image) => '/products/' + image.trim())
    const [firstImage] = imagesNames
    const images = imagesNames.map((image) => ({
      id: Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000,
      link: image
    }))

    const productFormatted = {
      id: isEditing ? activeProduct.id : Date.now(),
      model: product.name,
      slug: product.name.toLowerCase().replaceAll(' ', '-'),
      stock: Number(product.stock),
      image: firstImage,
      images,
      price: Number(product.price),
      weight: Number(product.weight),
      length: Number(product.length),
      width: Number(product.width),
      height: Number(product.height),
      status: 'disponible',
      description: product.description,
      'short-description': product['short-description'],
      name: product.name,
      tag: [],
      categories: [categories[4]],
      reviews: []
    }

    isEditing ? onEditProduct(productFormatted) : onAddProduct(productFormatted)
    e.target.reset()
  }

  return (
    <form className='w-1/3 bg-white shadow-lg rounded-md p-2 mb-4' onSubmit={handleSubmit}>
      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='name' className='text-sm font-medium'>
          Nombre del producto
        </label>

        <input
          type='text'
          name='name'
          id='name'
          placeholder='Nombre...'
          defaultValue={activeProduct?.name}
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='short-description' className='text-sm font-medium'>
          Descripción corta
        </label>

        <textarea
          name='short-description'
          id='short-description'
          placeholder='Descripción corta...'
          rows={2}
          defaultValue={activeProduct ? activeProduct['short-description'] : ''}
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='description' className='text-sm font-medium'>
          Descripción completa
        </label>

        <textarea
          name='description'
          id='description'
          placeholder='Descripción...'
          rows={5}
          defaultValue={activeProduct ? activeProduct.description : ''}
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <div className='flex flex-row justify-between items-center gap-2 my-3'>
        <div className='w-full flex flex-col gap-0.5 items-start'>
          <label htmlFor='stock' className='text-sm font-medium'>
            Stock
          </label>

          <input
            type='text'
            name='stock'
            id='stock'
            placeholder='Stock...'
            defaultValue={activeProduct?.stock}
            className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
          />
        </div>

        <div className='w-full flex flex-col gap-0.5 items-start'>
          <label htmlFor='price' className='text-sm font-medium'>
            Precio
          </label>

          <input
            type='text'
            name='price'
            id='price'
            placeholder='Precio...'
            defaultValue={activeProduct?.price}
            className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
          />
        </div>
      </div>

      <div className='flex flex-row justify-between items-center gap-2 my-3'>
        <div className='w-full flex flex-col gap-0.5 items-start'>
          <label htmlFor='weight' className='text-sm font-medium'>
            Peso del producto
          </label>

          <input
            type='text'
            name='weight'
            id='weight'
            placeholder='Peso...'
            defaultValue={activeProduct?.weight}
            className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
          />
        </div>

        <div className='w-full flex flex-col gap-0.5 items-start'>
          <label htmlFor='height' className='text-sm font-medium'>
            Altura del producto
          </label>

          <input
            type='text'
            name='height'
            id='height'
            placeholder='Altura...'
            defaultValue={activeProduct?.height}
            className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
          />
        </div>
      </div>

      <div className='flex flex-row justify-between items-center gap-2 my-3'>
        <div className='w-full flex flex-col gap-0.5 items-start'>
          <label htmlFor='length' className='text-sm font-medium'>
            Largo del producto
          </label>

          <input
            type='text'
            name='length'
            id='length'
            placeholder='Largo...'
            defaultValue={activeProduct?.length}
            className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
          />
        </div>

        <div className='w-full flex flex-col gap-0.5 items-start'>
          <label htmlFor='width' className='text-sm font-medium'>
            Ancho del producto
          </label>

          <input
            type='text'
            name='width'
            id='width'
            placeholder='Ancho...'
            defaultValue={activeProduct?.width}
            className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
          />
        </div>
      </div>

      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='images' className='text-sm font-medium'>
          Imágenes
        </label>

        <textarea
          name='images'
          id='images'
          placeholder='Imágenes separadas por coma...'
          rows={2}
          defaultValue={activeProduct ? activeProduct.images.map((img) => img.link.split('/products/')[1]).join(', ') : ''}
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <button
        type='submit'
        className='flex flex-row gap-2 justify-center bg-indigo-500 hover:bg-indigo-700 hover:scale-95 font-bold transition py-1 px-4 mb-2 w-full text-center rounded-md text-white shadow-sm'
      >
        <span>
          {isEditing ? 'Editar Producto ' : 'Agregar Producto '}
        </span>
        
        {isEditing ? <Pencil /> : <Plus />}
      </button>
    </form>
  )
}

function TableOfProducts({ products, onClickProduct, onDeleteProduct }) {
  return (
    <div className='flex-1 [&>*:nth-child(odd)]:bg-gray-200'>
      {products.map((product) => (
        <article
          key={product.id}
          className='w-full flex gap-4 justify-between items-center p-2 mb-2 rounded-md'
        >
          <figure>
            <img
              src={product.image}
              alt={product.name}
              className='w-28 aspect-[12/9] object-cover rounded-md'
            />
          </figure>

          <div className='flex-1'>
            <h3 className='text-xl font-medium'>
              {product.name}
            </h3>

            <p className='text-gray-800 mb-2'>
              {product['short-description']}
            </p>

            <p className='text-3xl font-semibold text-gray-600 mb-2'>
              ${product.price}
            </p>

            <p className='text-base font-medium mb-2'>
              En stock:{' '}
              <span className={`font-bold ${product.stock <= 20 ? 'text-red-600' : 'text-green-600'}`}>
                {product.stock}
              </span>
            </p>

            <div className='flex flex-row justify-start items-center gap-4'>
              <button
                className='flex justify-center gap-2 py-1 px-3 bg-orange-500 text-white w-32 rounded-md hover:scale-105 hover:shadow-lg transition font-semibold'
                onClick={() => onClickProduct(product)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className='flex justify-center gap-2 py-1 px-3 bg-red-600 text-white w-32 rounded-md hover:scale-105 hover:shadow-lg transition font-semibold'
                onClick={() => onDeleteProduct(product.id)}
              >
                Eliminar{' '}
                <Trash />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
