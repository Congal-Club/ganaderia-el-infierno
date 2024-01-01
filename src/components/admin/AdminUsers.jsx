import { useState } from 'react'

import Plus from '../icons/Plus'
import Pencil from '../icons/Pencil'
import Trash from '../icons/Trash'

export default function AdminUsers({ users }){
  const [adminUsers, setAdminUsers] = useState(users)
  const [activeUser, setActiveUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleAddUser = (user) => {
    setAdminUsers([...adminUsers, user])
  }

  const handleEditUser = (user) => {
    setAdminUsers(
      adminUsers.map((c) => (c.id === user.id ? user : c))
    )

    setIsEditing(false)
    setActiveUser(null)
  }

  const handleDeleteUser = (id) => {
    setAdminUsers(adminUsers.filter((c) => c.id !== id))
  }

  return(
    <div className='flex flex-row items-start justify-between w-full gap-4'>
      <FormUsers
        activeUser={activeUser}
        isEditing={isEditing}
        onAddUser={handleAddUser}
        onEditUser={handleEditUser}
      />

      <TableOfUsers
        users={adminUsers}
        onClickUser={(c) => {
          setActiveUser(c)
          setIsEditing(true)
        }}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  )
}

function FormUsers({ activeUser, isEditing, onAddUser, onEditUser }){
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const user = Object.fromEntries(data)

    const userFormatted = {
      id: isEditing ? activeUser.id : Date.now(),
      email: user.email,
      last_name: user.last_name,
      name: user.name,
      role: user.role,
      password: user.password,
      user_name: user.user_name
    }

    isEditing ? onEditUser(userFormatted) : onAddUser(userFormatted)
    e.target.reset()
  }

  return (
    <form className='w-1/3 p-2 mb-4 bg-white rounded-md shadow-lg' onSubmit={handleSubmit}>
      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='email' className='text-sm font-medium'>
          Email del usuario
        </label>

        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email...'
          defaultValue={activeUser?.email}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='name' className='text-sm font-medium'>
          Nombre
        </label>

        <input
          type='text'
          name='name'
          id='name'
          placeholder='Nombre...'
          defaultValue={activeUser?.name}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='last_name' className='text-sm font-medium'>
          Apellidos
        </label>

        <input
          type='text'
          name='last_name'
          id='last_name'
          placeholder='Apellidos...'
          defaultValue={activeUser?.last_name}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>
      
      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='role' className='text-sm font-medium'>
          Role
        </label>

        <select
          type='text'
          name='role'
          id='role'
          placeholder='Role...'
          defaultValue={activeUser?.role}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
        >
          <option value='user'>
            Usuario            
          </option>

          <option value='admin'>
            Administrador
          </option>
        </select>
      </div>

      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='password' className='text-sm font-medium'>
          Contraseña
        </label>

        <input
          type='text'
          name='password'
          id='password'
          placeholder='Contraseña...'
          defaultValue={activeUser?.password}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <div className='w-full flex flex-col gap-0.5 items-start my-3'>
        <label htmlFor='user_name' className='text-sm font-medium'>
          Nombre de usuario
        </label>

        <input
          type='text'
          name='user_name'
          id='user_name'
          placeholder='Nombre de usuario...'
          defaultValue={activeUser?.user_name}
          className='w-full px-2 py-1 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <button
        type='submit'
        className='flex flex-row justify-center w-full gap-2 px-4 py-1 mb-2 font-bold text-center text-white transition bg-indigo-500 rounded-md shadow-sm hover:scale-95 hover:bg-indigo-700'
      >
        <span>
          {isEditing ? 'Editar Usuario ' : 'Agregar Usuario '}
        </span>
        
        {isEditing ? <Pencil /> : <Plus />}
      </button>
    </form>
  )
}

function TableOfUsers({ users, onClickUser, onDeleteUser }){
  return(
    <div className='flex-1 [&>*:nth-child(even)]:bg-gray-200'>
      {users.map((user) => (
        <article
          key={user.id}
          className='w-full p-2 mb-2 rounded-md'
        >
          <div>
            <h3 className='text-xl font-medium'>
              {user.last_name} {' '}
              {user.name} 
            </h3>

            <p className='mb-2 text-gray-800'>
              <span className='font-bold'>Nombre de usuario: </span> {user.user_name}
            </p>

            <p className='mb-2 text-gray-800'>
              <span className='font-bold'>Email: </span> {user.email}
            </p>
            
            <p className='mb-2 text-gray-800'>
              <span className='font-bold'>Role: </span> {user.role}
            </p>

            <div className='flex flex-row items-center justify-start gap-4'>
              <button
                className='flex justify-center w-32 gap-2 px-3 py-1 font-semibold text-white transition bg-orange-500 rounded-md hover:scale-105 hover:shadow-lg'
                onClick={() => onClickUser(user)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className='flex justify-center w-32 gap-2 px-3 py-1 font-semibold text-white transition bg-red-600 rounded-md hover:scale-105 hover:shadow-lg'
                onClick={() => onDeleteUser(user.id)}
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
