import { useState } from 'react'

import Plus from '../islands/icons/Plus'
import Pencil from '../islands/icons/Pencil'
import Trash from '../islands/icons/Trash'

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
    <div className='w-full flex flex-row justify-between items-start gap-4'>
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
    <form className='w-1/3 bg-white shadow-lg rounded-md p-2 mb-4' onSubmit={handleSubmit}>
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
          defaultValue={activeCategory ? activeCategory.description : ''}
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <button
        type='submit'
        className='flex flex-row gap-2 justify-center bg-blue-600 py-1 px-4 mb-2 w-full text-center rounded-md text-white shadow-sm'
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

            <p className='text-gray-800 mb-2'>
              {category.description}
            </p>

            <div className='flex flex-row justify-start items-center gap-4'>
              <button
                className='flex justify-center gap-2 py-1 px-3 bg-orange-500 text-white w-32 rounded-md shadow-md font-semibold'
                onClick={() => onClickCategory(category)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className='flex justify-center gap-2 py-1 px-3 bg-red-600 text-white w-32 rounded-md shadow-md font-semibold'
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
