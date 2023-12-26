import { useState } from 'react'

import Plus from '../icons/Plus'
import Pencil from '../icons/Pencil'
import Trash from '../icons/Trash'

export default function AdminUsers({users}){
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
    <div className='w-full flex flex-row justify-between items-start gap-4'>
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
    <form className='w-1/3 bg-white shadow-lg rounded-md p-2 mb-4' onSubmit={handleSubmit}>
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
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
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
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
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
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
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
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
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
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
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
          className='w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none'
        />
      </div>

      <button
        type='submit'
        className='flex flex-row gap-2 justify-center bg-blue-600 py-1 px-4 mb-2 w-full text-center rounded-md text-white shadow-sm'
      >
        <span>
          {isEditing ? 'Editar Usuario ' : 'Agregar Usuario '}
        </span>
        
        {isEditing ? <Pencil /> : <Plus />}
      </button>
    </form>
  )
}

export default function TableOfUsers({ users, onClickUser, onDeleteUser }){
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

            <p className='text-gray-800 mb-2'>
              <span className='font-bold'>Nombre de usuario: </span> {user.user_name}
            </p>

            <p className='text-gray-800 mb-2'>
              <span className='font-bold'>Email: </span> {user.email}
            </p>
            
            <p className='text-gray-800 mb-2'>
              <span className='font-bold'>Role: </span> {user.role}
            </p>

            <div className='flex flex-row justify-start items-center gap-4'>
              <button
                className='flex justify-center gap-2 py-1 px-3 bg-orange-500 text-white w-32 rounded-md shadow-md font-semibold'
                onClick={() => onClickUser(user)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className='flex justify-center gap-2 py-1 px-3 bg-red-600 text-white w-32 rounded-md shadow-md font-semibold'
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
