import { useState } from 'react'

import Plus from '../icons/Plus'
import Pencil from '../icons/Pencil'
import Trash from '../icons/Trash'

export default function AdminCategories({ categories }) {
  const [adminCategories, setAdminCategories] = useState(categories)
  const [activeCategory, setActiveCategory] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleAddCategory = (category) => {
    setAdminCategories([...adminCategories, category])
  }

  const handleEditCategory = (category) => {
    setAdminCategories(
      adminCategories.map((c) => (c.id === category.id ? category : c))
    )

    setIsEditing(false)
    setActiveCategory(null)
  }

  const handleDeleteCategory = (id) => {
    setAdminCategories(adminCategories.filter((c) => c.id !== id))
  }

  return (
    <div className='flex flex-row items-start justify-between w-full gap-4'>
      <FormCategories
        activeCategory={activeCategory}
        isEditing={isEditing}
        onAddCategory={handleAddCategory}
        onEditCategory={handleEditCategory}
      />

      <TableOfCategories
        categories={adminCategories}
        onClickCategory={(c) => {
          setActiveCategory(c)
          setIsEditing(true)
        }}
        onDeleteCategory={handleDeleteCategory}
      />
    </div>
  )
}

function FormCategories({ activeCategory, isEditing, onAddCategory, onEditCategory }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const category = Object.fromEntries(data)

    const categoryFormatted = {
      id: isEditing ? activeCategory.id : Date.now(),
      slug: category.name.toLowerCase().replaceAll(' ', '-'),
      description: category.description,
      name: category.name
    }

    isEditing ? onEditCategory(categoryFormatted) : onAddCategory(categoryFormatted)
    e.target.reset()
  }

  return (
    <form className='w-1/3 p-2 mb-4 bg-white rounded-md shadow-lg' onSubmit={handleSubmit}>
      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='name' className='text-sm font-medium'>
          Nombre de la categoría
        </label>

        <input
          type='text'
          name='name'
          id='name'
          placeholder='Nombre...'
          defaultValue={activeCategory?.name}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
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
          defaultValue={activeCategory ? activeCategory.description : ''}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <button
        type='submit'
        className='flex flex-row justify-center w-full gap-2 px-4 py-1 mb-2 font-bold text-center text-white transition bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-700 hover:scale-95'
      >
        <span>
          {isEditing ? 'Editar Categoría ' : 'Agregar Categoría '}
        </span>
        
        {isEditing ? <Pencil /> : <Plus />}
      </button>
    </form>
  )
}

function TableOfCategories({ categories, onClickCategory, onDeleteCategory }) {
  return (
    <div className='flex-1 [&>*:nth-child(even)]:bg-gray-200'>
      {categories.map((category) => (
        <article
          key={category.id}
          className='w-full p-2 mb-2 rounded-md'
        >
          <div>
            <h3 className='text-xl font-medium'>
              {category.name}
            </h3>

            <p className='mb-2 text-gray-800'>
              {category.description}
            </p>

            <div className='flex flex-row items-center justify-start gap-4'>
              <button
                className='flex justify-center w-32 gap-2 px-3 py-1 font-semibold text-white transition bg-orange-500 rounded-md hover:scale-105 hover:shadow-lg'
                onClick={() => onClickCategory(category)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className='flex justify-center w-32 gap-2 px-3 py-1 font-semibold text-white transition bg-red-600 rounded-md hover:scale-105 hover:shadow-lg'
                onClick={() => onDeleteCategory(category.id)}
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
