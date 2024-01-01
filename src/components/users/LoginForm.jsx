import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { COOKIE_NAME } from '../../constants'

export default function LoginForm () {
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData(e.target)
      formData.append('from', 'user')

      const response = await fetch('/api/login', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      Cookies.set(COOKIE_NAME, JSON.stringify(data))

      if (response.status !== 401) {
        window.location.href = '/account'
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
    <div className='w-full my-4'>
      <form onSubmit={handleSubmit} className='w-full md:w-2/3 lg:w-1/2 mx-auto border-[1px] border-gray-300 p-4 rounded'> 
        <h3 className='text-lg font-medium text-center'>
          Iniciar sesión
        </h3>
        
        <div className='w-full my-4 flex flex-col justify-start items-start gap-0.5'>
          <label htmlFor='email' className='w-full text-sm font-medium'>
            Correo Electrónico
          </label>

          <input
            type='email'
            name='email'
            id='email'
            className='w-full py-2 px-4 border-[1px] border-gray-300 outline-none rounded'
            placeholder='Escribe tu correo electrónico'
          />
        </div>

        <div className='w-full my-4 flex flex-col justify-start items-start gap-0.5'>
          <label htmlFor='password' className='w-full text-sm font-medium'>
            Contraseña
          </label>

          <input
            type='password'
            name='password'
            id='password'
            className='w-full py-2 px-4 border-[1px] border-gray-300 outline-none rounded'
            placeholder='Escribe tu contraseña'
          />
        </div>

        <a href='/register' className='inline-block w-full mb-4 font-medium'>
          ¿Aun no tiene cuenta? <span className='font-semibold text-indigo-700'>Regístrate</span>
        </a>

        <div className='grid w-full place-content-center'>
          <button type='submit' className='inline-block px-4 py-2 mx-auto font-bold text-white transition bg-indigo-500 rounded hover:bg-indigo-700 hover:shadow-lg hover:scale-105'>
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  )
}