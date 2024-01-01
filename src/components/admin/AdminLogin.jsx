import Cookies from 'js-cookie'
import toast from 'react-hot-toast'

import { COOKIE_NAME } from '../../constants'

export default function AdminForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData(e.target)
      formData.append('from', 'admin')

      const response = await fetch('/api/login', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      Cookies.set(COOKIE_NAME, JSON.stringify(data))

      if (response.status !== 401) {
        window.location.href = '/admin'
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al iniciar sesión', {
        duration: 5000,
        position: 'bottom-right',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2 mx-auto my-4 bg-white shadow-lg border-[0.125px] border-gray-300 rounded-md'>
      <header className='p-4 border-b border-gray-300'>
        <h2 className='text-lg font-medium text-center text-slate-700'>
          Por favor, ingrese sus datos de inicio de sesión
        </h2>
      </header>

      <main className='w-full p-4'>
        <div className='flex flex-col w-full gap-1 mb-4'>
          <label htmlFor='email' className='font-medium'>Correo electrónico</label>

          <input
            type='email'
            name='email'
            id='email'
            placeholder='jhon_doe@gmail.com'
            className='py-2 px-4 outline-none border-[0.5px] border-gray-300 rounded-md'
          />
        </div>

        <div className='flex flex-col w-full gap-1 mb-4'>
          <label htmlFor='password' className='font-medium'>Contraseña</label>

          <input
            type='password'
            name='password'
            id='password'
            placeholder='Contraseña'
            className='py-2 px-4 outline-none border-[0.5px] border-gray-300 rounded-md'
          />
        </div>

        <div className='flex flex-row-reverse w-full'>
          <button type='submit' className='px-4 py-2 text-white transition bg-indigo-500 rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg hover:scale-105'>
            Iniciar sesión
          </button>
        </div>
      </main>
    </form>
  )
}
